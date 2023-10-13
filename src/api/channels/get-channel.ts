import { fetchData } from '@/api/fetcher';

export interface GetChannelParams {
  queries: {
    channelId: string;
  };
  isServer?: boolean;
}

export interface GetChannelResponse {
  error: string | null;
  channel: {
    channelId: number;
    movie: {
      movieId: number;
      idAdult: boolean;
      originalTitle: string;
      krTitle: string;
      posterPath: string;
      releaseDate: string;
      overview: string;
      stillcuts: string[];
      genres: string[];
      trailers: string[];
    };
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
