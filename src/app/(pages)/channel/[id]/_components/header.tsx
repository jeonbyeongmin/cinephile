'use client';

import { Header } from '@/components';
import { css } from '@/styled-system/css';

interface ChannelDetailHeaderProps {
  title: string;
}

export function ChannelDetailHeader({ title }: ChannelDetailHeaderProps) {
  return (
    <Header variant="transparent" className={css({ mb: -14 })}>
      <Header.Back />
      <Header.Content className={css({ fontSize: 'lg', fontWeight: 'bold' })}>{title}</Header.Content>
    </Header>
  );
}
