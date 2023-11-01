import { useCallback, useMemo, useState } from 'react';

import { TabsContent } from './content';
import { TabsProvider } from './context';
import { TabsList } from './list';
import { TabsTrigger } from './trigger';

interface TabsProps {
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;

  value?: string;
  onChangeValue?(value: string): void;
}

export function Tabs(props: TabsProps) {
  const { children, className, value, defaultValue, onChangeValue } = props;
  const [currentValue, setCurrentValue] = useState(defaultValue || value || '');

  const changeValue = useCallback(
    (value: string) => {
      setCurrentValue(value);
      onChangeValue?.(value);
    },
    [onChangeValue]
  );

  const contextValue = useMemo(() => {
    return {
      currentValue,
      onChangeValue: changeValue,
    };
  }, [changeValue, currentValue]);

  return (
    <TabsProvider value={contextValue}>
      <div className={className}>{children}</div>
    </TabsProvider>
  );
}

Tabs.Content = TabsContent;
Tabs.Trigger = TabsTrigger;
Tabs.List = TabsList;
