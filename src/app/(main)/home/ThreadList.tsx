import type { Thread } from '@/types/thread';

import { ThreadCard } from '@/components/ThreadCard';
import { Flex } from '@/components/base';

interface Props {
  threads: Thread[];
}

export function ThreadList({ threads }: Props) {
  return (
    <Flex as="ol" direction="col" gap={10}>
      {threads.map(thread => (
        <li key={thread.id} className="w-full">
          <ThreadCard>
            <ThreadCard.Main>
              <ThreadCard.Avatar src={thread.moviePoster} />
              <ThreadCard.Content>
                <ThreadCard.Head title={thread.movieTitle} createdAt={thread.createdAt} />
                <ThreadCard.Body content={thread.content} />
                <ThreadCard.Buttons />
              </ThreadCard.Content>
            </ThreadCard.Main>

            {thread.repReply && <ThreadCard.RepReply author={thread.repReply.author} content={thread.content} />}
          </ThreadCard>
        </li>
      ))}
    </Flex>
  );
}
