'use client';

import SearchContent from '@/app/(pages)/@modal/movie-select/search-content';
import { Dialog, DialogContent } from '@/components';
import { css } from '@/styled-system/css';
import { Flex } from '@/styled-system/jsx';
import { useRouter } from 'next/navigation';

export default function MovieSelectModal() {
  const router = useRouter();

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent
        className={css({
          w: 'full',
          maxW: '2xl',
          display: 'flex',
          flexDirection: 'column',
          rounded: '2xl',
          bg: 'gray.950',
          p: 6,
          h: 'full',
          animation: 'contentShow 150ms forwards',
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
