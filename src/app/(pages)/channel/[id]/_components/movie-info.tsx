import Image from 'next/image';

import { css, cx } from '@/styled-system/css';
import { aspectRatio, flex } from '@/styled-system/patterns';
import { getFullDate } from '@/utils';

interface MovieInfoProps {
  backdropImage: string;
  posterPath: string;
  movie: {
    krTitle: string;
    originalTitle: string;
    releaseDate: string;
  };
}

export function MovieInfo({ backdropImage, posterPath, movie }: MovieInfoProps) {
  return (
    <div className={movieInfoRootStyles}>
      <div className={backdropImageContainerStyles}>
        <Image src={backdropImage} alt="대표 이미지" sizes="(min-width: 768px) 50vw, 100vw" priority fill />
      </div>
      <div className={backdropImageGradient} />

      <div className={movieInfoContentStyles}>
        <div className={posterContainerStyles}>
          <Image src={posterPath} alt={movie.krTitle} sizes="10vw" fill />
        </div>
        <div>
          <div className={titleStyles} id="movie-title">
            {movie.krTitle}
          </div>
          <div className={metaInfoStyles}>{movie.originalTitle}</div>
          <div className={metaInfoStyles}>{getFullDate(movie.releaseDate)}</div>
        </div>
      </div>
    </div>
  );
}

const movieInfoRootStyles = css({
  position: 'relative',
});

const backdropImageContainerStyles = cx(
  aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
  css({ opacity: 0.8, bg: 'gray.800' })
);

const backdropImageGradient = css({
  inset: 0,
  position: 'absolute',
  bgGradient: 'verticalOverflow',
});

const movieInfoContentStyles = cx(
  css({
    position: 'absolute',
    bottom: 4,
    left: 3,
  }),
  flex({ align: 'center' })
);

const posterContainerStyles = cx(
  aspectRatio({ ratio: 11 / 16 }),
  css({
    width: { base: 20, md: 36 },
    rounded: { base: 'sm', md: 'md' },
    overflow: 'hidden',
    bg: 'gray.800',
    mr: 3,
  })
);

const titleStyles = css({
  fontSize: { base: 'md', md: 'lg' },
  fontWeight: 'bold',
  color: 'white',
});

const metaInfoStyles = css({
  fontSize: { base: 'xs', md: 'sm' },
  color: 'gray.400',
});
