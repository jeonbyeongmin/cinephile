import { cva, type RecipeVariantProps } from '@/styled-system/css';

export const button = cva({
  base: {
    display: 'flex',
    transition: 'all 0.1s',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 'none',
  },

  variants: {
    colorPalette: {
      gray: { colorPalette: 'gray' },
      red: { colorPalette: 'red' },
      yellow: { colorPalette: 'yellow' },
      blue: { colorPalette: 'blue' },
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
      solid: {
        bg: 'colorPalette.800',
        color: { base: 'gray.50', _light: 'gray.50' },
        _hover: { bg: 'colorPalette.700' },
      },
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
        _hover: { bg: 'colorPalette.700' },
      },
      link: {
        bg: 'transparent',
        color: 'colorPalette.600',
        _hover: { color: 'colorPalette.700' },
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
    rounded: 'md',
    colorPalette: 'gray',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof button>;
