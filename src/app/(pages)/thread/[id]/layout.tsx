import { getThread } from '@/api/threads';
import { ThreadPageHeader } from '@/app/(pages)/thread/[id]/components/header';

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
    <>
      <ThreadPageHeader title={thread.channel.movie.krTitle} />
      {children}
    </>
  );
}
