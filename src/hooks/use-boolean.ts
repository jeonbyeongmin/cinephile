import { useCallback, useState } from 'react';

/**
 * @description boolean 상태를 다루는 훅
 * @param initialValue 초기값
 * @returns [value, setTrue, setFalse, toggle]
 */
export function useBoolean(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue(prev => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, setTrue, setFalse, toggle] as const;
}
