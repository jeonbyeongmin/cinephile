import { css } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';
import Image from 'next/image';

interface ThreadPosterProps {
  posterPath: string;
  krTitle: string;
}

export function ThreadPoster({ posterPath, krTitle }: ThreadPosterProps) {
  return (
    <div
      className={aspectRatio({
        ratio: 11 / 16,
        position: 'relative',
        overflow: 'hidden',
        rounded: 'sm',
        w: '30px',
      })}
    >
      <Image
        src={posterPath}
        alt={krTitle}
        className={css({
          objectFit: 'cover',
          position: 'absolute',
          bg: 'gray.800',
          _groupHover: { transform: 'scale(1.05)' },
          transition: 'all 150ms ease-in-out',
        })}
        sizes="30px"
        fill
      />
    </div>
  );
}
