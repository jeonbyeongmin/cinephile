import type { DragControls, MotionValue } from 'framer-motion';
import { createContext, useContext } from 'react';

interface SwiperValues {
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

const SwiperContext = createContext<SwiperValues | null>(null);

export function useSwiper() {
  const context = useContext(SwiperContext);
  if (context === null) {
    throw new Error('useSwiper must be used within a SwiperRoot');
  }
  return context;
}

export const SwiperProvider = SwiperContext.Provider;
