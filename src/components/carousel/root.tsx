import { css, cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { createContext, useContext, useMemo } from 'react';

interface CarouselValues {
  currentContent: number;
  onPrevClick(): void;
  onNextClick(): void;
}

const CarouselContext = createContext<CarouselValues | null>(null);

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (context === null) {
    throw new Error('useCarousel must be used within a CarouselRoot');
  }
  return context;
}

interface CarouselProps {
  children: React.ReactNode;
  className?: string;

  currentContent: number;
  onPrevClick(): void;
  onNextClick(): void;
}

export function CarouselRoot(props: CarouselProps) {
  const { children, className, currentContent, onNextClick, onPrevClick } = props;

  const value = useMemo(() => {
    return {
      currentContent,
      onNextClick,
      onPrevClick,
    };
  }, [currentContent, onNextClick, onPrevClick]);

  return (
    <CarouselContext.Provider value={value}>
      <div
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
