'use client';

import { HotMovies } from '@/app/(pages)/@modal/movie-select/hot-movies';
import { SearchContent } from '@/app/(pages)/@modal/movie-select/search-content';
import { Dialog, DialogContent } from '@/components';
import { close, selectModal } from '@/redux/features/modalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';

export default function MovieSelectModal() {
  const dispatch = useAppDispatch();
  const { isOpen, type } = useAppSelector(selectModal);

  return (
    <Dialog open={type === 'movieSelect' && isOpen} onOpenChange={() => dispatch(close())}>
      <DialogContent
        title="영화 선택"
        description="글 작성을 위해 영화를 선택해주세요"
        className={css({ w: 'full', maxW: '2xl', display: 'flex', flexDirection: 'column', h: 'full', p: 6 })}
      >
        <Flex direction="column" bg="gray.900">
          <SearchContent />
          <HotMovies />
        </Flex>
      </DialogContent>
    </Dialog>
  );
}
