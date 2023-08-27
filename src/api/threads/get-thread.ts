import { fetchData } from '@/api/fetcher';
import { Thread } from '@/types/threads';

export interface GetThreadParams {
  id: number;
  isServer?: boolean;
}

export interface GetThreadResponse {
  error: null | string;
  thread: {
    self: Thread;
    parent: Thread;
    child: string[];
  };
}

export async function getThread({ id, isServer }: GetThreadParams) {
  return await fetchData<GetThreadResponse>({
    endpoint: `threads?thread_id=${id}`,
    isServer,
  });
}
