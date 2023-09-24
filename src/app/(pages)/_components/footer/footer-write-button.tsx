'use client';

import { useUser } from '@/app/_contexts';
import { Icon } from '@/components/icon';
import { IconButton } from '@/components/icon-button';
import { open } from '@/redux/features/modal-slice';
import { useAppDispatch } from '@/redux/hooks';
import { css, cx } from '@/styled-system/css';
import { circle } from '@/styled-system/patterns';
import { useSelectedLayoutSegment } from 'next/navigation';

export function FooterWriteButton() {
  const user = useUser();
  const segment = useSelectedLayoutSegment() as string;
  const isWrite = segment.includes('write');
  const dispatch = useAppDispatch();

  return (
    <IconButton
      aria-label="글쓰기"
      onClick={() => dispatch(open({ type: !!user ? 'movieSelect' : 'login' }))}
      className={cx(
        circle({ size: '12' }),
        css({
          position: 'absolute',
          top: '-16',
          right: 4,
          bg: 'yellow.400!',
          color: 'gray.950!',
          display: isWrite ? 'none!' : 'flex!',
        })
      )}
      icon={<Icon name="edit" size={20} />}
    />
  );
}
