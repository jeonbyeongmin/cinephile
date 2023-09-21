import { Button } from '@/components';
import { Flex } from '@/styled-system/jsx';

interface Props {
  mode: 'hot' | 'new';
}

const list = [
  { id: 1, content: '반응순', mode: 'hot' },
  { id: 2, content: '최신순', mode: 'new' },
];

export function Sorter({ mode }: Props) {
  return (
    <Flex gap={2} px={2} py={3}>
      {list.map(item => (
        <Button
          key={item.id}
          href={{ pathname: 'home', query: { sort: item.mode } }}
          rounded="md"
          minW="14"
          size="sm"
          variant="solid"
          status={mode === item.mode ? 'active' : 'inactive'}
          css={{ fontSize: { base: 'xs', md: 'sm' } }}
        >
          {item.content}
        </Button>
      ))}
    </Flex>
  );
}
