import { css, cx } from '@/styled-system/css';

import { useCallbackRef } from '@/hooks';
import { useSwiper } from './context';

interface SwiperItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?(): void;
}

export function SwiperItem({ children, className, onClick }: SwiperItemProps) {
  const { itemsRef } = useSwiper();

  const callbackRef = useCallbackRef<HTMLLIElement>(node => {
    itemsRef.current?.push(node);
  });

  return (
    <li ref={callbackRef} className={cx(contentBaseStyles, className)} onClick={onClick}>
      {children}
    </li>
  );
}

const contentBaseStyles = css({
  flexShrink: 0,

  '&:first-child': {
    marginLeft: 0,
  },

  '&:last-child': {
    marginRight: 0,
  },
});
