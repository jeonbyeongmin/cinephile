import { getThread } from '@/api/threads';
import MainThread from '@/app/(pages)/thread/[id]/MainThread';
import { ReplyThreadList } from '@/app/(pages)/thread/[id]/ReplyThreadList';
import { threadsMock } from '@/app/thread-mock';
import { Button, Icon, Text } from '@/components/base';
import { Stack } from '@/styled-system/jsx';

export default async function ThreadDetailPage({ params }: { params: { id: string } }) {
  const threadId = params.id;

  const { thread } = await getThread({ id: Number(threadId), isServer: true });

  return (
    <Stack direction="col" className="mt-16 md:mt-0 flex-1" align="center" justify="center">
      <Stack className="border-b h-[4rem] border-gray-700 w-full py-3" align="center" gap={2}>
        <Button variant="ghost" radius="full" className="p-2">
          <Icon name="arrowLeft" fill="none" size={18} />
        </Button>
        <Text weight="bold" size="lg" lineClamp={1} className="flex-1">
          애브리씽 애브리웨어 올 앳 원스
        </Text>
      </Stack>
      <Stack direction="col" className="m-3">
        <MainThread thread={thread} />
        <Stack direction="col">
          <div className="text-lg">답변</div>
          <ReplyThreadList threads={threadsMock} />
        </Stack>
      </Stack>
    </Stack>
  );
}
