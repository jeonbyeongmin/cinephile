import { usePreservedCallback } from '@/hooks/use-preserved-callback';
import { usePreservedReference } from '@/hooks/use-preserved-reference';
import { useEffect, useRef } from 'react';

interface UseObserverEffectParams {
  onIntersect?(...args: any[]): any;
  onVanish?(...args: any[]): any;
  target: React.RefObject<Element> | string;
  options?: { isReady?: boolean } & IntersectionObserverInit;
}

export function useObserverEffect(props: UseObserverEffectParams) {
  const { onIntersect = () => {}, onVanish = () => {}, target, options } = props;

  const observer = useRef<IntersectionObserver>();
  const { isReady = true, ...rest } = options || {};

  const _onIntersect = usePreservedCallback(onIntersect);
  const _onVanish = usePreservedCallback(onVanish);
  const _options = usePreservedReference(rest || {});

  useEffect(() => {
    if (!isReady) {
      return;
    }

    const isString = typeof target === 'string';
    const targetElement = isString ? document.getElementById(target) : target.current;

    if (targetElement) {
      observer.current = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            _onIntersect();
          } else {
            _onVanish();
          }
        });
      }, _options);
      observer.current.observe(targetElement);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [isReady, _onVanish, _onIntersect, _options, target]);
}
