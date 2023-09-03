import { useBoolean } from '@/hooks/use-boolean';

export function useToggle(initialValue: boolean = false) {
  const [value, , , toggle] = useBoolean(initialValue);
  return [value, toggle] as const;
}
