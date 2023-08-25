import { fetchData } from '@/api/fetcher';

export interface CreateThreadParams {
  queries?: {};
  data?: {
    content: string;
    channelId: number;
    repImage?: string;
    parentId?: number;
  };
}

export interface CreateThreadResponse {
  error: string;
}

export async function createThread({ data }: CreateThreadParams) {
  if (!data) {
    throw new Error('data is required');
  }

  return await fetchData<CreateThreadResponse>('threads', {
    method: 'POST',
    data,
  });
}
