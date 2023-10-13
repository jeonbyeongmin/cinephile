'use client';

import { getThreads } from '@/api/threads/get-threads';
import { Spinner } from '@/components';
import { useObserverEffect } from '@/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useRef } from 'react';

import { useParams } from 'next/navigation';
import { ChannelThread } from './channel-thread';

interface ThreadListProps {
  type?: 'hot' | 'new';
}

export function ChannelThreadList({ type = 'hot' }: ThreadListProps) {
  const channel_id = useParams().id as string;

  const fetchThreads = async ({ pageParam = undefined }) => {
    return await getThreads({ queries: { cursor: pageParam, type, channel_id } });
  };

  const { data, fetchNextPage, hasNextPage, isInitialLoading, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['threads', type, channel_id],
    queryFn: fetchThreads,
    getNextPageParam: lastPage => lastPage.lastCursor,
  });

  const observerRef = useRef<HTMLDivElement>(null);

  useObserverEffect({
    onIntersect: fetchNextPage,
    target: observerRef,
    options: {
      rootMargin: '200px 0px',
      threshold: 1,
      isReady: hasNextPage ?? false,
    },
  });

  return (
    <>
      <ul className={css({ display: 'flex', flexDirection: 'column', gap: 2, bg: 'gray.900' })}>
        {data?.pages.map((group, index) => {
          return (
            <Fragment key={index}>
              {group.threads.map(thread => {
                return (
                  <li key={thread.threadId}>
                    <ChannelThread thread={thread} />
                  </li>
                );
              })}
            </Fragment>
          );
        })}
        <div id="observe-last-item" ref={observerRef} />
      </ul>

      {isInitialLoading || isFetchingNextPage ? (
        <Flex justifyContent="center" h="2xl" mt={5}>
          <Spinner />
        </Flex>
      ) : null}
    </>
  );
}
