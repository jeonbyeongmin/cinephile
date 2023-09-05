import { cva, cx, type RecipeVariantProps } from '@/styled-system/css';
import { cp, HTMLCpProps } from '@/styled-system/jsx';
import Link, { LinkProps } from 'next/link';
import { ButtonContent, ButtonContentProps } from './button-content';

export const buttonStyles = cva({
  base: {
    cursor: 'pointer',
    lineHeight: '1.2',
    fontWeight: 'semibold',
    transition: 'common',
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
      xs: { h: 7, minW: 6, gap: 2 },
      sm: { h: 8, minW: 8, gap: 2 },
      md: { h: 10, minW: 10, gap: 2 },
      lg: { h: 12, minW: 12, gap: 2 },
      xl: { h: 14, minW: 14, gap: 2 },
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

  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyles>;

export type ButtonProps = ButtonVariants &
  ButtonContentProps & { href?: LinkProps['href'] } & HTMLCpProps<'button'> &
  HTMLCpProps<'a'>;

const CpLink = cp(Link);

export const Button = (props: ButtonProps) => {
  const { variant, size, href, leftIcon, rightIcon, children, className, ...rest } = props;

  if (href) {
    return (
      <CpLink href={href} className={cx(buttonStyles({ variant, size }))} {...rest}>
        <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
          {children}
        </ButtonContent>
      </CpLink>
    );
  }

  return (
    <cp.button className={cx(buttonStyles({ variant, size }), className)} {...rest}>
      <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </ButtonContent>
    </cp.button>
  );
};
