import { cva, type RecipeVariantProps } from '@/styled-system/css';

export const spinner = cva({
  base: {
    display: 'inline-block',
    position: 'relative',
    animation: 'spin 3s linear infinite',

    '& > div': {
      boxSizing: 'border-box',
      display: 'block',
      position: 'absolute',
      borderColor: 'token(colors.colorPalette.300) transparent transparent transparent',
      rounded: 'full',
      animation: 'spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
    },

    '& > div:nth-child(1)': {
      animationDelay: '-0.45s',
    },

    '& > div:nth-child(2)': {
      animationDelay: '-0.3s',
    },

    '& > div:nth-child(3)': {
      animationDelay: '-0.15s',
    },
  },

  variants: {
    colorPalette: {
      gray: { colorPalette: 'gray' },
      yellow: { colorPalette: 'yellow' },
    },

    size: {
      xs: {
        width: 5,
        height: 5,
        '& > div': {
          width: 5,
          height: 5,
          borderWidth: '3px',
        },
      },
      sm: {
        width: 6,
        height: 6,
        '& > div': {
          width: 6,
          height: 6,
          borderWidth: '4px',
        },
      },
      md: {
        width: 8,
        height: 8,
        '& > div': {
          width: 8,
          height: 8,
          borderWidth: '5px',
        },
      },
      lg: {
        width: 10,
        height: 10,
        '& > div': {
          width: 10,
          height: 10,
          borderWidth: '6px',
        },
      },
      xl: {
        width: 12,
        height: 12,
        '& > div': {
          width: 12,
          height: 12,
          borderWidth: '7px',
        },
      },
    },
  },

  defaultVariants: {
    colorPalette: 'yellow',
    size: 'md',
  },
});

export type SpinnerVariants = RecipeVariantProps<typeof spinner>;

type SpinnerProps = {} & SpinnerVariants;

export function Spinner({ size, colorPalette }: SpinnerProps) {
  return (
    <div className={spinner({ size, colorPalette })}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
