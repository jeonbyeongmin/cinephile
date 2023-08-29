import classNames from 'classnames';
import { forwardRef, type ElementType } from 'react';

const weightMap = {
  bold: 'font-bold',
  medium: 'font-medium',
  regular: 'font-regular',
  light: 'font-light',
  thin: 'font-thin',
};

const sizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
};

const lineClampMap = {
  1: 'line-clamp-1',
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
  5: 'line-clamp-5',
  6: 'line-clamp-6',
  none: 'line-clamp-none',
};

interface TextProps extends BoxProps {
  weight?: keyof typeof weightMap;
  size?: keyof typeof sizeMap;
  lineClamp?: keyof typeof lineClampMap;
}

export const Text = forwardRef<ElementType, TextProps>((props, ref) => {
  const { weight = 'regular', size = 'md', className, lineClamp = 'none', children, ...rest } = props;

  return (
    <Box
      ref={ref}
      className={classNames(weightMap[weight], sizeMap[size], lineClampMap[lineClamp], className)}
      {...rest}
    >
      {children}
    </Box>
  );
});

Text.displayName = 'Text';
