// GET /threads/:id
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

// GET /threads?cursor=:cursor?type=:type
export interface GetThreadsResponse {
  threads: GetThreadResponse[];
}

// POST /threads
export interface CreateThreadRequest {
  content: string;
  parentId: number | null;
  channelId: number;
}