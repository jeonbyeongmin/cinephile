import { Poster } from '@/components';
import { css, cx } from '@/styled-system/css';
import { aspectRatio, flex } from '@/styled-system/patterns';
import { PlaiceImage } from '@/utils/image';
import Image from 'next/image';

interface MovieInfoProps {
  representImage: PlaiceImage;
  poster: PlaiceImage;
  movie: {
    krTitle: string;
    originalTitle: string;
    releaseDate: string;
  };
}

export function MovieInfo({ representImage, poster, movie }: MovieInfoProps) {
  return (
    <div className={css({ position: 'relative' })}>
      <div
        className={cx(
          aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }),
          css({ w: 'full', position: 'relative', overflow: 'hidden', opacity: 0.8 })
        )}
      >
        <Image
          src={representImage.img.src}
          alt="대표 이미지"
          placeholder="blur"
          blurDataURL={representImage.base64}
          className={cx(css({ objectFit: 'cover', position: 'absolute' }))}
          sizes="300px"
          priority
          fill
        />
      </div>
      <div className={css({ position: 'absolute', bottom: 0, w: 'full', h: 'full', bgGradient: 'verticalOverflow' })} />
      <div className={cx(css({ position: 'absolute', bottom: 3, left: 3 }), flex({ align: 'center' }))}>
        <Poster
          src={poster.img.src}
          placeholder="blur"
          blurDataURL={poster.base64}
          alt={movie.krTitle}
          width="100px"
          sizes="100px"
        />
        <div className={css({ ml: 3 })}>
          <div
            className={css({ fontSize: { base: 'md', md: 'lg' }, fontWeight: 'bold', color: 'white' })}
            id="movie-title"
          >
            {movie.krTitle}
          </div>
          <div className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}>{movie.originalTitle}</div>
          <div className={css({ fontSize: { base: 'xs', md: 'sm' }, color: 'gray.400' })}>{movie.releaseDate}</div>
        </div>
      </div>
    </div>
  );
}
