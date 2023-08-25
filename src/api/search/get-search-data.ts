import { fetchData } from '@/api/fetcher';
import { generatePath } from '@/utils/path';

export interface GetSearchDataParams {
  queries: {
    keyword?: string;
    type?: 'movie' | 'people';
  };
}

interface GetSearchMovieResponse {
  isAdult: boolean;
  krTitle: string;
  movieId: number;
  channelId: number;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
}
interface GetSearchPeopleResponse {}

export interface GetSearchDataResponse {
  error: string;
  movies?: GetSearchMovieResponse[];
  people?: GetSearchPeopleResponse[];
}

export async function getSearchData({ queries }: GetSearchDataParams) {
  return await fetchData<GetSearchDataResponse>(generatePath('movies/search', queries));
}
