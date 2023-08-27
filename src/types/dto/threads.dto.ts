import type { DefaultDTO } from '@/types/dto/default';
import type { Thread } from '@/types/threads';

// GET /api/threads?thread_id=:thread_id
export interface GetThreadResponseDTO extends DefaultDTO {
  thread: Thread;
}

// GET api/threads?cursor=:cursor?type=:type
export interface GetThreadsResponseDTO extends DefaultDTO {
  threads: Thread[];
}

// POST api/threads
export interface CreateThreadRequestDTO extends DefaultDTO {
  content: string;
  parentId: number | null;
  channelId: number;
}
