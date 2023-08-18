export interface GetThreadParams {
  id: string;
}

export interface GetThreadResponse {
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

export function getThread({ id }: GetThreadParams) {}
