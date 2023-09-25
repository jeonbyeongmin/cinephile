import { useEffect } from 'react';

export function useClickOutsideEffect<Callback extends (...args: any[]) => any>(
  targetRef: React.RefObject<Element>,
  callback: Callback
) {
  const handleClick = (event: MouseEvent | TouchEvent) => {
    if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}
