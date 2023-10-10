import { cx } from '@/styled-system/css';
import Image, { type ImageProps } from 'next/image';
import { avatarRecipe, type AvatarVariants } from './recipe';

type AvatarBaseProps = Omit<ImageProps, 'src'> & {
  src: Pick<ImageProps, 'src'>['src'] | null | undefined;
};

type AvatarProps = AvatarVariants & AvatarBaseProps;

const imageSizes = {
  sm: '24px',
  md: '32px',
  lg: '48px',
};

export function Avatar(props: AvatarProps) {
  const { size, variant, src, alt, className } = props;

  return (
    <div className={cx(avatarRecipe({ size, variant }), className)}>
      <Image src={src || '/avatar.png'} alt={alt} sizes={imageSizes[size ?? 'md']} fill />
    </div>
  );
}
