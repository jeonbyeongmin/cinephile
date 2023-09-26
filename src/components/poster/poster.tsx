import { css, cx } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';
import { RadiusToken } from '@/styled-system/tokens';
import Image from 'next/image';

interface PosterProps {
  src: string;
  alt: string;
  size: string;
  width?: string;
  className?: string;
  rounded?: RadiusToken;
}

export function Poster({ src, alt, className, width, size, rounded = 'md' }: PosterProps) {
  return (
    <div
      className={cx(aspectRatio({ ratio: 11 / 16 }), css({ width, position: 'relative', overflow: 'hidden', rounded }))}
    >
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL={src}
        className={cx(css({ objectFit: 'cover', bg: 'gray.800' }), className)}
        sizes={size}
        fill
      />
    </div>
  );
}
