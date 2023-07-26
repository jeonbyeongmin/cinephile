import { Box, type BoxProps } from '@/components/base/Box';
import classNames from 'classnames';
import { forwardRef, type ElementType } from 'react';

export interface AspectRatioBoxProps extends BoxProps {
  children: React.ReactNode;
  ratio?: number;
  width?: number;
}

export const AspectRatioBox = forwardRef<ElementType, AspectRatioBoxProps>((props, ref) => {
  const { ratio = 1, children, width = 100, className, ...rest } = props;
  const height = width * ratio;

  return (
    <Box
      ref={ref}
      style={{
        width: width,
        height: height,
      }}
      className={classNames('relative', className)}
      {...rest}
    >
      {children}
    </Box>
  );
});

AspectRatioBox.displayName = 'AspectRatioBox';
