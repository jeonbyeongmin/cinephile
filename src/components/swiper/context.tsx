import type { MotionValue } from 'framer-motion';
import { createContext, useContext } from 'react';

interface SwiperValues {
  // ref values
  itemsRef: React.RefObject<HTMLLIElement[]>;

  // motion values
  currentXOffset: MotionValue<number>;

  currentPage?: number;
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
