import { type ButtonVariants } from '@/components/base/button/button.recipe';
import { type ColorPalette } from '@/styled-system/tokens';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  colorPalette?: ColorPalette;
  variants?: ButtonVariants;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variants, children, title, className, ...rest } = props;

  return (
    <button ref={ref} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
