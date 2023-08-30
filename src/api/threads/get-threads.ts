import { fetchData } from '@/api/fetcher';
import { generatePath } from '@/api/path';
import { Thread } from '@/types/threads';

export interface GetThreadsParams {
  queries: {
    cursor?: number;
    type?: 'new' | 'hot';
    parentId?: number;
  };
  isServer?: boolean;
}

export interface GetThreadsResponse {
  error: string;
  threads: Thread[];
  nextCursor: number;
}

export async function getThreads({ queries, isServer }: GetThreadsParams) {
  return await fetchData<GetThreadsResponse>({
    endpoint: generatePath('list/threads', queries),
    isServer,
  });
}
