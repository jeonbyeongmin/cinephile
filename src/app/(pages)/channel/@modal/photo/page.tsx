'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Modal } from '@/components/modal';
import { css, cx } from '@/styled-system/css';

interface Props {
  searchParams: {
    src: string;
    w: string;
    h: string;
  };
}

export default function Photo({ searchParams: { src, w, h } }: Props) {
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
          css({
            margin: 'auto',
            w: { base: 'full', md: '4xl' },
          })
        )}
      >
        <Image
          src={src}
          alt="대표 이미지"
          width={Number(w)}
          height={Number(h)}
          className={css({ bg: 'gray.800' })}
          sizes="(min-width: 768px) 50vw, 100vw"
          priority
        />
      </Modal.Content>
    </Modal>
  );
}
