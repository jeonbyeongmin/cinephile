import { button, type ButtonVariants } from '@/components/base/button/button.recipe';
import { css, cx } from '@/styled-system/css';
import { type SystemStyleObject } from '@/styled-system/types/system-types';
import { forwardRef } from 'react';

type ButtonProps = ButtonVariants & {
  className?: string;
  css?: SystemStyleObject;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { css: cssProps = {}, variant, colorPalette, rounded, children, className: cn, ...rest } = props;
  const className = cx(button({ colorPalette, variant, rounded }), css(cssProps), cn);

  return (
    <button ref={ref} className={className} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
