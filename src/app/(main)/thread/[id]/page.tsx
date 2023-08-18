import MainThread from '@/app/(main)/thread/[id]/MainThread';
import { ReplyThreadList } from '@/app/(main)/thread/[id]/ReplyThreadList';
import { threadsMock } from '@/app/thread-mock';
import { Button, Flex, Icon, Text } from '@/components/base';
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
    <Flex direction="col" className="mt-16 md:mt-0 flex-1" align="center" justify="center">
      <Flex className="border-b h-[4rem] border-gray-700 w-full py-3" align="center" gap={2}>
        <Button variant="ghost" radius="full" className="p-2">
          <Icon name="arrowLeft" fill="none" size={18} />
        </Button>
        <Text weight="bold" size="lg" lineClamp={1} className="flex-1">
          애브리씽 애브리웨어 올 앳 원스
        </Text>
      </Flex>
      <Flex direction="col" className="m-3">
        <MainThread thread={threadsMock[0]} />
        <Flex direction="col">
          <div className="text-lg">답변</div>
          <ReplyThreadList threads={threadsMock} />
        </Flex>
      </Flex>
    </Flex>
  );
}
