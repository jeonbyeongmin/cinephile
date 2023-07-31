import classNames from 'classnames';
import Image from 'next/image';

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-8 h-8 md:w-10 md:h-10',
  lg: 'w-12 h-12',
};

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof sizeMap;
}

export function Avatar({ size = 'md', ...rest }: AvatarProps) {
  return (
    <div className={classNames('relative rounded-full overflow-hidden', sizeMap[size])} {...rest}>
      <Image
        src="https://yts.mx/assets/images/movies/the_shawshank_redemption_1994/medium-cover.jpg"
        alt="user avatar"
        className="object-cover absolute"
        sizes="100%"
        fill
      />
    </div>
  );
}
