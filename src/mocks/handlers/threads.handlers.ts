import { rest } from 'msw';

export const threadsHandlers = [
  rest.get('/api/list/threads', (req, res, ctx) => {
    if (req.url.searchParams.get('type') === 'hot') {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            title: 'Thread 1',
            content: 'Thread 1 content',
          },
          {
            id: 2,
            title: 'Thread 2',
            content: 'Thread 2 content',
          },
          {
            id: 3,
            title: 'Thread 3',
            content: 'Thread 3 content',
          },
          {
            id: 4,
            title: 'Thread 4',
            content: 'Thread 4 content',
          },
          {
            id: 5,
            title: 'Thread 5',
            content: 'Thread 5 content',
          },
          {
            id: 6,
            title: 'Thread 6',
            content: 'Thread 6 content',
          },
        ])
      );
    }

    if (req.url.searchParams.get('type') === 'new') {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 7,
            title: 'Thread 7',
            content: 'Thread 7 content',
          },
          {
            id: 8,
            title: 'Thread 8',
            content: 'Thread 8 content',
          },
          {
            id: 9,
            title: 'Thread 9',
            content: 'Thread 9 content',
          },
          {
            id: 10,
            title: 'Thread 10',
            content: 'Thread 10 content',
          },
          {
            id: 11,
            title: 'Thread 11',
            content: 'Thread 11 content',
          },
          {
            id: 12,
            title: 'Thread 12',
            content: 'Thread 12 content',
          },
        ])
      );
    }

    if (req.url.searchParams.get('cursor') === '1') {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            title: 'Thread 1',
            content: 'Thread 1 content',
          },
          {
            id: 2,
            title: 'Thread 2',
            content: 'Thread 2 content',
          },
          {
            id: 3,
            title: 'Thread 3',
            content: 'Thread 3 content',
          },
          {
            id: 4,
            title: 'Thread 4',
            content: 'Thread 4 content',
          },
          {
            id: 5,
            title: 'Thread 5',
            content: 'Thread 5 content',
          },
          {
            id: 6,
            title: 'Thread 6',
            content: 'Thread 6 content',
          },
        ])
      );
    }

    if (req.url.searchParams.get('cursor') === '2') {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 7,
            title: 'Thread 7',
            content: 'Thread 7 content',
          },
          {
            id: 8,
            title: 'Thread 8',
            content: 'Thread 8 content',
          },
          {
            id: 9,
            title: 'Thread 9',
            content: 'Thread 9 content',
          },
          {
            id: 10,
            title: 'Thread 10',
            content: 'Thread 10 content',
          },
          {
            id: 11,
            title: 'Thread 11',
            content: 'Thread 11 content',
          },
          {
            id: 12,
            title: 'Thread 12',
            content: 'Thread 12 content',
          },
        ])
      );
    }

    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'Thread 1',
          content: 'Thread 1 content',
        },
        {
          id: 2,
          title: 'Thread 2',
          content: 'Thread 2 content',
        },
        {
          id: 3,
          title: 'Thread 3',
          content: 'Thread 3 content',
        },
        {
          id: 4,
          title: 'Thread 4',
          content: 'Thread 4 content',
        },
        {
          id: 5,
          title: 'Thread 5',
          content: 'Thread 5 content',
        },
        {
          id: 6,
          title: 'Thread 6',
          content: 'Thread 6 content',
        },
      ])
    );
  }),
];
