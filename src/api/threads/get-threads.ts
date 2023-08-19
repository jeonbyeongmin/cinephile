import { fetchData } from '@/api/fetcher';
import { generatePath } from '@/utils/path';

interface Thread {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  parentId: number;

  channel: {
    id: number;
    poster: string;
    title: string;
  };

  author: {
    id: number;
    image: string;
    name: string;
  };
}

export interface GetThreadsParams {
  queries: {
    cursor: number;
    type: 'new' | 'hot';
    parentId?: number;
  };
}

export interface GetThreadsResponse {
  threads: Thread[];
}

export async function getThreads({ queries }: GetThreadsParams) {
  return await fetchData<GetThreadsResponse>(generatePath('threads', queries));
}
