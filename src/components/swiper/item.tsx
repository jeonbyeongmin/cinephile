import { cx } from '@/styled-system/css';

import { useSwiper } from './context';
import { itemStyels } from './styles';

interface SwiperItemProps {
  children: React.ReactNode;
  className?: string;
}

export function SwiperItem({ children, className }: SwiperItemProps) {
  const { itemsRef } = useSwiper();

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
