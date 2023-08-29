import { button, type ButtonVariants } from '@/components/base/button/button.recipe';
import { ColorPalette } from '@/styled-system/tokens';
import { forwardRef } from 'react';

type ButtonProps = ButtonVariants & {
  colorPalette?: ColorPalette;
  className?: string;
  children: React.ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { variant, colorPalette, rounded, size, children, className: cn } = props;

  const className = button({ variant, rounded, size });

  return (
    <button ref={ref} className={className}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
