import { useIsMounted } from '@/hooks/use-is-mounted';
import { usePreservedCallback } from '@/hooks/use-preserved-callback';
import { usePreservedObject } from '@/hooks/use-preserved-object';
import { useEffect, useRef } from 'react';

export function useObserverEffect(
  callback: (...args: any[]) => any,
  element: Element | null,
  options?: { isReady?: boolean } & IntersectionObserverInit
) {
  const isMounted = useIsMounted();

  const observer = useRef<IntersectionObserver>();
  const { isReady = true, ...rest } = options || {};

  const preservedCallback = usePreservedCallback(callback);
  const preservedOptions = usePreservedObject(rest || {});

  useEffect(() => {
    if (element && isReady && isMounted) {
      observer.current = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            preservedCallback();
          }
        });
      }, preservedOptions);
      observer.current?.observe(element);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [element, isMounted, isReady, preservedCallback, preservedOptions]);
}
