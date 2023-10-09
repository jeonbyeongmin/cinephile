import { useSwiper } from '@/components/swiper/context';
import { cva } from '@/styled-system/css';

interface SwiperButtonProps {
  children?: React.ReactNode;
  className?: string;
  type: 'prev' | 'next';
}

export function SwiperButton({ children, className, type }: SwiperButtonProps) {
  const { paginate, isAnimating } = useSwiper();

  return (
    <button onClick={() => paginate(type === 'prev' ? -1 : 1)} className={className} disabled={isAnimating}>
      {children}
    </button>
  );
}

export const swiperButtonRecipe = cva({
  base: {
    position: 'absolute',
    h: 'full',
    top: 0,
    color: 'gray.50',
    display: { base: 'none', md: 'flex' },
    alignItems: 'center',
  },

  variants: {
    type: {
      prev: { left: 2 },
      next: { right: 2 },
    },
    show: {
      true: { display: 'flex!' },
      false: { display: 'none!' },
    },
  },
});
