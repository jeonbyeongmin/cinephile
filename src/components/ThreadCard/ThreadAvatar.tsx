import Image from 'next/image';
import React from 'react';

interface Props {
  src: string;
}

export function ThreadAvatar({ src }: Props) {
  return (
    <div className="rounded-lg overflow-hidden">
      <Image src={src} width={40} height={100} alt="thread movie poster" />
    </div>
  );
}
