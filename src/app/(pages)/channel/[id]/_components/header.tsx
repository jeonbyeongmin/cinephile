'use client';

import { ThreadSortDropdown, type ThreadSortValue } from '@/app/(pages)/_components';
import { Header, Icon, IconButton } from '@/components';
import { useBoolean, useScrollEffect } from '@/hooks';
import { css } from '@/styled-system/css';
import { useSearchParams } from 'next/navigation';

import { THREAD_SORT_KEY } from '../_utils/constants';

interface ChannelDetailHeaderProps {
  title: string;
}

export function ChannelDetailHeader({ title }: ChannelDetailHeaderProps) {
  const searchParams = useSearchParams();
  const threadSortMode = searchParams.get(THREAD_SORT_KEY) as ThreadSortValue;

  const [showTitle, setShowTitleTrue, setShowTitleFalse] = useBoolean(false);
  const [showSorter, setShowSorterTrue, setShowSorterFalse] = useBoolean(false);

  useScrollEffect({
    onScroll: () => {
      const titleElement = document.querySelector('#movie-title');
      const sortDropdown = document.querySelector('.thread-sorter');

      if (!titleElement || !sortDropdown) return;

      const isTitleVanished = titleElement.getBoundingClientRect().top < 50;
      const isSorterVanished = sortDropdown.getBoundingClientRect().top < 0;

      isTitleVanished ? setShowTitleTrue() : setShowTitleFalse();
      isSorterVanished ? setShowSorterTrue() : setShowSorterFalse();
    },
  });

  return (
    <Header
      variant={!showTitle ? 'transparent' : 'glass'}
      className={css({ pl: 1, pr: 3, mb: -14, transition: 'all 150ms' })}
    >
      <Header.Back />
      <Header.Content
        show={showTitle}
        className={css({
          fontSize: 'lg',
          fontWeight: 'bold',
          transition: 'all 150ms',
        })}
      >
        {title}
      </Header.Content>
      {showSorter ? (
        <ThreadSortDropdown
          value={threadSortMode}
          keyName={THREAD_SORT_KEY}
          scrollToTop={false}
          className={css({ ml: 1 })}
        />
      ) : (
        <IconButton variant="ghost" icon={<Icon name="share" size={20} />} aria-label="share button" />
      )}
    </Header>
  );
}
