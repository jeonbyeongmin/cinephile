interface Genre {
  genreId: number;
  genreName: string;
}

export interface Trailer {
  site: string;
  key: string;
  official: boolean;
  url: string;
}

export interface Movie {
  movieId: number;
  idAdult: boolean;
  originalTitle: string;
  krTitle: string;
  posterPath: string;
  releaseDate: string;
  overview: string;
  genres: Genre[];
  stillcuts: string[];
  trailers: Trailer[];
}
