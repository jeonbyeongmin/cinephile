import { getThread } from '@/api/threads';
import MainThread from '@/app/(main)/thread/[id]/MainThread';
import { ReplyThreadList } from '@/app/(main)/thread/[id]/ReplyThreadList';
import { threadsMock } from '@/app/thread-mock';
import { Button, Flex, Icon, Text } from '@/components/base';

export default async function ThreadDetailPage() {
  const thread = await getThread({ id: 1 });
  console.log('🚀 ~ file: page.tsx:8 ~ HomePage ~ thread:', thread);

  return (
    <Flex direction="col" className="mt-16 md:mt-0 flex-1" align="center" justify="center">
      <Flex className="border-b h-[4rem] border-gray-700 w-full py-3" align="center" gap={2}>
        <Button variant="ghost" radius="full" className="p-2">
          <Icon name="arrowLeft" fill="none" size={18} />
        </Button>
        <Text weight="bold" size="lg" lineClamp={1} className="flex-1">
          애브리씽 애브리웨어 올 앳 원스
        </Text>
      </Flex>
      <Flex direction="col" className="m-3">
        <MainThread thread={thread} />
        <Flex direction="col">
          <div className="text-lg">답변</div>
          <ReplyThreadList threads={threadsMock} />
        </Flex>
      </Flex>
    </Flex>
  );
}
