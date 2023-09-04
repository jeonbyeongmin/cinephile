'use client';

import { Button, Dialog, DialogContent, Icon, Logo } from '@/components';
import { selectModal, toggle } from '@/redux/features/modalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { center } from '@/styled-system/patterns';

import { useMemo } from 'react';

export default function LoginModal() {
  const { isOpen, type } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const show = useMemo(() => {
    return type === 'login' && isOpen;
  }, [isOpen, type]);

  return (
    <Dialog open={show} onOpenChange={() => dispatch(toggle({ type: 'login' }))}>
      <DialogContent
        className={center({
          w: 'full',
          maxW: '2xl',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          rounded: '2xl',
          bg: 'gray.950',
          p: 6,
          animation: 'contentShow 150ms forwards',
        })}
      >
        <Logo width={300} height={80} />
        <p className={css({ mt: 2, mb: 5 })}>로그인을 해서 토론을 시작하세요!</p>
        <Flex gap={2} w="full" px={10}>
          <Button variant="solid" rounded="md" p={4} flex={1}>
            <Flex align="center" justify="center" gap={2}>
              <Icon name="google" size={18} />
              <p>구글로 로그인</p>
            </Flex>
          </Button>

          <Button variant="solid" rounded="md" p={3} flex={1}>
            <Flex align="center" justify="center" gap={2}>
              <Icon name="kakao" size={18} />
              <p>카카오로 로그인</p>
            </Flex>
          </Button>
        </Flex>
        <p className={css({ fontSize: 'xs', color: 'gray.400', mt: 5 })}>
          로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,
        </p>
        <p className={css({ fontSize: 'xs', color: 'gray.400' })}>
          서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.
        </p>
      </DialogContent>
    </Dialog>
  );
}
