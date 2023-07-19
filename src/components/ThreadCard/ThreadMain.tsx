import { Flex } from '@/components/base';

interface Props {
  children: React.ReactNode;
}

export function ThreadMain({ children }: Props) {
  return <Flex>{children}</Flex>;
}
