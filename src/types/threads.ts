export interface Thread {
  threadId: number;
  parentid: number;

  content: string;
  createdAt: string;
  updatedAt: string;
  like: number;
  isLiked: boolean;
  title?: string;

  channel: {
    channelId: number;
    movie: {
      genres: { genreId: number; genreName: string }[];
      movieId: number;
      isAdult: boolean;
      originalTitle: string;
      krTitle: string;
      posterPath: string;
      releaseDate: string;
      overview: string;
    };
    threadCount: number;
    subscribeCount: number;
    likeCount: number;
  };

  author: {
    id: number;
    image: string;
    name: string;
  };
}
