import { Flex } from '@/components/base';
import { AspectRatioBox } from '@/components/base/AspectRatioBox';
import type { Movie } from '@/types/movie';
import { getYear } from '@/utils/date';
import Image from 'next/image';

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <Flex className="rounded-lg cursor-pointer">
      <AspectRatioBox className="overflow-hidden rounded-sm my-3" ratio={13 / 10} width={50}>
        <Image src={movie.poster} alt={movie.title} className="object-cover" sizes="100px" fill />
      </AspectRatioBox>
      <Flex direction="col" justify="center" className="ml-3 w-full last-of-type:border-b  border-gray-800">
        <p className="text-base md:text-lg font-bold">{movie.title}</p>
        <p className="text-sm md:text-base text-gray-400">{getYear(movie.releaseDate)}</p>
      </Flex>
    </Flex>
  );
}
