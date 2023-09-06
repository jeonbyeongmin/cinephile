import { usePreservedCallback } from '@/hooks/use-preserved-callback';
import { usePreservedObject } from '@/hooks/use-preserved-object';
import { useEffect, useRef } from 'react';

export function useObserverEffect(
  callback: IntersectionObserverCallback,
  element: Element | null,
  options?: IntersectionObserverInit
) {
  const observer = useRef<IntersectionObserver>();

  // 리렌더링 시에 새로운 레퍼런스가 생성되어 IntersectionObserver 인스턴스가 새로 생성되는 것을 방지하기 위해 콜백과 옵션을 보존
  const preservedCallback = usePreservedCallback(callback);
  const preservedOptions = usePreservedObject(options || {});

  useEffect(() => {
    if (element) {
      console.log('useObserverEffect');
      observer.current = new IntersectionObserver(preservedCallback, preservedOptions);
      observer.current?.observe(element);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [element, preservedCallback, preservedOptions]);
}
