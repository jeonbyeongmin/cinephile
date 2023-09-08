import { css } from '@/styled-system/css';
import { Circle, type CircleProps } from '@/styled-system/jsx';
import Image from 'next/image';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: CircleProps['size'];
  src?: string;
}

export function Avatar({ size = 8, src }: AvatarProps) {
  return (
    <Circle position="relative" overflow="hidden" bg="gray.300" size={8}>
      <Image
        src={src || 'https://avatars.githubusercontent.com/u/48426991?v=4'}
        alt="avatar"
        className={css({
          objectFit: 'cover',
          position: 'absolute',
        })}
        sizes="100%"
        fill
      />
    </Circle>
  );
}
