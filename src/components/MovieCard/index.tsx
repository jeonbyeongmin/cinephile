import { Flex } from '@/styled-system/jsx';
import { getYear } from '@/utils/date';
import Image from 'next/image';

interface Props {
  movie: {
    isAdult: boolean;
    krTitle: string;
    movieId: number;
    originalTitle: string;
    overview: string;
    posterPath: string;
    releaseDate: string;
  };
  onClick?: () => void;
}

export default function MovieCard({ movie, onClick }: Props) {
  return (
    <Flex className="rounded-lg cursor-pointer hover:bg-gray-800" onClick={onClick}>
      <Image src={movie.posterPath} alt={movie.krTitle} className="object-cover" sizes="100px" fill />
      <Flex direction="col" justify="center" className="w-full last-of-type:border-b border-gray-800">
        <p className="text-base md:text-lg font-bold">{movie.krTitle}</p>
        <p className="text-sm md:text-base text-gray-400">{getYear(movie.releaseDate)}</p>
      </Flex>
    </Flex>
  );
}
