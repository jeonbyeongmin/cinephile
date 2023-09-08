'use client';

import { getThreads } from '@/api/threads/get-threads';
import { useInfiniteQuery } from '@tanstack/react-query';

interface UseThreadsQueryParams {
  type?: 'new' | 'hot';
  parentId?: number;
}

export function useThreadsQuery({ type, parentId }: UseThreadsQueryParams = {}) {
  const fetchThreads = async ({ pageParam = undefined }) => {
    return await getThreads({ queries: { cursor: pageParam, type, parentId } });
  };

  const res = useInfiniteQuery({
    queryKey: ['threads', type, parentId],
    queryFn: fetchThreads,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  return res;
}
