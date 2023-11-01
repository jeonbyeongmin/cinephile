import { createContext, useContext } from 'react';

interface TabsValues {
  currentValue: string;
  onChangeValue(value: string): void;
}

const TabsContext = createContext<TabsValues | null>(null);

export function useTabs() {
  const context = useContext(TabsContext);
  if (context === null) {
    throw new Error('useTabs must be used within a TabsRoot');
  }
  return context;
}

export const TabsProvider = TabsContext.Provider;
