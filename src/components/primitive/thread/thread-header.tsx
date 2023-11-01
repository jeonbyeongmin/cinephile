import { Flex } from '@/styled-system/jsx';

interface ThreadHeaderProps {
  children: React.ReactNode;
}

export function ThreadHeader({ children }: ThreadHeaderProps) {
  return (
    <Flex align="center" mb={3}>
      {children}
    </Flex>
  );
}
