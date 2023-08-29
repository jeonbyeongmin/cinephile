import { fetchData } from '@/api/fetcher';

export interface CreateThreadParams {
  queries?: {};
  data?: {
    content: string;
    channel: {
      channelId: number;
    };
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

  return await fetchData<CreateThreadResponse>({
    endpoint: 'threads',
    option: {
      method: 'POST',
      data,
      headers: {
        user: 'jbm',
      },
    },
  });
}
