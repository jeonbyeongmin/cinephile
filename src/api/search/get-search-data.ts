import { fetchData } from '@/api/fetcher';
import { generatePath } from '@/api/path';

export interface GetSearchDataParams {
  queries: {
    cursor?: number;
    keyword?: string;
  };
  isServer?: boolean;
}

interface Genre {
  genreId: number;
  genreName: string;
}

interface GetMovieResponse {
  isAdult: boolean;
  krTitle: string;
  movieId: number;
  channelId: number;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
  genres: Genre[];
}

export interface GetSearchDataResponse {
  error: string;
  lastCursor: number;
  movies?: GetMovieResponse[];
}

export async function getSearchData({ queries, isServer }: GetSearchDataParams) {
  return await fetchData<GetSearchDataResponse>({
    endpoint: generatePath('movies/search', queries),
    isServer,
  });
}
