import { useCarousel } from '@/components/carousel/root';
import { css, cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

export function CarouselItem({ children, className }: CarouselItemProps) {
  const { itemsRef } = useCarousel();

  return (
    <li
      ref={el => {
        if (el) {
          itemsRef.current?.push(el);
        }
      }}
      className={cx(itemStyels, className)}
    >
      {children}
    </li>
  );
}

/***************************** Base Styles **********************************/

const itemStyels = cx(
  flex({ align: 'center', justify: 'center' }),
  css({
    bg: 'gray.800',
    rounded: 'md',
    marginLeft: '10px',

    '&:first-child': {
      marginLeft: 0,
    },
  })
);
