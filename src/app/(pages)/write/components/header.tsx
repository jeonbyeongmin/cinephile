'use client';

import { Button, Icon, IconButton } from '@/components';
import { open } from '@/redux/features/modalSlice';
import { useAppDispatch } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { Circle, Flex } from '@/styled-system/jsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  poster: string;
}

export function WriteHeader({ title, poster }: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <Flex
      align="center"
      justify="space-between"
      gap={2}
      className={css({
        position: 'sticky',
        top: 0,
        minH: 16,
        maxH: 16,
        borderBottomWidth: '1px',
        borderBottomColor: 'gray.800',
        backgroundColor: 'grayGlass.950',
        zIndex: 1,
        px: 2,

        '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)': {
          backdropFilter: 'blur(8px)',
        },
      })}
    >
      <Flex align="center" gap={1}>
        <IconButton
          icon={<Icon name="arrowLeft" fill="none" size={20} />}
          aria-label="back button"
          variant="ghost"
          size="sm"
          rounded="full"
          onClick={router.back}
        />

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
              sizes="50px"
              fill
            />
          </Circle>
          <p className={css({ fontSize: 'md', lineClamp: 1, fontWeight: 'bold' })}>{title}</p>
        </Button>
      </Flex>
    </Flex>
  );
}
