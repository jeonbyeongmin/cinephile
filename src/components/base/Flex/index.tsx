import type { ElementType } from 'react';

import { Box, type BoxProps } from '@/components/base/Box';
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

const selfStyles = {
  auto: 'self-auto',
  start: 'self-start',
  center: 'self-center',
  end: 'self-end',
  stretch: 'self-stretch',
  baseline: 'self-baseline',
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
type Self = keyof typeof selfStyles;

interface FlexProps extends BoxProps {
  direction?: Direction;
  align?: Align;
  justify?: Justify;
  gap?: Gap;
  self?: Self;
}

export const Flex = forwardRef<ElementType, FlexProps>((props, ref) => {
  const { gap, children, direction, align, justify, self, className, ...rest } = props;

  return (
    <Box
      ref={ref}
      className={classNames(
        commonStyles,
        !!direction && directionStyles[direction],
        !!align && alignStyles[align],
        !!justify && justifyStyles[justify],
        !!self && selfStyles[self],
        !!gap && gapStyles[gap],
        className
      )}
      {...rest}
    >
      {children}
    </Box>
  );
});

Flex.displayName = 'Flex';
