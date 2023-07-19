import type { User } from '@/types/user';

export interface Author extends User {}

export interface ThreadType {
  id: string;
  movieTitle: string;
  moviePoster: string;
  content: string;
  repImage: string;
  repReplyID: string;
  createdAt: string;
  author: Author;
}
