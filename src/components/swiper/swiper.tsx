import { SwiperProvider } from '@/components/swiper/context';
import { useWheelEffect } from '@/components/swiper/hooks';
import { SwiperItem } from '@/components/swiper/item';
import { contentStyles } from '@/components/swiper/styles';
import { calcAngle, getTotalItemsWidth, isVertical } from '@/components/swiper/utils';
import { useDebouncedCallback } from '@/hooks';
import { useResizeEffect } from '@/hooks/use-resize-effect';
import { css, cx } from '@/styled-system/css';
import { animate, clamp, motion, useDragControls, useMotionValue } from 'framer-motion';
import { useCallback, useMemo, useRef, useState } from 'react';

interface SwiperProps {
  children: React.ReactNode;
  className?: string;
  currentPage?: number;
  itemsPerPage?: number;
}

export function Swiper(props: SwiperProps) {
  const { children, className, currentPage } = props;

  const contentRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  const currentXOffset = useMotionValue(0);
  const controls = useDragControls();

  const [minXOffset, setMinXOffset] = useState(0);
  const [maxXOffset, setMaxXOffset] = useState(0);

  // Find the closest item offset to the targetX
  const findClosestItemOffset = useCallback((targetX: number, delta: number) => {
    if (itemsRef.current.length === 0) return 0;

    const { right, width } = itemsRef.current[0].getBoundingClientRect();
    const spacing = itemsRef.current[1].getBoundingClientRect().left - right;

    const totalItems = Math.abs(targetX) / (width + spacing / 2);
    const totalCompleteItems = delta === 1 ? Math.floor(totalItems) : Math.ceil(totalItems);

    return 0 - totalCompleteItems * (width + spacing);
  }, []);

  const paginate = useDebouncedCallback(
    (delta: number) => {
      if (!contentRef.current) return;

      const contentVisibleWidth = contentRef.current.offsetWidth;
      let targetX = currentXOffset.get() + delta * -contentVisibleWidth;

      const clampedX = clamp(minXOffset, maxXOffset, targetX);
      targetX = targetX === clampedX ? findClosestItemOffset(targetX, delta) : clampedX;

      animate(currentXOffset, targetX, {
        duration: 0.2,
        ease: 'easeOut',
      });
    },
    50,
    { leading: true, trailing: false }
  );

  // Measure the width of the content and items
  useResizeEffect(contentRef, () => {
    if (!contentRef.current || !itemsRef.current) return;

    const contentVisibleWidth = contentRef.current.offsetWidth;
    const totalItemsWidth = getTotalItemsWidth(itemsRef.current);

    setMinXOffset(-(totalItemsWidth - contentVisibleWidth));
    setMaxXOffset(0);
  });

  // Handle wheel events on the Swiper root element
  const rootRef = useRef<HTMLDivElement>(null);

  useWheelEffect(rootRef, e => {
    const angle = calcAngle(e.deltaX, e.deltaY);

    if (isVertical(angle)) return;

    e.stopPropagation();
    e.preventDefault();

    if (Math.abs(e.deltaX) < 10) return;

    e.deltaX > 0 ? paginate(1) : paginate(-1);
  });

  const value = useMemo(() => {
    return {
      itemsRef,
      currentXOffset,
      currentPage,
      paginate,
    };
  }, [currentXOffset, currentPage, paginate]);

  return (
    <SwiperProvider value={value}>
      <div
        ref={rootRef}
        style={{ touchAction: 'none' }}
        onPointerDown={e => controls.start(e)}
        className={cx(css({ overflow: 'hidden' }), className)}
      >
        <motion.ul
          drag="x"
          ref={contentRef}
          dragControls={controls}
          style={{ x: currentXOffset }}
          dragConstraints={{ left: minXOffset, right: maxXOffset }}
          className={contentStyles}
        >
          {children}
        </motion.ul>
      </div>
    </SwiperProvider>
  );
}
Swiper.Item = SwiperItem;
