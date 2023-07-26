import MainThread from '@/app/(main)/thread/[id]/MainThread';
import { threadsMock } from '@/app/thread-mock';
import MovieCard from '@/components/MovieCard';
import { Flex } from '@/components/base';
import type { Movie } from '@/types/movie';

export default function ThreadDetailPage() {
  const movie: Movie = {
    id: '1',
    title: '쇼생크 탈출',
    poster: 'https://yts.mx/assets/images/movies/the_shawshank_redemption_1994/medium-cover.jpg',
    originalTitle: 'The Shawshank Redemption',
    overview: `쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 
               쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 
               쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 
               쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리 쇼생크 탈출 줄거리`,
    releaseDate: '1994-09-23',
    channelID: 'c1',
  };

  return (
    <Flex className="w-full pt-20 px-5" align="center" justify="center">
      <Flex className="max-w-screen-lg flex-1" direction="col">
        <MovieCard movie={movie} />
        <MainThread thread={threadsMock[0]} />
      </Flex>
    </Flex>
  );
}
