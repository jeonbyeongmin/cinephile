import { usePreservedCallback } from '@/hooks/use-preserved-callback';
import { useCallback } from 'react';

export function useCallbackRef<T extends HTMLElement>(callback: (node: T) => void) {
  const preservedCallback = usePreservedCallback(callback);

  return useCallback(
    (node: T) => {
      if (node === null) {
        return;
      }

      preservedCallback(node);
    },
    [preservedCallback]
  );
}
