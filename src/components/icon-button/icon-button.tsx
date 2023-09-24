import { RecipeVariantProps, cva, cx } from '@/styled-system/css';
import { cp, type HTMLCpProps } from '@/styled-system/jsx';
import { cloneElement, isValidElement } from 'react';

const iconButtonRecipe = cva({
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
      xs: { p: 1 },
      sm: { p: 2 },
      md: { p: 3 },
      lg: { p: 4 },
      xl: { p: 5 },
    },

    variant: {
      solid: {
        bg: { base: 'gray.800', _hover: 'gray.700' },
        color: { base: 'gray.50', _light: 'gray.50' },
      },

      outline: {
        borderWidth: 1,
        bg: { base: 'gray.800', _hover: 'gray.700' },
        borderColor: { base: 'gray.600', _light: 'gray.300' },
        color: { base: 'gray.50', _light: 'gray.900' },
      },

      ghost: {
        color: 'inherit',
        bg: { base: 'transparent', _hover: 'gray.800' },
      },

      link: {
        bg: 'transparent',
        color: { base: 'gray.600', _hover: 'gray.700' },
      },
    },
  },

  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});

export type IconButtonVariants = RecipeVariantProps<typeof iconButtonRecipe>;

export type IconButtonProps = HTMLCpProps<'button'> &
  IconButtonVariants & { icon?: React.ReactElement; 'aria-label': string };

export const IconButton = (props: IconButtonProps) => {
  const { icon, variant, size, children, className, ...rest } = props;

  const element = icon || children;
  const _children = isValidElement(element)
    ? cloneElement(element, {
        // @ts-expect-error typings are wrong
        'aria-hidden': true,
        focusable: false,
      })
    : null;

  return (
    <cp.button className={cx(iconButtonRecipe({ variant, size }), className)} {...rest}>
      {_children}
    </cp.button>
  );
};
