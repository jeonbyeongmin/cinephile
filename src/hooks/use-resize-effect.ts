import { usePreservedCallback } from '@/hooks/use-preserved-callback';
import { useEffect, type RefObject } from 'react';

export function useResizeEffect(ref: RefObject<HTMLElement>, onResize: (entry: ResizeObserverEntry) => void) {
  const resizeCallback = usePreservedCallback(onResize);

  useEffect(() => {
    if (!ref.current) return;

    const target = ref.current;

    const observer = new ResizeObserver(entries => {
      if (entries[0] != null) {
        resizeCallback(entries[0]);
      }
    });
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [ref, resizeCallback]);

  return ref;
}
