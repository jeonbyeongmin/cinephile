import { cva, type RecipeVariantProps } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

export const buttonRecipe = cva({
  base: {
    display: 'flex',
    transition: 'all 100ms',
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

    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },

    variant: {
      solid: {
        bg: { base: 'colorPalette.800', _hover: 'colorPalette.700' },
        color: { base: 'gray.50', _light: 'gray.50' },
      },

      outline: {
        border: '1px solid',
        bg: { base: 'transparent', _hover: 'colorPalette.700' },
        borderColor: { base: 'colorPalette.600', _light: 'colorPalette.300' },
        color: { base: 'gray.50', _light: 'gray.900' },
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

  defaultVariants: {
    variant: 'solid',
    rounded: 'md',
    colorPalette: 'gray',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>;

export const Button = styled('button', buttonRecipe);
