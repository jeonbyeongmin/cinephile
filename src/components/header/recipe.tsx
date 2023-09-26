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
        backdropFilter: 'none',
        borderBottom: 'none',
      },

      glass: {
        backgroundColor: 'grayGlass.950',
        borderBottom: '1px solid token(colors.gray.700)',

        '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
          backdropFilter: 'blur(8px)',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'glass',
  },
});

export type HeaderVariants = RecipeVariantProps<typeof headerRecipe>;
