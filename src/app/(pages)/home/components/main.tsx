'use client';

import { ThreadList } from '@/app/(pages)/home/components/thread-list';
import { Button } from '@/components';
import { Flex } from '@/styled-system/jsx';
import { useState } from 'react';

// TODO: 스켈레톤 처리
// TODO: hot, new 페이지 쿼리 스트링 처리
export function HomeMain() {
  const [sortMode, setSortMode] = useState<'hot' | 'new'>('hot');

  const handleSortMode = (mode: 'hot' | 'new') => {
    setSortMode(mode);
  };

  return (
    <Flex direction="column">
      <Flex gap={2} py={4} px={2}>
        <Button
          rounded="lg"
          px={3}
          py={1}
          active={sortMode === 'hot'}
          onClick={() => handleSortMode('hot')}
          css={{ fontSize: { base: 'xs', md: 'sm' } }}
        >
          반응순
        </Button>
        <Button
          rounded="lg"
          px={3}
          py={1}
          active={sortMode === 'new'}
          onClick={() => handleSortMode('new')}
          css={{ fontSize: { base: 'xs', md: 'sm' } }}
        >
          최신순
        </Button>
      </Flex>
      <ThreadList type={sortMode} />
    </Flex>
  );
}
