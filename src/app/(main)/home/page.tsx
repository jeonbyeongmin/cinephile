import { threadsMock } from '@/app/thread-mock';
import { Flex } from '@/components/base';
import { ThreadList } from './ThreadList';

export default async function HomePage() {
  return (
    <Flex direction="col">
      <Flex direction="col" className="flex-1 pt-16 m-4">
        <ThreadList threads={threadsMock} />
      </Flex>
    </Flex>
  );
}
