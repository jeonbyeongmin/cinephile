import { rest } from 'msw';

export const handlers = [
  rest.get('/threads', (req, res, ctx) => {
    if (req.url.searchParams.get('type') === 'popular') {
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

  rest.get('/threads/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        title: 'Thread 1',
        content: 'Thread 1 content',
      })
    );
  }),

  rest.get('/threads/:id/comments', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          content: 'Comment 1 content',
        },
        {
          id: 2,
          content: 'Comment 2 content',
        },
        {
          id: 3,
          content: 'Comment 3 content',
        },
        {
          id: 4,
          content: 'Comment 4 content',
        },
        {
          id: 5,
          content: 'Comment 5 content',
        },
        {
          id: 6,
          content: 'Comment 6 content',
        },
      ])
    );
  }),

  rest.post('/threads/:id/comments', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        content: 'Comment 1 content',
      })
    );
  }),

  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          username: 'user1',
          email: 'qudals@gmail.com',
        },
        {
          id: 2,
          username: 'user2',
          email: 'qudals@naver.com',
        },
      ])
    );
  }),

  rest.get('/users/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        username: 'user1',
        email: '',
      })
    );
  }),
];
