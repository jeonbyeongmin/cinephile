import { Link, type LinkProps } from '@/components/link';
import { cva, cx, type RecipeVariantProps } from '@/styled-system/css';
import { cp, type HTMLCpProps } from '@/styled-system/jsx';
import { ButtonContent, type ButtonContentProps } from './button-content';

export const buttonStyles = cva({
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
      xs: { p: 1, gap: 2, maxH: 6 },
      sm: { p: 2, gap: 2, maxH: 8 },
      md: { p: 3, gap: 2, maxH: 10 },
      lg: { p: 4, gap: 2, maxH: 12 },
      xl: { p: 5, gap: 2, maxH: 14 },
    },

    status: {
      idle: {},
      active: {},
      inactive: {},
    },

    variant: {
      solid: {
        bg: { base: 'gray.800', _hover: 'gray.700' },
        color: { base: 'gray.50', _light: 'gray.50' },
      },

      outline: {
        borderWidth: 1,
        bg: { base: 'transparent', _hover: 'gray.700' },
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

  compoundVariants: [
    {
      variant: 'solid',
      status: 'active',
      css: {
        bg: { base: 'gray.50', _hover: 'gray.200' },
        color: { base: 'gray.800', _light: 'gray.800' },
      },
    },
    {
      variant: 'solid',
      status: 'inactive',
      css: {
        bg: { base: 'gray.800', _hover: 'gray.700' },
        color: { base: 'gray.50', _light: 'gray.50' },
        borderWidth: 1,
        borderColor: { base: 'gray.700' },
      },
    },
  ],

  defaultVariants: {
    variant: 'solid',
    status: 'idle',
    size: 'md',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyles>;

export type ButtonProps = ButtonVariants & ButtonContentProps & HTMLCpProps<'button'> & LinkProps;

export const Button = (props: ButtonProps) => {
  const { variant, size, status, href, leftElement, rightElement, children, className, ...rest } = props;

  if (href) {
    return (
      <Link href={href} className={cx(buttonStyles({ variant, size, status }))} {...rest}>
        <ButtonContent leftElement={leftElement} rightElement={rightElement}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <cp.button className={cx(buttonStyles({ variant, size, status }), className)} {...rest}>
      <ButtonContent leftElement={leftElement} rightElement={rightElement}>
        {children}
      </ButtonContent>
    </cp.button>
  );
};
