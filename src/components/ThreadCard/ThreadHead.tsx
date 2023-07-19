import { Button, Flex, Icon } from '@/components/base';
import { convertDateToString } from '@/utils/date';

interface Props {
  title: string;
  createdAt: string;
}

export function ThreadHead({ title, createdAt }: Props) {
  return (
    <Flex direction="row" align="start" justify="between" className="gap-4 w-full py-1">
      <h2 className="text-md flex-1 font-bold">{title}</h2>
      <Flex direction="row" align="center" gap={3}>
        <span className="text-sm text-gray-500">{convertDateToString(createdAt)}</span>
        <Button variant="ghost" className="p-1">
          <Icon name="more" size={16} />
        </Button>
      </Flex>
    </Flex>
  );
}
