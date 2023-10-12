import { fetchData } from '@/api/fetcher';

export interface CreateThreadParams {
  queries?: {};
  data: {
    title?: string;
    content: string;
    channelId: number;
    isExposed: boolean;
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

  if (!data.content.trim()) {
    throw new Error('본문을 입력해주세요');
  }

  return await fetchData<CreateThreadResponse>({
    endpoint: 'threads',
    option: {
      method: 'POST',
      data,
    },
  });
}
