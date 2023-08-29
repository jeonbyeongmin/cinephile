'use client';

import { ThreadCard } from '@/components/ThreadCard';

import { useThreadsQuery } from '@/hooks/query/use-threads-query';
import { Stack, VStack } from '@/styled-system/jsx';
import Link from 'next/link';

export function ThreadList() {
  const { data } = useThreadsQuery({ type: 'hot' });

  return (
    <VStack direction="col" gap={10}>
      {data?.pages.map((group, i) => {
        return group.threads?.map(thread => (
          <li key={thread.threadId}>
            <ThreadCard>
              <ThreadCard.Main>
                <ThreadCard.Avatar
                  src={thread.channel.movie.posterPath}
                  navigateTo={`/channel/${thread.channel.channelId}`}
                  ratio={13 / 10}
                  width={40}
                />
                <ThreadCard.Content>
                  <ThreadCard.Head
                    title={thread.channel.movie.krTitle}
                    createdAt={thread.createdAt}
                    navigateTo={`/channel/${thread.channel.channelId}`}
                  />
                  <Stack direction="row" gap={3}>
                    <Link href={`/thread/${thread.threadId}`}>
                      <ThreadCard.Body content={thread.content} />
                    </Link>
                  </Stack>
                  <ThreadCard.Buttons />
                </ThreadCard.Content>
              </ThreadCard.Main>
            </ThreadCard>
          </li>
        ));
      })}
    </VStack>
  );
}
