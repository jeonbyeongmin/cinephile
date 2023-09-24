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
      xs: { py: 1, px: 2, gap: 2 },
      sm: { py: 2, px: 3, gap: 2 },
      md: { py: 3, px: 4, gap: 2 },
      lg: { py: 4, px: 6, gap: 2 },
      xl: { py: 5, px: 8, gap: 2 },
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

export type ButtonVariants = RecipeVariantProps<typeof buttonStyles>;

export type ButtonProps = ButtonVariants & ButtonContentProps & HTMLCpProps<'button'> & LinkProps;

export const Button = (props: ButtonProps) => {
  const { variant, size, href, leftElement, rightElement, children, className, ...rest } = props;

  if (href) {
    return (
      <Link href={href} className={cx(buttonStyles({ variant, size }))} {...rest}>
        <ButtonContent leftElement={leftElement} rightElement={rightElement}>
          {children}
        </ButtonContent>
      </Link>
    );
  }

  return (
    <cp.button className={cx(buttonStyles({ variant, size }), className)} {...rest}>
      <ButtonContent leftElement={leftElement} rightElement={rightElement}>
        {children}
      </ButtonContent>
    </cp.button>
  );
};
