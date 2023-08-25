import { Flex } from '@/components/base';
import { ThreadList } from './ThreadList';

export default function HomePage() {
  return (
    <Flex direction="col">
      <Flex direction="col" className="flex-1 pt-16 m-4">
        <ThreadList />
      </Flex>
    </Flex>
  );
}
