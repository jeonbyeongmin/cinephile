import type { ThreadType } from '@/types/thread';

import { ThreadCard } from '@/components/ThreadCard';
import { Flex } from '@/components/base';

interface Props {
  threads: ThreadType[];
}

export function ThreadList({ threads }: Props) {
  return (
    <Flex as="ol" direction="col" className="gap-5">
      {threads.map(thread => (
        <li key={thread.id}>
          <ThreadCard>
            <ThreadCard.Main>
              <ThreadCard.Avatar src={thread.moviePoster} />
              <ThreadCard.Content>
                <ThreadCard.Head title={thread.movieTitle} createdAt={thread.createdAt} />
                <ThreadCard.Body />
                <ThreadCard.Buttons />
              </ThreadCard.Content>
            </ThreadCard.Main>
            <ThreadCard.RepReply />
          </ThreadCard>
        </li>
      ))}
    </Flex>
  );
}
