import { Flex } from '@/components/base';
import Image from 'next/image';

interface Props {
  src: string;
}

export function ThreadAvatar({ src }: Props) {
  return (
    <Flex direction="col" align="center" className="rounded-sm overflow-hidden">
      <Image src={src} width={40} height={100} alt="thread movie poster" />
      <div className="flex-1 bg-gray-200 h-full w-full" />
    </Flex>
  );
}
