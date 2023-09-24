import { RecipeVariantProps, cva } from '@/styled-system/css';
import Image from 'next/image';

const avatar = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    rounded: 'full',

    '& > img': {
      objectFit: 'cover',
      position: 'absolute',
      bg: 'gray.800',
    },
  },

  variants: {
    size: {
      sm: {
        w: 6,
        h: 6,
      },
      md: {
        w: 8,
        h: 8,
      },
      lg: {
        w: 12,
        h: 12,
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

type AvatarVariants = RecipeVariantProps<typeof avatar>;
type AvatarProps = AvatarVariants & React.ComponentProps<'img'> & { fallback?: React.ReactNode };

export function Avatar({ size, src, fallback }: AvatarProps) {
  return (
    <div className={avatar({ size })}>{!!src ? <Image src={src} alt="avatar" sizes="30px" fill /> : fallback}</div>
  );
}
