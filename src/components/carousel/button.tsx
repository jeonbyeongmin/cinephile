import { buttonRecipe } from '@/components/button/recipe';
import { useCarousel } from '@/components/carousel/root';
import { css, cx } from '@/styled-system/css';

interface CarouselButtonProps {
  children: React.ReactNode;
  className?: string;
  type: 'prev' | 'next';
}

export function CarouselButton({ children, className, type }: CarouselButtonProps) {
  const { paginate } = useCarousel();

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
