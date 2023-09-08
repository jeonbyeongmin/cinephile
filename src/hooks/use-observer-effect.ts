import { usePreservedCallback } from '@/hooks/use-preserved-callback';
import { usePreservedObject } from '@/hooks/use-preserved-object';
import { useEffect, useRef } from 'react';

/**
 * IntersectionObserver 를 사용하여 특정 엘리먼트의 가시성을 감지하는 훅
 * @param callback
 * @param element
 * @param options
 * @description
 * - optioins.isReady 값은 `true` or `false` 혹은 `undefined` 일 수 있습니다.
 * - `undefined` 일 경우에는 true 로 간주합니다.
 * @example
 * useObserverEffect(callback, elementRef.current, { rootMargin: '100px' })
 * useObserverEffect(callback, elementRef.current, { isReady: isMounted, rootMargin: '100px' })
 */
export function useObserverEffect(
  callback: IntersectionObserverCallback,
  element: Element | null,
  options?: { isReady?: boolean } & IntersectionObserverInit
) {
  const observer = useRef<IntersectionObserver>();
  const { isReady = true, ...rest } = options || {};

  // 리렌더링 시에 새로운 레퍼런스가 생성되어 IntersectionObserver 인스턴스가 새로 생성되는 것을 방지하기 위해 콜백과 옵션을 보존
  const preservedCallback = usePreservedCallback(callback);
  const preservedOptions = usePreservedObject(rest || {});

  useEffect(() => {
    if (element && isReady) {
      observer.current = new IntersectionObserver(preservedCallback, preservedOptions);
      observer.current?.observe(element);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [element, isReady, preservedCallback, preservedOptions]);
}
