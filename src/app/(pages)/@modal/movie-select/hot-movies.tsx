'use client';

import { getHotMovies } from '@/api/movies/get-hot-movies';
import MoviesSkeleton from '@/app/(pages)/@modal/movie-select/movies-skeleton';
import { Link } from '@/components';
import { close } from '@/redux/features/modalSlice';
import { useAppDispatch } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { aspectRatio } from '@/styled-system/patterns';
import { getYear } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

export function HotMovies() {
  const dispatch = useAppDispatch();

  const { data, isInitialLoading } = useQuery({
    queryKey: ['movies', 'hot'],
    queryFn: getHotMovies,
  });

  return (
    <Flex direction="column" bg="gray.950" py={5}>
      <p className={css({ fontSize: 'lg', mb: 3, fontWeight: 'bold' })}>인기 영화</p>
      {isInitialLoading && <MoviesSkeleton />}
      <ul
        className={css({
          w: 'full',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          columnGap: 3,
          rowGap: 5,
        })}
      >
        {data?.movies?.map(movie => (
          <li key={movie.movieId} className="group">
            <Link href={`/write?channel=${movie.channelId}`} onClick={() => dispatch(close())}>
              <div
                className={aspectRatio({
                  ratio: 11 / 16,
                  position: 'relative',
                  overflow: 'hidden',
                  rounded: 'sm',
                  mb: 2,
                })}
              >
                <Image
                  src={movie.posterPath}
                  alt={movie.krTitle}
                  className={css({
                    objectFit: 'cover',
                    position: 'absolute',
                    bg: 'gray.800',
                    _groupHover: { transform: 'scale(1.05)' },
                    transition: 'all 150ms ease-in-out',
                  })}
                  sizes="100px"
                  fill
                />
              </div>

              <p className={css({ fontSize: 'sm', lineClamp: 1 })} title={movie.krTitle}>
                {movie.krTitle}
              </p>
              <Flex align="center" gap={1} className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}>
                <span className={css({ fontSize: 'xs', color: 'gray.400' })}>{getYear(movie.releaseDate)}</span>
                <span>&#183;</span>
                <span className={css({ fontSize: 'xs', color: 'gray.400', lineClamp: 1 })}>
                  {movie.genres.map(genre => genre.genreName).join(', ')}
                </span>
              </Flex>
            </Link>
          </li>
        ))}
      </ul>
    </Flex>
  );
}
