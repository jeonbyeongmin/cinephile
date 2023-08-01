import { Box, type BoxProps } from '@/components/base/Box';
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

interface TextProps extends BoxProps {
  weight?: keyof typeof weightMap;
  size?: keyof typeof sizeMap;
}

export const Text = forwardRef<ElementType, TextProps>((props, ref) => {
  const { weight = 'regular', size = 'md', className, children, ...rest } = props;

  return (
    <Box ref={ref} className={classNames(weightMap[weight], sizeMap[size], className)} {...rest}>
      {children}
    </Box>
  );
});

Text.displayName = 'Text';
