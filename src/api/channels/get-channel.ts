import type { Movie } from '@/types/movies';

import { fetchData } from '@/api/fetcher';

export interface GetChannelParams {
  queries: { channelId: string };
  isServer?: boolean;
}

export interface GetChannelResponse {
  error: string | null;
  channel: {
    channelId: number;
    movie: Movie;
    threadCount: number;
    subscribeCount: number;
    likeCount: number;
  };
}

export async function getChannel({ queries, isServer }: GetChannelParams) {
  return await fetchData<GetChannelResponse>({
    endpoint: `channels?channel_id=${queries.channelId}`,
    isServer,
  });
}
