import { getThread } from '@/api/threads';
import { Thread } from '@/app/(pages)/home/components/thread/thread';
import { Stack } from '@/styled-system/jsx';

export default async function ThreadDetailPage({ params }: { params: { id: string } }) {
  const threadId = params.id;

  const { thread } = await getThread({ id: Number(threadId), isServer: true });

  return (
    <Stack direction="col" className="mt-16 md:mt-0 flex-1" align="center" justify="center">
      <Thread thread={thread} />
    </Stack>
  );
}
