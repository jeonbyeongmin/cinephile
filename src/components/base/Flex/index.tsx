import type { ElementType, ReactNode } from 'react';

import classNames from 'classnames';
import { forwardRef } from 'react';

const commonStyles = 'flex';

const directionStyles = {
  row: 'flex-row',
  col: 'flex-col',
};

const alignStyles = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyStyles = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const gapStyles = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
  9: 'gap-9',
  10: 'gap-10',
  11: 'gap-11',
  12: 'gap-12',
  14: 'gap-14',
  16: 'gap-16',
  20: 'gap-20',
  24: 'gap-24',
  28: 'gap-28',
  32: 'gap-32',
  36: 'gap-36',
  40: 'gap-40',
  44: 'gap-44',
  48: 'gap-48',
  52: 'gap-52',
  56: 'gap-56',
  60: 'gap-60',
  64: 'gap-64',
  72: 'gap-72',
  80: 'gap-80',
  96: 'gap-96',
};

type Direction = keyof typeof directionStyles;
type Align = keyof typeof alignStyles;
type Justify = keyof typeof justifyStyles;
type Gap = keyof typeof gapStyles;

interface FlexProps {
  as?: ElementType;
  direction?: Direction;
  align?: Align;
  justify?: Justify;
  children?: ReactNode;
  gap?: Gap;
  className?: string;
}

export const Flex = forwardRef<ElementType, FlexProps>((props, ref) => {
  const {
    as: Component = 'div',
    gap,
    children,
    direction = 'row',
    align = 'start',
    justify = 'start',
    className,
    ...rest
  } = props;

  return (
    <Component
      ref={ref}
      className={classNames(
        commonStyles,
        directionStyles[direction],
        alignStyles[align],
        justifyStyles[justify],
        gap ? gapStyles[gap] : null,
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
});

Flex.displayName = 'Flex';
