import { Flex } from '@/components/base';
import Image from 'next/image';

export default function ChannelDetailPage() {
  // 영화 상세 페이지
  return (
    <Flex className="relative w-full aspect-[16/9] max-h-[500px]" align="center" justify="center">
      <div className="absolute inset-0 bg-black opacity-50">
        <Image
          src="https://image.tmdb.org/t/p/w500/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
          className="object-cover"
          alt="movie still image"
          priority
          fill
        />
      </div>
      <Flex className="inset-0 max-w-screen-lg w-full z-10">
        <div className="flex flex-col items-center justify-center aspect-poster">
          <Image
            src="https://yts.mx/assets/images/movies/the_shawshank_redemption_1994/medium-cover.jpg"
            className="object-contain"
            alt="movie still image"
            priority
            width={64}
            height={64}
          />
        </div>

        <div className="text-2xl font-bold text-white">The Tomorrow War</div>
        <div className="text-sm text-white">2021-07-02</div>
      </Flex>
    </Flex>
  );
}
