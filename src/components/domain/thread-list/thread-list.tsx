'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useRef } from 'react';

import { Flex } from '@/styled-system/jsx';

import { getThreads } from '@/api/threads';
import { Spinner } from '@/components/primitive';
import { useObserverEffect } from '@/hooks';
import { type Thread } from '@/types/threads';

interface ThreadListProps {
  children: (props: { thread: Thread }) => JSX.Element;
  className?: string;

  type?: 'hot' | 'new';
  channelId?: string;
  userId?: string;
  parentId?: string;
}

export function ThreadList(props: ThreadListProps) {
  const { type = 'hot', channelId, userId, parentId, children, className } = props;

  const fetchThreads = async ({ pageParam = undefined }) => {
    return await getThreads({
      queries: {
        cursor: pageParam,
        type,
        channel_id: channelId,
        user_id: userId,
        parent_id: parentId,
      },
    });
  };

  const { data, fetchNextPage, hasNextPage, isInitialLoading, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['threads', type, channelId, userId, parentId],
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
      <ul className={className}>
        {data?.pages.map((group, index) => {
          return (
            <Fragment key={index}>
              {group.threads.map(thread => {
                return <li key={thread.threadId}>{children({ thread })}</li>;
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
