'use client';

import { Link, Poster } from '@/components';
import { css, cx } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { type Movie } from '@/types/movies';
import { getYear } from '@/utils';

interface MovieItemProps {
  movie: Movie;
  onClick?: () => void;
}

export function MovieItem({ movie, onClick }: MovieItemProps) {
  return (
    <Link
      href={`/write?channel=${movie.channelId}`}
      onClick={onClick}
      className={css({
        base: { display: 'grid', gridTemplateColumns: '1fr 4fr', columnGap: 3, alignItems: 'center' },
        md: { display: 'flex', flexDirection: 'column', alignItems: 'initial', gap: 1 },
      })}
    >
      <Poster
        src={movie.posterPath}
        alt={movie.krTitle}
        width="100px"
        className={css({ _groupHover: { transform: 'scale(1.05)' }, transition: 'all 150ms ease-in-out' })}
      />
      <div>
        <p className={css({ fontSize: 'sm', lineClamp: 1, pt: 1 })} title={movie.krTitle}>
          {movie.krTitle}
        </p>
        <div className={cx(flex({ alignItems: 'center', gap: 1 }), css({ fontSize: 'xs', color: 'gray.400' }))}>
          <span>{getYear(movie.releaseDate)}</span>
          <span>&#183;</span>
          <span className={css({ lineClamp: 1 })}>{movie.genres.map(genre => genre.genreName).join(', ')}</span>
        </div>
      </div>
    </Link>
  );
}
