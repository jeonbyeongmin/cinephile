import { useTabs } from '@/components/tabs/context';

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
}

export function TabsContent(props: TabsContentProps) {
  const { children, value } = props;
  const { currentValue } = useTabs();

  if (currentValue !== value) return null;

  return <div>{children}</div>;
}
