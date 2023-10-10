import { thread, threads } from '@/mocks/data/threads.data';
import { rest } from 'msw';

export const threadsHandlers = [
  rest.get('/api/list/threads', (req, res, ctx) => {
    if (req.url.searchParams.get('type') === 'hot') {
      return res(ctx.status(200), ctx.json(threads));
    }
  }),

  rest.get('/api/threads', (req, res, ctx) => {
    const threadId = req.url.searchParams.get('thread_id');
    if (threadId) {
      return res(ctx.status(200), ctx.json(thread));
    }
  }),
];
