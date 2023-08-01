import MainThread from '@/app/(main)/thread/[id]/MainThread';
import { ReplyThreadList } from '@/app/(main)/thread/[id]/ReplyThreadList';
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
    <Flex direction="col" className="pt-20 flex-1 px-5" align="center" justify="center">
      <MovieCard movie={movie} />
      <MainThread thread={threadsMock[0]} />
      <Flex direction="col">
        <div className="text-lg">답변</div>
        <ReplyThreadList threads={threadsMock} />
      </Flex>
    </Flex>
  );
}
