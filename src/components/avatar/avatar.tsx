import { css, cx } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';
import Image from 'next/image';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  src?: string;
}

export function Avatar({ width, src }: AvatarProps) {
  return (
    <div
      className={cx(aspectRatio({ ratio: 1 / 1 }), css({ position: 'relative', overflow: 'hidden', rounded: 'full' }))}
    >
      <Image
        src={src || '/avatar.jpg'}
        alt="avatar"
        className={css({
          objectFit: 'cover',
          position: 'absolute',
          bg: 'gray.800',
        })}
        sizes={width}
        fill
      />
    </div>
  );
}
