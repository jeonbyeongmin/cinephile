import { Flex } from '@/styled-system/jsx';

interface ThreadFooterProps {
  children: React.ReactNode;
}

export function ThreadFooter({ children }: ThreadFooterProps) {
  return <Flex mt={2}>{children}</Flex>;
}
