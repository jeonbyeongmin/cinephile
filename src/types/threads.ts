import type { User } from '@/types/users';

export interface Author extends User {}

export interface Thread {
  threadId: number;
  movieId: number;
  parentid: number;

  content: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  isLiked: boolean;

  channel: {
    channelId: number;
    movie: {
      movieId: number;
      channelId: number;
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

export interface ThreadList {}
