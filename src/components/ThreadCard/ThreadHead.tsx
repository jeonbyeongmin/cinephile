import { Button, Flex, Icon } from '@/components/base';
import { convertDateToString } from '@/utils/date';
import Link from 'next/link';

interface Props {
  title: string;
  createdAt: string;
  navigateTo: string;
}

export function ThreadHead({ title, createdAt, navigateTo }: Props) {
  return (
    <Flex direction="row" align="start" justify="between" className="gap-4 w-full py-1">
      <Link href={navigateTo}>
        <h2 className="text-md flex-1 font-bold">{title}</h2>
      </Link>
      <Flex direction="row" align="center" gap={3}>
        <span className="text-sm text-gray-500">{convertDateToString(createdAt)}</span>
        <Button variant="ghost" className="p-1">
          <Icon name="more" size={16} />
        </Button>
      </Flex>
    </Flex>
  );
}
