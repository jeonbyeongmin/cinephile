import { buttonRecipe } from '@/components/button/recipe';
import { useSwiper } from '@/components/swiper/context';
import { css, cx } from '@/styled-system/css';

interface SwiperButtonProps {
  children: React.ReactNode;
  className?: string;
  type: 'prev' | 'next';
}

export function SwiperButton({ children, className, type }: SwiperButtonProps) {
  const { paginate } = useSwiper();

  return (
    <button
      onClick={() => paginate(type === 'prev' ? -1 : 1)}
      className={cx(
        buttonRecipe({ variant: 'outline' }),
        css({
          position: 'absolute',
          display: { base: 'none!', md: 'flex!' },
          zIndex: 1,
        }),
        className
      )}
    >
      {children}
    </button>
  );
}
