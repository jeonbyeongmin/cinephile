import { useTabs } from '@/components/primitive/tabs/context';
import { css, cx } from '@/styled-system/css';

interface TabsTriggerProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

export function TabsTrigger(props: TabsTriggerProps) {
  const { children, className, value } = props;
  const { onChangeValue, currentValue } = useTabs();

  return (
    <li className={css({ flex: 1 })}>
      <button
        data-state={currentValue === value ? 'active' : 'inactive'}
        onClick={() => onChangeValue(value)}
        className={cx(css({ outline: 'none' }), className)}
        id={value}
      >
        {children}
      </button>
    </li>
  );
}
