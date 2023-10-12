import { Flex } from '@/styled-system/jsx';

interface ThreadProps {
  children: React.ReactNode;
}

export function Thread({ children }: ThreadProps) {
  return (
    <Flex direction="column" bg="gray.950" px={4} py={4}>
      {children}
    </Flex>
  );
}
