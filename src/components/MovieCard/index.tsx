import { Flex } from '@/components/base';
import { AspectRatioBox } from '@/components/base/AspectRatioBox';
import type { Movie } from '@/types/movies';
import { getYear } from '@/utils/date';
import Image from 'next/image';

interface Props {
  movie: Movie;
  onClick?: () => void;
}

export default function MovieCard({ movie, onClick }: Props) {
  return (
    <Flex className="rounded-lg cursor-pointer hover:bg-gray-800" onClick={onClick}>
      <AspectRatioBox className="overflow-hidden rounded-sm m-3" ratio={13 / 10} width={50}>
        <Image src={movie.poster} alt={movie.title} className="object-cover" sizes="100px" fill />
      </AspectRatioBox>
      <Flex direction="col" justify="center" className="w-full last-of-type:border-b border-gray-800">
        <p className="text-base md:text-lg font-bold">{movie.title}</p>
        <p className="text-sm md:text-base text-gray-400">{getYear(movie.releaseDate)}</p>
      </Flex>
    </Flex>
  );
}
