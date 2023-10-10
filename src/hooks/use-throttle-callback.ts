import throttle from 'lodash.throttle';

import { usePreservedCallback } from '@/hooks/use-preserved-callback';
import { usePreservedReference } from '@/hooks/use-preserved-reference';
import { useEffect, useMemo } from 'react';

export function useThrottleCallback<Callback extends (...args: any[]) => any>(
  callback: Callback,
  wait: number,
  options: Parameters<typeof throttle>[2] = {}
) {
  const preservedCallback = usePreservedCallback(callback);
  const preservedOptions = usePreservedReference(options);

  const throttledCallback = useMemo(() => {
    return throttle(preservedCallback, wait, preservedOptions);
  }, [preservedCallback, wait, preservedOptions]);

  useEffect(
    () => () => {
      throttledCallback.cancel();
    },
    [throttledCallback]
  );

  return throttledCallback;
}
