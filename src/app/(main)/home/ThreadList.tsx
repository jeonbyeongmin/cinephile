'use client';

import { ThreadCard } from '@/components/ThreadCard';
import { Flex } from '@/components/base';
import { useThreadsQuery } from '@/hooks/query/use-threads-query';
import Link from 'next/link';

export function ThreadList() {
  const { data } = useThreadsQuery({ type: 'hot' });

  return (
    <Flex as="ol" direction="col" gap={10}>
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
                  <Flex direction="row" gap={3}>
                    <Link href={`/thread/${thread.threadId}`}>
                      <ThreadCard.Body content={thread.content} />
                    </Link>
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
