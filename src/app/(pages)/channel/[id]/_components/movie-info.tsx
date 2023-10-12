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
      <div className={cx(aspectRatio({ ratio: { base: 16 / 11, md: 16 / 9 } }), css({ opacity: 0.8 }))}>
        <Image
          src={representImage.img.src}
          alt="대표 이미지"
          placeholder="blur"
          blurDataURL={representImage.base64}
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
          fill
        />
      </div>
      <div className={representImageGradient} />
      <div className={cx(css({ position: 'absolute', bottom: 4, left: 3 }), flex({ align: 'center' }))}>
        <Poster
          src={poster.img.src}
          alt={movie.krTitle}
          placeholder="blur"
          blurDataURL={poster.base64}
          width="100px"
          sizes="100px"
        />
        <div className={css({ ml: 3 })}>
          <div className={titleStyles} id="movie-title">
            {movie.krTitle}
          </div>
          <div className={metaInfoStyles}>{movie.originalTitle}</div>
          <div className={metaInfoStyles}>{movie.releaseDate}</div>
        </div>
      </div>
    </div>
  );
}

const representImageGradient = css({
  inset: 0,
  position: 'absolute',
  bgGradient: 'verticalOverflow',
});

const titleStyles = css({
  fontSize: { base: 'md', md: 'lg' },
  fontWeight: 'bold',
  color: 'white',
});

const metaInfoStyles = css({
  fontSize: { base: 'xs', md: 'sm' },
  color: 'gray.400',
});
