import { useCarousel } from '@/components/carousel/root';
import { cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { motion, useAnimate } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export function CarouselContent({ children, className }: CarouselProps) {
  const { itemsRef } = useCarousel();
  const [scope, animate] = useAnimate();

  const [minXOffset, setMinXOffset] = useState(0);
  const [maxXOffset, setMaxXOffset] = useState(0);

  const currentSlideIndex = useRef(0);

  const setMinMaxXOffset = useCallback(() => {
    if (!scope.current || !itemsRef.current || itemsRef.current?.length === 0) return;

    const content = scope.current;
    const items = itemsRef.current;

    const contentVisibleWidth = content.offsetWidth;
    const totalItemsWidth = getTotalItemsWidth(items);

    setMinXOffset(-(totalItemsWidth - contentVisibleWidth));
    setMaxXOffset(0);
  }, [scope, itemsRef]);

  const handleMouseWheel = useCallback(
    (e: WheelEvent) => {
      if (!scope.current || !itemsRef.current || itemsRef.current?.length === 0) return;
      if (e.deltaX === 0) return;

      e.preventDefault();
      const delta = e.deltaX;

      const direction = delta > 0 ? 1 : -1;

      currentSlideIndex.current += direction;

      const currentXOffset = scope.current.getBoundingClientRect().left;
      console.log('🚀 ~ file: content.tsx:47 ~ CarouselContent ~ currentXOffset:', currentXOffset);

      if (currentSlideIndex.current < 0) currentSlideIndex.current = 0;
      if (currentSlideIndex.current > itemsRef.current.length - 1)
        currentSlideIndex.current = itemsRef.current.length - 1;

      const newXOffset = Math.max(-currentSlideIndex.current * scope.current.offsetWidth, minXOffset);

      animate(scope.current, { x: newXOffset }, { ease: 'easeOut', type: 'tween', duration: 0.5 });

      console.log(scope.current.offsetWidth);
    },
    [scope, itemsRef, minXOffset, animate]
  );

  useEffect(() => {
    setMinMaxXOffset();

    const currentScope = scope.current;
    currentScope.addEventListener('wheel', handleMouseWheel);
    return () => {
      currentScope.removeEventListener('wheel', handleMouseWheel);
    };
  }, [handleMouseWheel, scope, setMinMaxXOffset]);

  return (
    <motion.ul
      drag={window.innerWidth > 768 ? false : 'x'}
      dragConstraints={{ left: minXOffset, right: maxXOffset }}
      ref={scope}
      className={cx(flex({ flex: '1 1 500px' }), className, 'cp-carousel-content')}
    >
      {children}
    </motion.ul>
  );
}

function getTotalItemsWidth(items: HTMLLIElement[]) {
  const left = items[0].getBoundingClientRect().left;
  const right = items[items.length - 1].getBoundingClientRect().right;
  return right - left;
}
