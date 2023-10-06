import { SwiperProvider } from '@/components/swiper/context';
import { rootStyles } from '@/components/swiper/styles';
import { calcAngle, getTotalItemsWidth, isVertical } from '@/components/swiper/utils';
import { cx } from '@/styled-system/css';
import { animate, clamp, useDragControls, useMotionValue } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface SwiperProps {
  children: React.ReactNode;
  className?: string;
  currentPage?: number;
}

export function SwiperRoot(props: SwiperProps) {
  const { children, className, currentPage } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  const [minXOffset, setMinXOffset] = useState(0);
  const [maxXOffset, setMaxXOffset] = useState(0);

  const currentXOffset = useMotionValue(0);
  const controls = useDragControls();

  const findClosestItemOffset = (targetX: number, delta: number) => {
    if (itemsRef.current.length === 0) return 0;

    const { right, width } = itemsRef.current[0].getBoundingClientRect();
    const spacing = itemsRef.current[1].getBoundingClientRect().left - right;
    const totalItems = Math.abs(targetX) / (width + spacing);
    const totalCompleteItems = delta === 1 ? Math.floor(totalItems) : Math.ceil(totalItems);

    return 0 - totalCompleteItems * (width + spacing);
  };

  const paginate = useCallback(
    (delta: number) => {
      if (!contentRef.current) return;

      const xOffset = currentXOffset.get();

      const contentVisibleWidth = contentRef.current.offsetWidth;
      let targetX = xOffset + -contentVisibleWidth * delta;

      const clampedX = clamp(minXOffset, maxXOffset, targetX);

      targetX = targetX === clampedX ? findClosestItemOffset(targetX, delta) : clampedX;

      animate(currentXOffset, targetX, {
        duration: 0.2,
        ease: 'easeOut',
      });
    },
    [currentXOffset, maxXOffset, minXOffset]
  );

  const handleMouseWheel = useCallback(
    (e: WheelEvent) => {
      const angle = calcAngle(e.deltaX, e.deltaY);

      if (isVertical(angle)) return;

      e.stopPropagation();
      e.preventDefault();

      const newXOffset = clamp(minXOffset, maxXOffset, currentXOffset.get() - e.deltaX);

      currentXOffset.set(newXOffset);
    },
    [currentXOffset, minXOffset, maxXOffset]
  );

  const measureOffsets = useCallback(() => {
    if (!contentRef.current || !itemsRef.current || itemsRef.current?.length === 0) return;

    const contentVisibleWidth = contentRef.current.offsetWidth;
    const totalItemsWidth = getTotalItemsWidth(itemsRef.current);

    setMinXOffset(-(totalItemsWidth - contentVisibleWidth));
    setMaxXOffset(0);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;

    const resizeObserver = new ResizeObserver(measureOffsets);
    resizeObserver.observe(rootRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [measureOffsets]);

  useEffect(() => {
    if (!rootRef.current) return;

    const currentScope = rootRef.current;
    currentScope.addEventListener('wheel', handleMouseWheel);

    return () => {
      currentScope.removeEventListener('wheel', handleMouseWheel);
    };
  }, [handleMouseWheel]);

  const value = useMemo(() => {
    return {
      contentRef,
      itemsRef,
      rootRef,

      minXOffset,
      maxXOffset,
      currentXOffset,

      controls,
      currentPage,
      paginate,
    };
  }, [minXOffset, maxXOffset, currentXOffset, controls, currentPage, paginate]);

  return (
    <SwiperProvider value={value}>
      <div ref={rootRef} onPointerDown={e => controls.start(e)} className={cx(rootStyles, className)}>
        {children}
      </div>
    </SwiperProvider>
  );
}
