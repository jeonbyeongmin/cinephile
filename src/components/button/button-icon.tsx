import { cp, type HTMLCpProps } from '@/styled-system/jsx';
import { cloneElement, isValidElement } from 'react';

export const ButtonIcon = (props: HTMLCpProps<'span'>) => {
  const { children, ...rest } = props;

  const _children = isValidElement(children)
    ? cloneElement(children, {
        // @ts-expect-error typings are wrong
        'aria-hidden': true,
        focusable: false,
      })
    : children;

  return <cp.span {...rest}>{_children}</cp.span>;
};
