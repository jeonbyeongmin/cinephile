import { AspectRatioImage, AspectRatioImageProps } from '@/components/base/AspectRatioImage';
import Link from 'next/link';

interface Props extends AspectRatioImageProps {
  navigateTo?: string;
}

export function ThreadAvatar({ navigateTo, ...rest }: Props) {
  return (
    <>
      {navigateTo ? (
        <Link href={navigateTo}>
          <AspectRatioImage {...rest} />
        </Link>
      ) : (
        <AspectRatioImage {...rest} />
      )}
    </>
  );
}
