import { fetchData } from '@/api/fetcher';

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

export interface GetHotMoviesResponse {
  error: string;
  movies?: GetMovieResponse[];
}

export async function getHotMovies() {
  return await fetchData<GetHotMoviesResponse>({
    endpoint: 'movies/hot',
  });
}
