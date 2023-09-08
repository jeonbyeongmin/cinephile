import { fetchData } from '@/api/fetcher';

export interface GetMovieParams {
  queries: {
    id: number;
  };
}

export interface GetMovieResponse {}

export async function getMovie({ queries }: GetMovieParams) {
  return await fetchData<GetMovieResponse>(`movies?movie_id=${queries.id}`);
}
