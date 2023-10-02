import { RecipeVariantProps, cva } from '@/styled-system/css';

export const avatarRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    rounded: 'full',
    border: '1px solid token(colors.gray.400)',

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

export type AvatarVariants = RecipeVariantProps<typeof avatarRecipe>;
