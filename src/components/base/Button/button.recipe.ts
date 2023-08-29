import { cva, type RecipeVariantProps } from '@/styled-system/css';

export const button = cva({
  base: {
    display: 'flex',
  },
  variants: {
    size: {
      sm: {
        fontSize: 'sm',
        px: 2,
        py: 1,
      },
      md: {
        fontSize: 'md',
        px: 3,
        py: 2,
      },
      lg: {
        fontSize: 'lg',
        px: 4,
        py: 3,
      },
    },

    rounded: {
      sm: { rounded: 'sm' },
      md: { rounded: 'md' },
      lg: { rounded: 'lg' },
      xl: { rounded: 'xl' },
      '2xl': { rounded: '2xl' },
      '3xl': { rounded: '3xl' },
      full: { rounded: 'full' },
    },

    variant: {
      outline: {
        border: '1px solid',
        bg: 'inherit',
        borderColor: { base: 'colorPalette.600', _light: 'colorPalette.300' },
        color: { base: 'gray.50', _light: 'gray.900' },
        _hover: { bg: 'colorPalette.700' },
      },
      ghost: {
        bg: 'transparent',
        color: 'inherit',
        _hover: {
          bg: 'colorPalette.700',
        },
      },
      solid: {
        bg: 'colorPalette.800',
        color: 'inherit',
        _hover: {
          bg: 'colorPalette.700',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
    size: 'md',
    rounded: 'md',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof button>;
