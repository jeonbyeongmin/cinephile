'use client';

import { HotMovieList } from '@/app/(pages)/_components/modal/movie-select/hot-movie-list';
import { SearchContent } from '@/app/(pages)/_components/modal/movie-select/search-content';
import { Dialog, DialogContent } from '@/components';
import { close, selectModal } from '@/redux/features/modal-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { css, cx } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { flex } from '@/styled-system/patterns';

export default function MovieSelectModal() {
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
