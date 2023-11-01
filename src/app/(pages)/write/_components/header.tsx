'use client';

import Image from 'next/image';

import { Button, Header, Icon } from '@/components/primitive';
import { open } from '@/redux/features/modal-slice';
import { useAppDispatch } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { Circle } from '@/styled-system/jsx';
import { token } from '@/styled-system/tokens';

interface Props {
  title: string;
  poster: string;
}

export function WriteHeader({ title, poster }: Props) {
  const dispatch = useAppDispatch();

  return (
    <Header className={css({ gap: 1 })}>
      <Header.Back />
      <Button
        css={{ padding: '1!', paddingRight: '3!', rounded: 'full' }}
        variant="outline"
        onClick={() => dispatch(open({ type: 'movieSelect' }))}
        rightElement={<Icon name="change" fill="none" size={14} color={token('colors.gray.400')} />}
      >
        <Circle position="relative" overflow="hidden" size={7} bg="gray.300">
          <Image
            src={poster}
            alt="avatar"
            className={css({ objectFit: 'cover', position: 'absolute' })}
            sizes="30px"
            fill
          />
        </Circle>
        <p className={css({ fontSize: 'md', lineClamp: 1, fontWeight: 'bold' })}>{title}</p>
      </Button>
    </Header>
  );
}
