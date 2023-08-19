import { fetchData } from '@/api/fetcher';

export interface GetThreadParams {
  id: number;
}

export interface GetThreadResponse {
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

export async function getThread({ id }: GetThreadParams) {
  return await fetchData<GetThreadResponse>(`threads/${id}`);
}
