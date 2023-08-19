import type { User } from '@/types/users';

export interface Author extends User {}

export interface Thread {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  parentId: number;

  channel: {
    id: number;
    poster: string;
    title: string;
  };

  author: {
    id: number;
    image: string;
    name: string;
  };
}

export interface ThreadList {}
