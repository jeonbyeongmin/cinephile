import { fetchData } from '@/api/fetcher';

export interface GetChannelParams {
  queries: {
    id: number;
  };
}

export interface GetChannelResponse {}

export async function getChannel({ queries }: GetChannelParams) {
  return await fetchData<GetChannelResponse>(`channels?channel_id=${queries.id}`);
}
