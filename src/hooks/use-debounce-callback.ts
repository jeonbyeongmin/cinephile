import { usePreservedCallback } from '@/hooks/use-preserved-callback';
import { usePreservedObject } from '@/hooks/use-preserved-object';
import debounce from 'lodash.debounce';
import { useEffect, useMemo } from 'react';

/**
 * @description 디바운스된 콜백을 반환하는 훅
 * @license MIT License Copyright (c) 2021 Viva Republica, Inc
 */
export function useDebounceCallback<Callback extends (...args: any[]) => any>(
  callback: Callback,
  wait: number,
  options: Parameters<typeof debounce>[2] = {}
) {
  const preservedCallback = usePreservedCallback(callback);
  const preservedOptions = usePreservedObject(options);

  const debounced = useMemo(() => {
    return debounce(preservedCallback, wait, preservedOptions);
  }, [preservedCallback, preservedOptions, wait]);

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, [debounced]);

  return debounced;
}
