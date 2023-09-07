import { ButtonVariants, buttonStyles } from '@/components/button';
import { cx } from '@/styled-system/css';
import { cp, type HTMLCpProps } from '@/styled-system/jsx';
import { cloneElement, isValidElement } from 'react';

export type IconButtonProps = HTMLCpProps<'button'> &
  ButtonVariants & { icon?: React.ReactElement; 'aria-label': string };

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
    <cp.button className={cx(buttonStyles({ variant, size }), className)} {...rest}>
      {_children}
    </cp.button>
  );
};
