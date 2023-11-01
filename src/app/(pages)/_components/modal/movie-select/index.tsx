'use client';

import { Dialog, DialogContent } from '@/components/primitive';
import { close, selectModal } from '@/redux/features/modal-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { css, cx } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { flex } from '@/styled-system/patterns';

import { HotMovieList } from './hot-movie-list';
import { SearchContent } from './search-content';

export function MovieSelectModal() {
  const dispatch = useAppDispatch();
  const { isOpen, type } = useAppSelector(selectModal);

  return (
    <Dialog open={type === 'movieSelect' && isOpen} onOpenChange={() => dispatch(close())}>
      <DialogContent
        title="영화 선택"
        description="글 작성을 위해 영화를 선택해주세요"
        className={cx(flex({ direction: 'column' }), css({ w: 'full', maxW: '2xl', h: 'full', p: { base: 3, md: 6 } }))}
      >
        <Flex direction="column" bg="gray.900">
          <SearchContent />
          <HotMovieList />
        </Flex>
      </DialogContent>
    </Dialog>
  );
}
