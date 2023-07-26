import { forwardRef, type ElementType } from 'react';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export const Box = forwardRef<ElementType, BoxProps>((props, ref) => {
  const { as: Component = 'div', children, ...rest } = props;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  );
});

Box.displayName = 'Box';
