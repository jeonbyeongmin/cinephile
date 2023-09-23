import { getThread } from '@/api/threads';
import { MainThread, ReplyEditor, ReplyThreadList } from '@/app/(pages)/thread/[id]/_components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

export default async function ThreadDetailPage({ params }: { params: { id: string } }) {
  const threadId = params.id;
  const { thread } = await getThread({ id: Number(threadId), isServer: true });

  return (
    <Flex direction="column" gap={2} css={{ bg: 'gray.900' }}>
      <MainThread thread={thread} />
      <Flex direction="column" bg="gray.950">
        <p className={css({ px: 3, py: 4, fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold' })}>답변</p>
        <ReplyEditor channelId={thread.channel.channelId} parentId={thread.threadId} />
        <ReplyThreadList parentId={thread.threadId} />
      </Flex>
    </Flex>
  );
}
