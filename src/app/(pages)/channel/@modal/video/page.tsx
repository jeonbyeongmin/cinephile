'use client';

import { useRouter } from 'next/navigation';

import { Modal } from '@/components/modal';
import { css, cx } from '@/styled-system/css';
import { aspectRatio } from '@/styled-system/patterns';

interface Props {
  searchParams: {
    key: string;
  };
}

export default function Video({ searchParams: { key } }: Props) {
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
            w: { base: 'full', md: '4xl' },
          })
        )}
      >
        <iframe src={`https://youtube.com/embed/${key}`} />
      </Modal.Content>
    </Modal>
  );
}
