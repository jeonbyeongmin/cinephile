import { Box, type BoxProps } from '@/components/base/Box';
import classNames from 'classnames';
import { forwardRef, type ElementType } from 'react';

interface RatioBoxProps extends BoxProps {
  children: React.ReactNode;
  ratio: number;
  width?: number;
}

export const RatioBox = forwardRef<ElementType, RatioBoxProps>((props, ref) => {
  const { ratio, children, width = 100, className, ...rest } = props;
  const height = width * props.ratio;

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

RatioBox.displayName = 'RatioBox';
