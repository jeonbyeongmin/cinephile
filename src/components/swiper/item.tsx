import { useSwiper } from '@/components/swiper/context';
import { itemStyels } from '@/components/swiper/styles';
import { cx } from '@/styled-system/css';

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
