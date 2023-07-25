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
        <li key={thread.id}>
          <ThreadCard>
            <ThreadCard.Main>
              <ThreadCard.Avatar src={thread.moviePoster} navigateTo={`/channel/${thread.channelID}`} />
              <ThreadCard.Content>
                <ThreadCard.Head
                  title={thread.movieTitle}
                  createdAt={thread.createdAt}
                  navigateTo={`/channel/${thread.channelID}`}
                />
                <ThreadCard.Body content={thread.content} navigateTo={`/thread/${thread.id}`} />
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
