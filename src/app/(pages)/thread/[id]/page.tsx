import { getThread } from '@/api/threads';
import { MainThread } from '@/app/(pages)/thread/[id]/components/main-thread';
import { ReplyEditor } from '@/app/(pages)/thread/[id]/components/reply-editor';

import { Flex } from '@/styled-system/jsx';

export default async function ThreadDetailPage({ params }: { params: { id: string } }) {
  const threadId = params.id;

  const { thread } = await getThread({ id: Number(threadId), isServer: true });

  return (
    <Flex direction="column" gap={2} css={{ bg: 'gray.900' }}>
      <Flex direction="column" css={{ bg: 'gray.950', pb: 4 }}>
        <MainThread thread={thread} />
        <ReplyEditor />
      </Flex>
    </Flex>
  );
}
