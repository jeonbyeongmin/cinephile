import { useThrottleCallback } from '@/hooks/use-throttle-callback';
import { useEffect } from 'react';

export function useScrollEffect(callback: () => void) {
  const _callback = useThrottleCallback(callback, 100);

  useEffect(() => {
    _callback();

    window.addEventListener('scroll', _callback);

    return () => window.removeEventListener('scroll', _callback);
  }, [_callback]);
}
