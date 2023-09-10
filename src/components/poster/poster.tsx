import { css, cx } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';
import Image from 'next/image';

interface PosterProps {
  src: string;
  alt: string;
  width: string;
  className?: string;
}

export function Poster({ src, alt, className, width }: PosterProps) {
  return (
    <div
      className={cx(aspectRatio({ ratio: 11 / 16 }), css({ position: 'relative', overflow: 'hidden', rounded: 'sm' }))}
    >
      <Image
        src={src}
        alt={alt}
        className={cx(css({ objectFit: 'cover', position: 'absolute', bg: 'gray.800' }), className)}
        sizes={width}
        fill
      />
    </div>
  );
}
