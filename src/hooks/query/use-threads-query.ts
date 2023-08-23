'use client';

import { getThreads } from '@/api/threads/get-threads';
import { useInfiniteQuery } from '@tanstack/react-query';

interface UseThreadsQueryParams {
  type?: 'new' | 'hot';
  parentId?: number;
}

export function useThreadsQuery({ type, parentId }: UseThreadsQueryParams = {}) {
  const fetchThreads = async ({ pageParam = -1 }) => {
    const data = await getThreads({ queries: { cursor: pageParam, type } });
    return data;
  };

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['threads', type, parentId],
    queryFn: fetchThreads,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  return {
    threads: data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
}