import { useCallback, useEffect, useRef } from 'react';

export function usePreservedCallback<Callback extends (...args: any[]) => any>(callback: Callback) {
  const preserved = useRef<Callback>(callback);

  useEffect(() => {
    preserved.current = callback;
  }, [callback]);

  return useCallback(
    (...args: any[]) => {
      return preserved.current(...args);
    },
    [preserved]
  ) as Callback;
}
