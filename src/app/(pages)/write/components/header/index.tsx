'use client';

import { Button, Icon } from '@/components';
import { open } from '@/redux/features/modalSlice';
import { useAppDispatch } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { Circle, Flex } from '@/styled-system/jsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  poster: string;
  handlePublishButtonClick: () => void;
}

export function WriteHeader({ title, poster, handlePublishButtonClick }: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <Flex
      align="center"
      justify="space-between"
      className={css({ h: 16, borderBottomWidth: '1px', borderBottomColor: 'gray.600' })}
      gap={2}
      pr={2}
      pl={1}
    >
      <Flex align="center">
        <Button variant="ghost" rounded="full" onClick={router.back} p={2} mr={1}>
          <Icon name="arrowLeft" fill="none" size={20} />
        </Button>
        <Button
          py={1}
          pl={1}
          pr={3}
          rounded="full"
          css={{ display: 'flex', alignItems: 'center', borderWidth: '1px', borderColor: 'gray.700' }}
          onClick={() => dispatch(open({ type: 'movieSelect' }))}
        >
          <Circle position="relative" overflow="hidden" size={8} bg="gray.300" mr={2}>
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
          <p className={css({ fontSize: 'md', lineClamp: 1, fontWeight: 'bold', mr: 2 })}>{title}</p>
          <Icon name="change" fill="none" size={14} className={css({ flexShrink: '0', color: 'gray.500' })} />
        </Button>
      </Flex>
      <Button variant="solid" rounded="md" onClick={handlePublishButtonClick} p={2} px={3} minW="20" fontWeight="bold">
        발행하기
      </Button>
    </Flex>
  );
}
