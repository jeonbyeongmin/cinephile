'use client';

import type { Thread } from '@/types/threads';

import { ThreadCard } from '@/components/ThreadCard';
import { Flex } from '@/components/base';
import { AspectRatioImage } from '@/components/base/AspectRatioImage';
import { useThreadsQuery } from '@/hooks/query/use-threads-query';

interface Props {
  threads: Thread[];
}

export function ThreadList({ threads }: Props) {
  const { threads: th } = useThreadsQuery({ type: 'hot' });
  console.log('🚀 ~ file: page.tsx:8 ~ HomePage ~ threads:', th);

  return (
    <Flex as="ol" direction="col" gap={10}>
      {threads.map(thread => (
        <li key={thread.id}>
          <ThreadCard>
            <ThreadCard.Main>
              <ThreadCard.Avatar
                src={thread.moviePoster}
                navigateTo={`/channel/${thread.channelID}`}
                ratio={13 / 10}
                width={40}
              />
              <ThreadCard.Content>
                <ThreadCard.Head
                  title={thread.movieTitle}
                  createdAt={thread.createdAt}
                  navigateTo={`/channel/${thread.channelID}`}
                />
                <Flex direction="row" gap={3}>
                  <ThreadCard.Body content={thread.content} navigateTo={`/thread/${thread.id}`} />
                  <AspectRatioImage src={thread.repImage} width={80} />
                </Flex>
                <ThreadCard.Buttons />
              </ThreadCard.Content>
            </ThreadCard.Main>
          </ThreadCard>
        </li>
      ))}
    </Flex>
  );
}
