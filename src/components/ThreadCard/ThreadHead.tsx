import { Button, Flex, Icon } from '@/components/base';
import { getDate } from '@/utils/date';
import Link from 'next/link';

interface Props {
  title: string;
  createdAt: string;
  navigateTo?: string;
}

export function ThreadHead({ title, createdAt, navigateTo }: Props) {
  return (
    <Flex direction="row" align="start" justify="between" className="py-1">
      {navigateTo ? (
        <Link href={navigateTo}>
          <h2 className="text-sm md:text-base flex-1 font-bold break-all">{title}</h2>
        </Link>
      ) : (
        <h2 className="text-sm md:text-base flex-1 font-bold">{title}</h2>
      )}
      <Flex direction="row" align="center">
        <Flex className="text-xs md:text-sm text-gray-500">{getDate(createdAt)}</Flex>
        <Button variant="ghost" className="p-1">
          <Icon name="more" size={16} />
        </Button>
      </Flex>
    </Flex>
  );
}
