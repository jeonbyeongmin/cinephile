import { useTabs } from '@/components/primitive/tabs/context';

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
