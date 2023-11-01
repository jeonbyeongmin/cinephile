'use client';

import Image from 'next/image';

import type { Movie } from '@/api/movies/get-hot-movies';

import { Link } from '@/components/primitive';
import { css, cx } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';
import { getYear } from '@/utils';

interface MovieItemProps {
  movie: Movie;
  onClick?: () => void;
}

export function MovieItem({ movie, onClick }: MovieItemProps) {
  const movieMetaInfo = `${getYear(movie.releaseDate)} · ${movie.genres.map(genre => genre.genreName).join(', ')}`;

  return (
    <Link href={`/write?channel=${movie.channelId}`} onClick={onClick} className={movieItemStyles}>
      <div className={imageContainerStyles}>
        <Image src={movie.posterPath} alt={movie.krTitle} sizes="10vw" className={imageStyles} fill />
      </div>
      <div>
        <p className={movieTitleStyles} title={movie.krTitle}>
          {movie.krTitle}
        </p>
        <p className={movieMetaInfoStyles} title={movieMetaInfo}>
          {movieMetaInfo}
        </p>
      </div>
    </Link>
  );
}

const movieItemStyles = css({
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    columnGap: 3,
    alignItems: 'center',
  },
  md: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'initial',
    gap: 1,
  },
});

const imageContainerStyles = cx(
  aspectRatio({ ratio: 11 / 16 }),
  css({
    rounded: { base: 'sm', md: 'md' },
    overflow: 'hidden',
    bg: 'gray.800',
    pb: 1,
  })
);

const imageStyles = css({
  _groupHover: {
    transform: 'scale(1.05)',
    transition: 'all 150ms ease-in-out',
  },
});

const movieTitleStyles = css({
  fontSize: 'sm',
  lineClamp: 1,
});

const movieMetaInfoStyles = css({
  fontSize: 'xs',
  color: 'gray.400',
  lineClamp: 1,
});
