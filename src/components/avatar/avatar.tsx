import Image, { type ImageProps } from 'next/image';
import { avatarRecipe, type AvatarVariants } from './recipe';

type AvatarBaseProps = Omit<ImageProps, 'src'> & {
  src?: Pick<ImageProps, 'src'>['src'];
};

type AvatarProps = AvatarVariants & AvatarBaseProps;

export function Avatar({ size, src = '/avatar.png' }: AvatarProps) {
  return (
    <div className={avatarRecipe({ size })}>
      <Image src={src} alt="avatar" sizes="30px" fill />
    </div>
  );
}
