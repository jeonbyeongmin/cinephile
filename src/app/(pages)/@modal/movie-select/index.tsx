'use client';

import SearchContent from '@/app/(pages)/@modal/movie-select/search-content';
import { Dialog, DialogContent } from '@/components';
import { close, selectModal } from '@/redux/features/modalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

export default function MovieSelectModal() {
  const dispatch = useAppDispatch();
  const { isOpen, type } = useAppSelector(selectModal);
  const open = type === 'movieSelect' && isOpen;

  return (
    <Dialog open={open} onOpenChange={() => dispatch(close())}>
      <DialogContent
        className={css({
          w: 'full',
          maxW: '2xl',
          display: 'flex',
          flexDirection: 'column',
          p: 6,
          h: 'full',
        })}
      >
        <Flex direction="column" mb={5}>
          <p className={css({ fontSize: 'xl', fontWeight: 'bold' })}>영화 선택</p>
          <p className={css({ fontSize: 'sm', color: 'gray.500' })}>글 작성을 위해 영화를 선택해주세요</p>
        </Flex>
        <SearchContent />
      </DialogContent>
    </Dialog>
  );
}
