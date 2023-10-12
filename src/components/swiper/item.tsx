import { css, cx } from '@/styled-system/css';

import { useCallback } from 'react';
import { useSwiper } from './context';

interface SwiperItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?(): void;
}

export function SwiperItem({ children, className, onClick }: SwiperItemProps) {
  const { itemsRef } = useSwiper();

  const callbackRef = useCallback(
    (e: HTMLLIElement) => {
      if (e) {
        itemsRef.current?.push(e);
      }
    },
    [itemsRef]
  );

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
