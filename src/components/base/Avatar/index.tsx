import classNames from 'classnames';

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof sizeMap;
  src?: string;
}

export function Avatar({ size = 'md', src, className, ...rest }: AvatarProps) {
  return (
    <div className={classNames('relative rounded-full overflow-hidden', sizeMap[size], className)} {...rest}>
      {/* <Image
        src={src || 'https://avatars.githubusercontent.com/u/48426991?v=4'}
        alt="user avatar"
        className="object-cover absolute"
        sizes="100%"
        fill
      /> */}
    </div>
  );
}
