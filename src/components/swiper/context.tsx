import type { MotionValue } from 'framer-motion';
import { createContext, useContext } from 'react';

interface SwiperValues {
  itemsRef: React.RefObject<HTMLLIElement[]>;
  contentRef: React.RefObject<HTMLUListElement>;

  currentX: MotionValue<number>;
  minX: number;

  isAnimating?: boolean;

  updateMinX(): void;
  paginate(delta: number): void;
}

const SwiperContext = createContext<SwiperValues | null>(null);

export function useSwiper() {
  const context = useContext(SwiperContext);
  if (context === null) {
    throw new Error('useSwiper must be used within a SwiperRoot');
  }
  return context;
}

export const SwiperProvider = SwiperContext.Provider;
