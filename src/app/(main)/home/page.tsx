import { ThreadList } from '@/app/(main)/home/ThreadList';
import { threadsMock } from '@/app/(main)/home/thread-mock';
import { Flex } from '@/components/base';

export default function HomePage() {
  return (
    <Flex className="w-full pt-20" align="center" justify="center">
      <div className="max-w-screen-lg w-full">
        <ThreadList threads={threadsMock} />
      </div>
    </Flex>
  );
}
