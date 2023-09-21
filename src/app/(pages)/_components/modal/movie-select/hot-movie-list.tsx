'use client';

import { getHotMovies } from '@/api/movies/get-hot-movies';
import { MovieItem } from '@/app/(pages)/_components/modal/movie-select/movie-item';
import { MovieListSkeleton } from '@/app/(pages)/_components/modal/movie-select/movie-list-skeleton';
import { close } from '@/redux/features/modal-slice';
import { useAppDispatch } from '@/redux/hooks';
import { css, cx } from '@/styled-system/css';
import { flex, float, grid, square } from '@/styled-system/patterns';
import { useQuery } from '@tanstack/react-query';

export function HotMovieList() {
  const dispatch = useAppDispatch();

  const { data, isInitialLoading } = useQuery({
    queryKey: ['movies', 'hot'],
    queryFn: getHotMovies,
  });

  return (
    <div className={cx(flex({ direction: 'column' }), css({ bg: 'gray.950', py: 5 }))}>
      <p className={css({ fontSize: { base: 'md', md: 'lg' }, mb: 3, fontWeight: 'bold' })}>인기 영화</p>
      <ul className={grid({ columns: { base: 1, md: 4 }, columnGap: 3, rowGap: 5 })}>
        {isInitialLoading && <MovieListSkeleton />}

        {data?.movies?.map((movie, index) => (
          <li key={movie.movieId} className={cx(css({ position: 'relative' }), 'group')}>
            <MovieItem movie={movie} onClick={() => dispatch(close())} />
            <div
              className={cx(
                flex({ alignItems: 'center', justifyContent: 'center' }),
                square({ size: { base: 6, md: 7 }, rounded: 'sm', bg: 'gray.900', opacity: 0.9 }),
                float({ placement: 'top-start', offset: { base: ['3.5', '3.5'], md: ['4', '4'] } }),
                css({ fontSize: { base: 'xs', md: 'sm' }, fontWeight: 'bold' })
              )}
            >
              {index + 1}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
