import { useCallback, useEffect, useRef } from 'react';

/**
 * @description 콜백 함수의 레퍼런스를 보존하는 훅
 * @license MIT License Copyright (c) 2021 Viva Republica, Inc
 */
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
