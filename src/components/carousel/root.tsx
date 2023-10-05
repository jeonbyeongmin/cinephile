import { css, cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { animate, useDragControls, useMotionValue, type DragControls, type MotionValue } from 'framer-motion';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

/***************************** Context **********************************/

interface CarouselValues {
  // ref values
  rootRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLUListElement>;
  itemsRef: React.RefObject<HTMLLIElement[]>;

  // motion values
  minXOffset: number;
  maxXOffset: number;
  currentXOffset: MotionValue<number>;
  controls: DragControls;

  currentPage?: number;
  paginate(delta: number): void;
}

const CarouselContext = createContext<CarouselValues | null>(null);

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (context === null) {
    throw new Error('useCarousel must be used within a CarouselRoot');
  }
  return context;
}

/***************************** Root **********************************/

interface CarouselProps {
  children: React.ReactNode;
  className?: string;

  currentPage?: number;
}

export function CarouselRoot(props: CarouselProps) {
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
      const clampedX = clamp(targetX, minXOffset, maxXOffset);

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

      const newXOffset = clamp(currentXOffset.get() - e.deltaX, minXOffset, maxXOffset);

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
    <CarouselContext.Provider value={value}>
      <div ref={rootRef} onPointerDown={e => controls.start(e)} className={cx(rootStyles, className)}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

/***************************** Helper **********************************/

function getTotalItemsWidth(items: HTMLLIElement[]) {
  const left = items[0].getBoundingClientRect().left;
  const right = items[items.length - 1].getBoundingClientRect().right;
  return right - left;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function calcAngle(x: number, y: number) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

function isVertical(angle: number) {
  const isUp = angle <= -90 + 45 && angle >= -90 - 45;
  const isDown = angle <= 90 + 45 && angle >= 90 - 45;

  return isUp || isDown;
}

/***************************** Base Styles **********************************/

const rootStyles = cx(
  flex({ direction: 'row', align: 'center', justify: 'center', wrap: 'nowrap' }),
  css({ position: 'relative', w: 'full', overflow: 'hidden', touchAction: 'none' })
);
