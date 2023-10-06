import { usePreservedCallback } from '@/hooks';
import { RefObject, useEffect } from 'react';

export function useWheelEffect(ref: RefObject<HTMLElement>, callback: (event: WheelEvent) => void) {
  const _callback = usePreservedCallback(callback);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    el.addEventListener('wheel', _callback);
    return () => {
      el.removeEventListener('wheel', _callback);
    };
  }, [_callback, ref]);
}
