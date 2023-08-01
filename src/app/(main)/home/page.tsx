import { ThreadList } from '@/app/(main)/home/ThreadList';
import { threadsMock } from '@/app/thread-mock';
import { Flex, Text } from '@/components/base';

export default function HomePage() {
  return (
    <Flex direction="col" className="flex-1 pt-16">
      <Text size="xl" weight="bold" className="pt-3 pb-6">
        쓰레드
      </Text>
      <ThreadList threads={threadsMock} />
      {/* <Flex className="min-w-[300px]">dsf</Flex> */}
    </Flex>
  );
}
