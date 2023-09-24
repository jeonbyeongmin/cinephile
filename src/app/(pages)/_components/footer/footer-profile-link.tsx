'use client';

import { Avatar } from '@/components/avatar';
import { Link } from '@/components/link';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { useSelectedLayoutSegment } from 'next/navigation';

export function FooterProfileLink({}) {
  const segment = useSelectedLayoutSegment() as string;
  const isActive = segment.includes('profile');

  return (
    <Link
      href={{ pathname: '/profile', query: { id: 1 } }}
      className={flex({ direction: 'column', align: 'center', justify: 'center', gap: 1 })}
    >
      <Avatar width="30px" />
      <span className={css({ fontSize: 'xs', fontWeight: isActive ? 'bold' : 'normal' })}>프로필</span>
    </Link>
  );
}
