import { threadsMockData } from '@/mocks/data/threads.data';
import { rest } from 'msw';

export const threadsHandlers = [
  rest.get('/api/list/threads', (req, res, ctx) => {
    ctx.delay(1000);

    if (req.url.searchParams.get('type') === 'hot') {
      return res(ctx.status(200), ctx.json(threadsMockData));
    }
  }),
];
