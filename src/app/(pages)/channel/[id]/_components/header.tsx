'use client';

import { Header, Icon, IconButton } from '@/components';
import { useBoolean } from '@/hooks';
import { css } from '@/styled-system/css';
import { useEffect } from 'react';

interface ChannelDetailHeaderProps {
  title: string;
}

export function ChannelDetailHeader({ title }: ChannelDetailHeaderProps) {
  const [showTitle, setShowTitleTrue, setShowTitleFalse] = useBoolean(false);

  // TODO: Refactor this to a custom hook with throttle
  useEffect(() => {
    const titleElement = document.querySelector('#movie-title');

    const handleScroll = () => {
      if (!titleElement) {
        return;
      }

      if (window.scrollY > titleElement.getBoundingClientRect().top) {
        setShowTitleTrue();
      } else {
        setShowTitleFalse();
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setShowTitleFalse, setShowTitleTrue]);

  return (
    <Header variant={!showTitle ? 'transparent' : 'glass'} className={css({ mb: -14, transition: 'all 150ms' })}>
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
      <IconButton variant="ghost" icon={<Icon name="share" size={20} />} aria-label="share button" />
    </Header>
  );
}
