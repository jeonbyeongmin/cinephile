import { getThread } from '@/api/threads';
import { ThreadPageHeader } from '@/app/(pages)/thread/[id]/components/header';
import { Flex } from '@/styled-system/jsx';

export default async function ThreadDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const threadId = params.id;
  const { thread } = await getThread({ id: Number(threadId), isServer: true });

  return (
    <Flex direction="column" css={{ position: 'relative' }}>
      <ThreadPageHeader title={thread.channel.movie.krTitle} threadCount={thread.channel.threadCount} />
      {children}
    </Flex>
  );
}