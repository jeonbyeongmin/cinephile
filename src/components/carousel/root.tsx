import { css, cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { createContext, useContext, useMemo, useRef } from 'react';

/***************************** Context **********************************/

interface CarouselValues {
  // passed down values
  currentContent: number;
  onPrevClick(): void;
  onNextClick(): void;

  // ref values
  rootRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLUListElement>;
  itemsRef: React.RefObject<HTMLLIElement[]>;
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

  currentContent: number;
  onPrevClick(): void;
  onNextClick(): void;
}

export function CarouselRoot(props: CarouselProps) {
  const { children, className, currentContent, onNextClick, onPrevClick } = props;

  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);

  const value = useMemo(() => {
    return {
      currentContent,
      onNextClick,
      onPrevClick,
      contentRef,
      itemsRef,
      rootRef,
    };
  }, [currentContent, onNextClick, onPrevClick]);

  return (
    <CarouselContext.Provider value={value}>
      <div
        ref={rootRef}
        className={cx(
          flex({ direction: 'row', align: 'center', justify: 'center', wrap: 'nowrap' }),
          css({ w: 'full', overflow: 'hidden' }),
          className
        )}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}
