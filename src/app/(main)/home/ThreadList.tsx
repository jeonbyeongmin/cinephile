'use client';

import { ThreadCard } from '@/components/ThreadCard';
import { Flex } from '@/components/base';
import { useThreadsQuery } from '@/hooks/query/use-threads-query';

export function ThreadList() {
  const { data } = useThreadsQuery({ type: 'hot' });

  return (
    <Flex as="ol" direction="col" gap={10}>
      {data?.pages.map((group, i) => {
        return group.threads.map(thread => (
          <li key={thread.threadId}>
            <ThreadCard>
              <ThreadCard.Main>
                <ThreadCard.Avatar
                  src={`https://image.tmdb.org/t/p/original/${thread.channel.poster}`}
                  navigateTo={`/channel/${thread.channel.id}`}
                  ratio={13 / 10}
                  width={40}
                />
                <ThreadCard.Content>
                  <ThreadCard.Head
                    title={thread.channel.krTitle}
                    createdAt={thread.createdAt}
                    navigateTo={`/channel/${thread.channel.id}`}
                  />
                  <Flex direction="row" gap={3}>
                    <ThreadCard.Body content={thread.content} navigateTo={`/thread/${thread.threadId}`} />
                    {/* <AspectRatioImage src={`https://image.tmdb.org/t/p/original/${thread.channel.poster}`} width={80} /> */}
                  </Flex>
                  <ThreadCard.Buttons />
                </ThreadCard.Content>
              </ThreadCard.Main>
            </ThreadCard>
          </li>
        ));
      })}
    </Flex>
  );
}
