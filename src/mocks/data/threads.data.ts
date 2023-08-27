import type { GetThreadResponseDTO, GetThreadsResponseDTO } from '@/types/dto/threads.dto';

export const threadMockData: GetThreadResponseDTO = {
  error: null,
  thread: {
    threadId: 1,
    movieId: 1,
    parentid: -1,
    content: 'Thread 1 content',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
    likes: 0,
    isLiked: false,
    author: {
      id: 1,
      image: 'https://avatars.githubusercontent.com/u/26498401?v=4',
      name: 'User 1',
    },
    channel: {
      channelId: 1,
      movie: {
        movieId: 1,
        channelId: 1,
        isAdult: false,
        originalTitle: 'Movie 1',
        krTitle: 'Movie 1',
        posterPath: 'https://image.tmdb.org/t/p/w500/1.jpg',
        releaseDate: '2021-01-01',
        overview: 'Movie 1 overview',
      },
      threadCount: 1,
      subscribeCount: 1,
      likeCount: 1,
    },
  },
};

export const threadsMockData: GetThreadsResponseDTO = {
  error: null,
  threads: [
    {
      threadId: 1,
      movieId: 1,
      parentid: -1,
      content: 'Thread 1 content',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      likes: 0,
      isLiked: false,
      author: {
        id: 1,
        image: 'https://avatars.githubusercontent.com/u/26498401?v=4',
        name: 'User 1',
      },
      channel: {
        channelId: 1,
        movie: {
          movieId: 1,
          channelId: 1,
          isAdult: false,
          originalTitle: 'Movie 1',
          krTitle: 'Movie 1',
          posterPath: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
          releaseDate: '2021-01-01',
          overview: 'Movie 1 overview',
        },
        threadCount: 1,
        subscribeCount: 1,
        likeCount: 1,
      },
    },
    {
      threadId: 2,
      movieId: 2,
      parentid: -1,
      content: 'Thread 1 content',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      likes: 0,
      isLiked: false,
      author: {
        id: 1,
        image: 'https://avatars.githubusercontent.com/u/26498401?v=4',
        name: 'User 1',
      },
      channel: {
        channelId: 1,
        movie: {
          movieId: 1,
          channelId: 1,
          isAdult: false,
          originalTitle: 'Movie 1',
          krTitle: 'Movie 1',
          posterPath: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
          releaseDate: '2021-01-01',
          overview: 'Movie 1 overview',
        },
        threadCount: 1,
        subscribeCount: 1,
        likeCount: 1,
      },
    },
  ],
};
