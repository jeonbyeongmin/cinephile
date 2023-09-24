'use client';

import { Dialog, DialogContent, Logo } from '@/components';
import { close, selectModal } from '@/redux/features/modal-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { divider, flex } from '@/styled-system/patterns';

import { token } from '@/styled-system/tokens';
import { Providers } from './providers';

export function AuthModal() {
  const dispatch = useAppDispatch();

  const { isOpen, type } = useAppSelector(selectModal);
  const open = type === 'login' && isOpen;

  return (
    <Dialog open={open} onOpenChange={() => dispatch(close())}>
      <DialogContent className={css({ maxW: 'md', px: 10, pt: 20, h: { base: 'full', md: 'auto' }, pb: 10 })}>
        <div className={flex({ direction: 'column', align: 'center' })}>
          <Logo size={50} color={token('colors.white')} />
          <p className={css({ mt: 5, fontSize: { base: 'sm', md: 'md' } })}>로그인을 해서 이야기를 시작하세요!</p>
        </div>
        <div className={divider({ color: 'gray.500', my: 6 })} />
        <Providers />
      </DialogContent>
    </Dialog>
  );
}
