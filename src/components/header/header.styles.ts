import { RecipeVariantProps, cva } from '@/styled-system/css';

export const headerRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    w: 'full',
    position: 'sticky',
    top: 0,
    minH: 14,
    maxH: 14,
    gap: 1,
    zIndex: 1,
    px: 1,
  },

  variants: {
    variant: {
      transparent: {
        backgroundColor: 'transparent',
        borderBottom: '1px solid transparent',
      },

      glass: {
        backgroundColor: 'grayGlass.950',
        borderBottom: '1px solid token(colors.gray.800)',

        '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
          backdropFilter: 'blur(20px)',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'glass',
  },
});

export type HeaderVariants = RecipeVariantProps<typeof headerRecipe>;

export const headerContentRecipe = cva({
  base: {
    lineClamp: 1,
    flex: 1,
  },

  variants: {
    show: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },

  defaultVariants: {
    show: true,
  },
});

export type HeaderContentVariants = RecipeVariantProps<typeof headerContentRecipe>;
