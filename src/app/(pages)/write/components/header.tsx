'use client';

import { BackButton, Button, Header, Icon } from '@/components';
import { open } from '@/redux/features/modalSlice';
import { useAppDispatch } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { Circle } from '@/styled-system/jsx';
import Image from 'next/image';

interface Props {
  title: string;
  poster: string;
}

export function WriteHeader({ title, poster }: Props) {
  const dispatch = useAppDispatch();

  return (
    <Header>
      <BackButton />
      <Button
        p="1!"
        pr="3!"
        rounded="full"
        css={{ display: 'flex', alignItems: 'center', borderWidth: '1px', borderColor: 'gray.700' }}
        onClick={() => dispatch(open({ type: 'movieSelect' }))}
        rightElement={
          <Icon name="change" fill="none" size={14} className={css({ flexShrink: '0', color: 'gray.500' })} />
        }
      >
        <Circle position="relative" overflow="hidden" size={8} bg="gray.300">
          <Image
            src={poster}
            alt="avatar"
            className={css({
              objectFit: 'cover',
              position: 'absolute',
            })}
            sizes="30px"
            fill
          />
        </Circle>
        <p className={css({ fontSize: 'md', lineClamp: 1, fontWeight: 'bold' })}>{title}</p>
      </Button>
    </Header>
  );
}
