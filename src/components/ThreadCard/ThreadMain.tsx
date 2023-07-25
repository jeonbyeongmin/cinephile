import { Flex } from '@/components/base';

interface Props {
  children: React.ReactNode;
}

export function ThreadMain({ children }: Props) {
  return (
    <Flex direction="row" align="start" gap={3} className="flex-1">
      {children}
    </Flex>
  );
}
