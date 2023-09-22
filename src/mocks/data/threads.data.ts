import type { GetThreadResponseDTO, GetThreadsResponseDTO } from '@/types/dto/threads.dto';

export const thread: GetThreadResponseDTO = {
  error: null,
  thread: {
    author: {
      id: 1,
      image: 'https://avatars.githubusercontent.com/u/26498401?v=4',
      name: '전병민',
    },
    channel: {
      channelId: 1,
      threadCount: 1,
      subscribeCount: 1,
      likeCount: 1,
      movie: {
        genres: [
          {
            genreId: 1,
            genreName: 'Genre 1',
          },
        ],
        movieId: 1,
        isAdult: false,
        krTitle: '쇼생크 탈출',
        originalTitle: 'The Shawshank Redemption',
        posterPath: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        releaseDate: '2021-01-01',
        overview: 'Movie 1 overview',
      },
    },
    threadId: 1,
    parentid: -1,
    content:
      '<p>안녕하세요. 지금부터 긴 글을 작성해보겠습니다. </p><p></p><p>지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다. 지금은 평문입니다.  </p><p></p><p><strong>볼드체 입니다.</strong></p><p></p><p><em>기울림체 입니다.</em></p><p></p><p><s>스트라이크 입니다.</s></p><p></p><ul><li><p>불릿 리스트입니다</p></li><li><p>불릿 리스트입니다</p></li><li><p>불릿 리스트입니다</p></li></ul><ol><li><p>넘버 리스트입니다.</p></li><li><p>넘버 리스트입니다.</p></li><li><p>넘버 리스트입니다.</p></li></ol><blockquote><p>인용 글입니다. 잘써지네요.</p></blockquote><p></p><p>이상 제목이 있는 긴 글이었습니다.</p>',
    title: '제목이 있는 아주 긴 글',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-01T00:00:00.000Z',
    like: 0,
    isLiked: false,
  },
};

export const threads: GetThreadsResponseDTO = {
  error: null,
  threads: [
    {
      threadId: 1,
      parentid: -1,
      content: 'Thread 1 content',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      like: 0,
      isLiked: false,
      author: {
        id: 1,
        image: 'https://avatars.githubusercontent.com/u/26498401?v=4',
        name: 'User 1',
      },
      channel: {
        channelId: 1,
        movie: {
          genres: [
            {
              genreId: 1,
              genreName: 'Genre 1',
            },
          ],
          movieId: 1,
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
      parentid: -1,
      content: 'Thread 1 content',
      createdAt: '2021-01-01T00:00:00.000Z',
      updatedAt: '2021-01-01T00:00:00.000Z',
      like: 0,
      isLiked: false,
      author: {
        id: 1,
        image: 'https://avatars.githubusercontent.com/u/26498401?v=4',
        name: 'User 1',
      },
      channel: {
        channelId: 1,
        movie: {
          genres: [
            {
              genreId: 1,
              genreName: 'Genre 1',
            },
          ],
          movieId: 1,
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
