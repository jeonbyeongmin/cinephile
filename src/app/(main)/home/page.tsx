import { ThreadList } from '@/app/(main)/home/ThreadList';
import { threadsMock } from '@/app/thread-mock';
import { Flex } from '@/components/base';

export default function HomePage() {
  return (
    <Flex className="flex-1 pt-20 px-5" align="center" justify="center">
      <Flex className="max-w-screen-lg flex-1">
        <ThreadList threads={threadsMock} />
        {/* <Flex className="min-w-[300px]">dsf</Flex> */}
      </Flex>
    </Flex>
  );
}
