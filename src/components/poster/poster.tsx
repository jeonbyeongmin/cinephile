import { css, cx } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';
import { RadiusToken } from '@/styled-system/tokens';
import Image, { ImageProps } from 'next/image';

interface PosterProps extends Omit<ImageProps, 'width'> {
  className?: string;
  rounded?: RadiusToken;
  width?: string;
}

export function Poster({ src, alt, className, width, sizes, rounded = 'md', ...rest }: PosterProps) {
  return (
    <div
      className={cx(aspectRatio({ ratio: 11 / 16 }), css({ width, position: 'relative', overflow: 'hidden', rounded }))}
    >
      <Image
        src={src}
        alt={alt}
        className={cx(css({ objectFit: 'cover', bg: 'gray.800' }), className)}
        sizes={sizes}
        fill
        {...rest}
      />
    </div>
  );
}
