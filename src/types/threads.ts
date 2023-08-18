import type { User } from '@/types/users';

export interface Author extends User {}

export interface Thread {
  id: string;
  channelID: string;
  movieTitle: string;
  moviePoster: string;
  content: string;
  repImage: string;
  createdAt: string;
  author: Author;
  repReply?: Thread;
}

export interface ThreadList {}
