'use client';

import { Header } from '@/components';
import { useBoolean } from '@/hooks';
import { css } from '@/styled-system/css';
import { useEffect } from 'react';

interface ChannelDetailHeaderProps {
  title: string;
}

export function ChannelDetailHeader({ title }: ChannelDetailHeaderProps) {
  const [transparent, setTransparentTrue, setTransparentFalse] = useBoolean(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setTransparentFalse();
      } else {
        setTransparentTrue();
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setTransparentFalse, setTransparentTrue]);

  return (
    <Header variant={transparent ? 'transparent' : 'glass'} className={css({ mb: -14, transition: 'all 150ms' })}>
      <Header.Back />
      <Header.Content className={css({ fontSize: 'lg', fontWeight: 'bold' })}>{title}</Header.Content>
    </Header>
  );
}
