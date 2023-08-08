import type { ComponentPropsWithoutRef } from 'react';

import classNames from 'classnames';
import { forwardRef } from 'react';

const commonStyles = 'inline-flex items-center justify-center';

const variantStyles = {
  // outline
  'outline-gray': 'bg-inherit border border-gray-600 enabled:hover:bg-gray-700',

  // ghost
  'ghost-gray': 'bg-transparent enabled:hover:bg-gray-700 disabled:opacity-40',

  // solid
  'solid-gray': 'bg-gray-800 enabled:hover:bg-gray-700',
};

const radiusStyles = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
};

type Variant = 'outline' | 'ghost' | 'solid';
type ColorScheme = 'gray';
type Radius = keyof typeof radiusStyles;

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant;
  colorScheme?: ColorScheme;
  radius?: Radius;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant = 'outline', radius = 'md', colorScheme = 'gray', children, title, className, ...rest } = props;

  return (
    <button
      ref={ref}
      className={classNames(variantStyles[`${variant}-${colorScheme}`], radiusStyles[radius], commonStyles, className)}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
