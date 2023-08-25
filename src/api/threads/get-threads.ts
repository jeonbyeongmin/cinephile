import { fetchData } from '@/api/fetcher';
import { generatePath } from '@/utils/path';

export interface GetThreadsParams {
  queries: {
    cursor?: number;
    type?: 'new' | 'hot';
    parentId?: number;
  };
}
interface Thread {
  threadId: number;
  movieId: number;
  parent: number;

  content: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  isLiked: boolean;

  channel: {
    id: number;
    poster: string;
    originalTitle: string;
    krTitle: string;
  };

  author: {
    id: number;
    image: string;
    name: string;
  };
}

export interface GetThreadsResponse {
  error: string;
  threads: Thread[];
  nextCursor: number;
}

export async function getThreads({ queries }: GetThreadsParams) {
  return await fetchData<GetThreadsResponse>(generatePath('list/threads', queries));
}
