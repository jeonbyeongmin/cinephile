'use client';

import { Dialog, DialogContent, Logo } from '@/components';
import { close, selectModal } from '@/redux/features/modal-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { css, cx } from '@/styled-system/css';
import { center, flex } from '@/styled-system/patterns';

import { Providers } from './providers';

export function AuthModal() {
  const dispatch = useAppDispatch();

  const { isOpen, type } = useAppSelector(selectModal);
  const open = type === 'login' && isOpen;

  return (
    <Dialog open={open} onOpenChange={() => dispatch(close())}>
      <DialogContent className={center({ maxW: 'lg', p: 10 })}>
        <Logo width={300} height={80} />
        <p className={css({ mt: 2, mb: 5 })}>로그인을 해서 토론을 시작하세요!</p>
        <Providers />
        <p
          className={cx(
            flex({ direction: 'column', align: 'center' }),
            css({ fontSize: 'xs', color: 'gray.400', mt: 5 })
          )}
        >
          <span>로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,</span>
          <span>서비스 이용을 위해 이메일과 이름, 프로필 이미지를 수집합니다.</span>
        </p>
      </DialogContent>
    </Dialog>
  );
}
