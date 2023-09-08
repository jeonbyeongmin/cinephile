'use client';

import { getThreads } from '@/api/threads/get-threads';
import { HomeThread } from '@/app/(pages)/home/components/home-thread';
import { Link, Spinner } from '@/components';
import { useObserverEffect } from '@/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useRef } from 'react';

interface ThreadListProps {
  type: 'hot' | 'new';
}

export function HomeThreadList({ type }: ThreadListProps) {
  const fetchThreads = async ({ pageParam = undefined }) => {
    return await getThreads({ queries: { cursor: pageParam, type } });
  };

  const { data, fetchNextPage, hasNextPage, isInitialLoading, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['threads', type],
    queryFn: fetchThreads,
    getNextPageParam: lastPage => lastPage.lastCursor,
  });

  const observerRef = useRef<HTMLDivElement>(null);

  useObserverEffect(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });
    },
    observerRef.current,
    { rootMargin: '200px 0px', threshold: 1, isReady: hasNextPage ?? false }
  );

  return (
    <>
      <ul className={css({ display: 'flex', flexDirection: 'column', gap: 2, bg: 'gray.900', mt: 2 })}>
        {data?.pages.map((group, index) => {
          return (
            <Fragment key={index}>
              {group.threads.map(thread => {
                return (
                  <li key={thread.threadId}>
                    <Link href={`thread/${thread.threadId}`}>
                      <HomeThread thread={thread} />
                    </Link>
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
