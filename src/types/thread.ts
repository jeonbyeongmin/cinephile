import type { User } from '@/types/user';

export interface Author extends User {}

export interface Thread {
  id: string;
  movieTitle: string;
  moviePoster: string;
  content: string;
  repImage: string;
  createdAt: string;
  author: Author;
  repReply?: Thread;
}
