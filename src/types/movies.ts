interface Genre {
  genreId: number;
  genreName: string;
}

export interface Movie {
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
