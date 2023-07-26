import { Flex } from '@/components/base';
import { RatioBox } from '@/components/base/RatioBox';
import type { Movie } from '@/types/movie';
import { getYear } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  return (
    <Link href={`/channel/${movie.channelID}`}>
      <Flex className="rounded-lg border border-gray-700 p-4 hover:bg-gray-800 cursor-pointer">
        <RatioBox className="rounded-md overflow-hidden" ratio={13 / 10}>
          <Image src={movie.poster} alt={movie.title} objectFit="cover" layout="fill" />
        </RatioBox>
        <Flex direction="col" className="pl-5 py-2 flex-1 self-center" gap={3}>
          <Flex direction="col" gap={1}>
            <h2 className=" text-base md:text-lg font-bold ">{movie.title}</h2>
            <h3 className="text-xs md:text-sm text-gray-400">{`${movie.originalTitle}, ${getYear(
              movie.releaseDate
            )}`}</h3>
          </Flex>
          <p className="text-sm md:text-base break-all text-gray-200 line-clamp-2">{movie.overview}</p>
        </Flex>
      </Flex>
    </Link>
  );
}

export default MovieCard;
