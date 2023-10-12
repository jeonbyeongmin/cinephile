import { useEffect } from 'react';

interface UseScrollLockParams {
  value: boolean;
  container?: HTMLElement;
}

export function useScrollLock({ value, container = window.document.body }: UseScrollLockParams) {
  useEffect(() => {
    value ? (container.style.overflow = 'hidden') : (container.style.overflow = '');

    return () => {
      container.style.overflow = '';
    };
  }, [container.style, value]);
}
