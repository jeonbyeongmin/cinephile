import { useTabs } from '@/components/tabs/context';
import { useCallback, useState } from 'react';

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsList(props: TabsListProps) {
  const { children, className } = props;
  const { onChangeValue, currentValue } = useTabs();

  const [tabList, setTabList] = useState<HTMLButtonElement[]>([]);

  const changeValue = useCallback(
    (index: number) => {
      const wrappedIndex = wrap(0, tabList.length - 1, index);
      const tabId = tabList[wrappedIndex].id;

      onChangeValue(tabId);
      tabList[wrappedIndex].focus();
    },
    [onChangeValue, tabList]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLUListElement>) => {
      const { key } = event;
      const currentIndex = tabList.findIndex(tab => tab.id === currentValue);

      if (key === 'ArrowLeft') {
        changeValue(currentIndex - 1);
      }
      if (key === 'ArrowRight') {
        changeValue(currentIndex + 1);
      }

      if (key === 'Home') {
        changeValue(0);
      }
      if (key === 'End') {
        changeValue(tabList.length - 1);
      }

      const numberKey = Number(key);

      if (!!numberKey && numberKey > 0 && numberKey <= tabList.length) {
        changeValue(numberKey - 1);
      }
    },
    [changeValue, currentValue, tabList]
  );

  const listCallbackRef = useCallback((node: HTMLUListElement) => {
    const tabElements = Array.from(node.children || []).map((element: Element) => element.querySelector('button'));
    const tabList = tabElements.filter(tab => tab?.id);

    setTabList(tabList as HTMLButtonElement[]);
  }, []);

  return (
    <ul ref={listCallbackRef} onKeyDownCapture={handleKeyDown} className={className}>
      {children}
    </ul>
  );
}

function wrap(min: number, max: number, value: number) {
  if (value < min) {
    return max;
  }

  if (value > max) {
    return min;
  }

  return value;
}
