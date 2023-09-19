import { usePreservedCallback } from '@/hooks/use-preserved-callback';
import { usePreservedReference } from '@/hooks/use-preserved-reference';
import { useEffect, useRef } from 'react';

export function useObserverEffect(
  callback: (...args: any[]) => any,
  targetRef: React.RefObject<Element>,
  options?: { isReady?: boolean } & IntersectionObserverInit
) {
  const observer = useRef<IntersectionObserver>();
  const { isReady = true, ...rest } = options || {};

  const preservedCallback = usePreservedCallback(callback);
  const preservedOptions = usePreservedReference(rest || {});

  useEffect(() => {
    if (targetRef.current && isReady) {
      observer.current = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            preservedCallback();
          }
        });
      }, preservedOptions);
      observer.current.observe(targetRef.current);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [isReady, preservedCallback, preservedOptions, targetRef]);
}
