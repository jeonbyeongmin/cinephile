'use client';

import { ThreadList } from '@/app/(pages)/home/components/thread-list';
import { Button } from '@/components/base';
import { Flex } from '@/styled-system/jsx';
import { useState } from 'react';

export function HomeMain() {
  const [sortMode, setSortMode] = useState<'hot' | 'new'>('hot');

  const handleSortMode = (mode: 'hot' | 'new') => {
    setSortMode(mode);
  };

  return (
    <Flex direction="column">
      <Flex gap={2} py={3} px={2} borderBottomWidth={1} borderBottomColor="gray.800">
        <Button
          rounded="md"
          px={3}
          py={1}
          fontSize="sm"
          active={sortMode === 'hot'}
          onClick={() => handleSortMode('hot')}
        >
          반응순
        </Button>
        <Button
          rounded="md"
          px={3}
          py={1}
          fontSize="sm"
          active={sortMode === 'new'}
          onClick={() => handleSortMode('new')}
        >
          최신순
        </Button>
      </Flex>
      <ThreadList />
    </Flex>
  );
}
