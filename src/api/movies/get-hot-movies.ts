import { fetchData } from '@/api/fetcher';

interface Genre {
  genreId: number;
  genreName: string;
}

export interface Movie {
  channelId: number;
  genres: Genre[];
  isAdult: boolean;
  krTitle: string;
  movieId: number;
  originalTitle: string;
  overview: string;
  posterPath: string;
  releaseDate: string;
}

export interface GetHotMoviesResponse {
  error: string;
  movies?: Movie[];
}

export async function getHotMovies() {
  return await fetchData<GetHotMoviesResponse>({
    endpoint: 'movies/hot',
  });
}
