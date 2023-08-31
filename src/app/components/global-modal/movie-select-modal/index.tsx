'use client';

import SearchContent from '@/app/components/global-modal/movie-select-modal/search-content';
import { Dialog, DialogContent } from '@/components/base';
import { selectModal, toggle } from '@/redux/features/modalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useMemo } from 'react';

export default function MovieSelectModal() {
  const { type, isOpen } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const show = useMemo(() => {
    return type === 'movieSelect' && isOpen;
  }, [isOpen, type]);

  return (
    <Dialog open={show} onOpenChange={() => dispatch(toggle({ type: 'movieSelect' }))}>
      <DialogContent
        className={css({
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
        <Flex direction="column">
          <p className={css({ fontSize: 'lg', fontWeight: 'bold' })}>영화 선택</p>
          <p className={css({ fontSize: 'sm', color: 'gray.500' })}>글 작성을 위해 영화를 선택해주세요</p>
        </Flex>
        <SearchContent />
      </DialogContent>
    </Dialog>
  );
}
