import { css, cx } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';
import Image from 'next/image';

interface PosterProps {
  src: string;
  alt: string;
  size: string;
  width?: string;
  className?: string;
}

export function Poster({ src, alt, className, width, size }: PosterProps) {
  return (
    <div
      className={cx(
        aspectRatio({ ratio: 11 / 16 }),
        css({ width, position: 'relative', overflow: 'hidden', rounded: 'md' })
      )}
    >
      <Image
        src={src}
        alt={alt}
        className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }), className)}
        sizes={size}
        fill
      />
    </div>
  );
}
