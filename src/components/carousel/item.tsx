import { css, cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

export function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <li
      className={cx(
        flex({
          align: 'center',
          justify: 'center',
        }),
        css({
          flex: '0 0 150px',
          bg: 'gray.800',
          h: '150px',
          rounded: 'md',
          marginLeft: '10px',
          '&:first-child': {
            marginLeft: 0,
          },
        }),
        className
      )}
    >
      {children}
    </li>
  );
}
