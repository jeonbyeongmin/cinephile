import { usePreservedCallback } from '@/hooks';
import { useEffect } from 'react';

export function useEscapePressEffect(callback: () => void) {
  const _callback = usePreservedCallback(callback);

  useEffect(() => {
    function handleEscapePress(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        _callback();
      }
    }

    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [_callback]);
}
