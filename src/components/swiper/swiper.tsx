import { animate, clamp, useMotionValue } from 'framer-motion';
import { useCallback, useMemo, useRef, useState } from 'react';

import { useWheelEffect } from '@/components/swiper/hooks';
import { css, cx } from '@/styled-system/css';

import { SwiperButton } from './button';
import { SwiperContent } from './content';
import { SwiperProvider } from './context';
import { SwiperItem } from './item';
import { calcAngle, getTotalItemsWidth, isVertical } from './utils';

interface SwiperProps {
  children: React.ReactNode;
  className?: string;
}

export function Swiper({ children, className }: SwiperProps) {
  const contentRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  const currentX = useMotionValue(0);
  const [minX, setMinX] = useState(0);

  const isAnimating = useMemo(() => currentX.isAnimating(), [currentX]);

  const getTargetX = useCallback((x: number) => clamp(minX, 0, x), [minX]);

  const getPageWidth = useCallback(() => contentRef.current?.offsetWidth ?? 0, []);

  const updateMinX = useCallback(() => {
    const pageWidth = getPageWidth();
    const totalItemsWidth = getTotalItemsWidth(itemsRef.current);
    const minX = -(totalItemsWidth - pageWidth);

    setMinX(minX);
  }, [getPageWidth]);

  const paginate = useCallback(
    (delta: number) => {
      if (isAnimating) return;

      const pageWidth = getPageWidth();
      const targetX = getTargetX(currentX.get() + delta * -pageWidth);

      animate(currentX, targetX, { duration: 0.3, ease: 'easeOut' });
    },
    [currentX, getPageWidth, getTargetX, isAnimating]
  );

  // horizontal scroll effect
  const rootRef = useRef<HTMLDivElement>(null);

  useWheelEffect(rootRef, e => {
    const angle = calcAngle(e.deltaX, e.deltaY);

    if (isVertical(angle)) return;

    e.stopPropagation();
    e.preventDefault();

    const targetX = getTargetX(currentX.get() - e.deltaX);
    currentX.set(targetX);
  });

  // provider value
  const value = useMemo(
    () => ({
      itemsRef,
      contentRef,
      minX,
      currentX,
      isAnimating,
      paginate,
      updateMinX,
    }),
    [minX, currentX, isAnimating, paginate, updateMinX]
  );

  return (
    <SwiperProvider value={value}>
      <div ref={rootRef} className={cx(css({ overflow: 'hidden' }), className)}>
        {children}
      </div>
    </SwiperProvider>
  );
}

Swiper.Item = SwiperItem;
Swiper.Content = SwiperContent;
Swiper.Button = SwiperButton;
