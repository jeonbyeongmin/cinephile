import { AspectRatioBox, type AspectRatioBoxProps } from '@/components/base/AspectRatioBox';
import classNames from 'classnames';
import Image from 'next/image';
import { forwardRef, type ElementType } from 'react';

const radiusStyles = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

type Radius = keyof typeof radiusStyles;

export interface AspectRatioImageProps extends Omit<AspectRatioBoxProps, 'children'> {
  src: string;
  radius?: Radius;
}

export const AspectRatioImage = forwardRef<ElementType, AspectRatioImageProps>((props, ref) => {
  const { src, ratio, radius, width, className, ...rest } = props;

  return (
    <AspectRatioBox
      ref={ref}
      className={classNames(radiusStyles[radius ?? 'md'], 'overflow-hidden')}
      ratio={ratio}
      width={width}
      {...rest}
    >
      <Image src={src} alt="thread movie poster" className="object-cover" sizes={`${width}px`} fill />
    </AspectRatioBox>
  );
});

AspectRatioImage.displayName = 'AspectRatioImage';
