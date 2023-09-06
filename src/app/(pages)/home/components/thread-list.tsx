'use client';

import { getThreads } from '@/api/threads/get-threads';
import { Thread } from '@/app/(pages)/home/components/thread/thread';
import { useObserverEffect } from '@/hooks';
import { css } from '@/styled-system/css';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Fragment, useRef } from 'react';

// TODO: 페이징 처리

interface ThreadListProps {
  type: 'hot' | 'new';
}

export function ThreadList({ type }: ThreadListProps) {
  const fetchThreads = async ({ pageParam = undefined }) => {
    return await getThreads({ queries: { cursor: pageParam, type } });
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
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
    <ul className={css({ display: 'flex', flexDirection: 'column', gap: 2, bg: 'gray.900', pt: 2 })}>
      {data?.pages.map((group, index) => {
        return (
          <Fragment key={index}>
            {group.threads.map(thread => {
              return (
                <li key={thread.threadId}>
                  <Thread thread={thread} />
                </li>
              );
            })}
          </Fragment>
        );
      })}

      <div id="observe-last-item" ref={observerRef} />
    </ul>
  );
}
