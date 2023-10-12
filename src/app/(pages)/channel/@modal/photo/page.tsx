'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Modal } from '@/components/modal';
import { css, cx } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';

interface Props {
  searchParams: {
    src: string;
  };
}

export default function Photo({ searchParams: { src } }: Props) {
  const router = useRouter();

  return (
    <Modal onOpenChange={() => router.back()} open>
      <Modal.Overlay
        className={css({
          bg: 'rgba(155,155,155,.1)',
          '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
            backdropFilter: 'blur(8px)',
          },
        })}
      />
      <Modal.Content
        className={cx(
          aspectRatio({ ratio: 16 / 9 }),
          css({
            margin: 'auto',
            position: 'relative',
            w: { base: 'full', md: '4xl' },
          })
        )}
      >
        <Image
          src={src}
          alt="대표 이미지"
          className={css({ bg: 'gray.800', position: 'absolute', objectFit: 'contain' })}
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
          fill
        />
      </Modal.Content>
    </Modal>
  );
}
