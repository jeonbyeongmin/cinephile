import { cva, type RecipeVariantProps } from '@/styled-system/css';

const spinnerRecipe = cva({
  base: {
    display: 'inline-block',
    borderTopColor: 'gray.700',
    borderLeftColor: 'gray.700',
    borderRightColor: 'gray.700',
    borderBottomColor: 'yellow.300',
    borderRadius: 'full',
    boxSizing: 'border-box',
    animation: 'spin 1s linear infinite',
  },
  variants: {
    size: {
      xs: { w: 5, h: 5, borderWidth: '4px' },
      sm: { w: 6, h: 6, borderWidth: '4px' },
      md: { w: 8, h: 8, borderWidth: '4px' },
      lg: { w: 10, h: 10, borderWidth: '4px' },
      xl: { w: 12, h: 12, borderWidth: '4px' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export type SpinnerVariants = RecipeVariantProps<typeof spinnerRecipe>;

type SpinnerProps = {} & SpinnerVariants;

export function Spinner({ size }: SpinnerProps) {
  return <span className={spinnerRecipe({ size })} />;
}
