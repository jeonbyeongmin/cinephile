import { useCallback, useState } from 'react';

export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState(initialValue);

  const excuteToggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);

  return [value, excuteToggle] as const;
}
