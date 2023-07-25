import { Flex } from '@/components/base';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  src: string;
  navigateTo: string;
}

export function ThreadAvatar({ src, navigateTo }: Props) {
  return (
    <Flex direction="col" align="center" className="rounded-sm overflow-hidden">
      <Link href={navigateTo}>
        <Image src={src} width={40} height={100} alt="thread movie poster" />
      </Link>
    </Flex>
  );
}
