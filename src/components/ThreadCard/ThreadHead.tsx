import { Flex } from '@/components/base';

interface Props {
  title: string;
  createdAt: string;
}

export function ThreadHead({ title, createdAt }: Props) {
  return (
    <Flex>
      <h2 className="text-2xl font-bold">{title}</h2>
      <span className="text-sm text-gray-500">{createdAt}</span>
    </Flex>
  );
}
