import { Flex } from '@/components/base';

interface Props {
  children: React.ReactNode;
}

export function ThreadContent({ children }: Props) {
  return (
    <Flex direction="col" gap={2} className="w-full">
      {children}
    </Flex>
  );
}
