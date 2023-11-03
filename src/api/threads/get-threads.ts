import { fetchData } from '@/api/fetcher';
import { generatePath } from '@/api/path';
import { Thread } from '@/types/threads';

export interface GetThreadsParams {
  queries: {
    cursor?: number;
    type?: 'new' | 'hot';
    parent_id?: string;
    channel_id?: string;
    user_id?: string;
  };
  isServer?: boolean;
}

export interface GetThreadsResponse {
  error: string;
  threads: Thread[];
  lastCursor: number;
}

export async function getThreads({ queries, isServer }: GetThreadsParams) {
  return await fetchData<GetThreadsResponse>({
    endpoint: generatePath('list/threads', queries),
    isServer,
  });
}
