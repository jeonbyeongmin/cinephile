import { useEffect } from 'react';

import { useThrottleCallback } from './use-throttle-callback';

interface UseScrollEffectParams {
  onScroll: (...args: any[]) => any;
  target?: HTMLElement;
}

export function useScrollEffect(params: UseScrollEffectParams) {
  const { onScroll, target = document } = params;
  const throttledCallback = useThrottleCallback(onScroll, 100);

  useEffect(() => {
    throttledCallback();

    target.addEventListener('scroll', throttledCallback);

    return () => target.removeEventListener('scroll', throttledCallback);
  }, [target, throttledCallback]);
}
