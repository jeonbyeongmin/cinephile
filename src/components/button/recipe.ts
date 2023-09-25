import { cva, type RecipeVariantProps } from '@/styled-system/css';

export const buttonRecipe = cva({
  base: {
    cursor: 'pointer',
    lineHeight: '1.2',
    fontWeight: 'semibold',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    _focusVisible: {
      boxShadow: 'outline',
    },

    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },

    _hover: {
      _disabled: {
        bg: 'initial',
      },
    },
  },

  variants: {
    size: {
      xs: { py: 1, px: 2, gap: 2 },
      sm: { py: 2, px: 3, gap: 2 },
      md: { py: 3, px: 4, gap: 2 },
      lg: { py: 4, px: 6, gap: 2 },
      xl: { py: 5, px: 8, gap: 2 },
    },

    colorScheme: {
      gray: {
        colorPalette: 'gray',
      },
      yellow: {
        colorPalette: 'yellow',
      },
    },

    variant: {
      solid: {
        bg: { base: 'colorPalette.800', _hover: 'colorPalette.700' },
        color: { base: 'gray.50' },
      },

      outline: {
        borderWidth: 1,
        bg: { base: 'colorPalette.800', _hover: 'colorPalette.700' },
        borderColor: { base: 'colorPalette.600' },
        color: { base: 'gray.50' },
      },

      ghost: {
        color: 'inherit',
        bg: { base: 'transparent', _hover: 'colorPalette.800' },
      },

      link: {
        bg: 'transparent',
        color: { base: 'colorPalette.600', _hover: 'colorPalette.700' },
      },
    },
  },

  compoundVariants: [
    {
      variant: 'solid',
      colorScheme: 'yellow',
      css: {
        bg: {
          base: 'yellow.400',
          _hover: 'yellow.500',
        },
        color: {
          base: 'gray.900',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'solid',
    size: 'md',
    colorScheme: 'gray',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>;
