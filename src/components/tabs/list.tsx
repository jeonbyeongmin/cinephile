import { useCallback, useRef } from 'react';

import { useCallbackRef } from '@/hooks';

import { useTabs } from './context';

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsList(props: TabsListProps) {
  const { children, className } = props;
  const { onChangeValue, currentValue } = useTabs();

  const tabList = useRef<HTMLButtonElement[]>([]);

  const changeValue = useCallback(
    (index: number) => {
      const wrappedIndex = wrap(0, tabList.current.length - 1, index);
      const tabId = tabList.current[wrappedIndex].id;

      onChangeValue(tabId);
      tabList.current[wrappedIndex].focus();
    },
    [onChangeValue, tabList]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLUListElement>) => {
      const { key } = event;
      const currentIndex = tabList.current.findIndex(tab => tab.id === currentValue);

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
        changeValue(tabList.current.length - 1);
      }
    },
    [changeValue, currentValue, tabList]
  );

  const listCallbackRef = useCallbackRef<HTMLUListElement>(node => {
    const tabElements = Array.from(node.children || []).map((element: Element) => element.querySelector('button'));
    const newTabList = tabElements.filter(tab => tab?.id);

    tabList.current = newTabList as HTMLButtonElement[];
  });

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
