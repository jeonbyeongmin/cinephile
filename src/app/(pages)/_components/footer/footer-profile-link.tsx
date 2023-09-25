'use client';

import { useUser } from '@/app/_contexts';
import { Icon } from '@/components';
import { Avatar } from '@/components/avatar';
import { Link } from '@/components/link';
import { open } from '@/redux/features/modal-slice';
import { useAppDispatch } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { token } from '@/styled-system/tokens';
import { useSelectedLayoutSegment } from 'next/navigation';

export function FooterProfileLink({}) {
  const user = useUser();
  const dispatch = useAppDispatch();

  const segment = useSelectedLayoutSegment() as string;
  const isActive = segment.includes('profile');

  return (
    <>
      {!!user ? (
        <Link
          href={{ pathname: '/profile', query: { id: 1 } }}
          className={flex({ direction: 'column', align: 'center', justify: 'center', gap: 1 })}
        >
          <Avatar size="sm" fallback={<Icon name="user" color={token('colors.gray.200')} size={22} />} />
          <span className={css({ fontSize: 'xs', fontWeight: isActive ? 'bold' : 'normal' })}>프로필</span>
        </Link>
      ) : (
        <button
          onClick={() => dispatch(open({ type: 'login' }))}
          className={flex({ direction: 'column', align: 'center', justify: 'center', gap: 1, color: 'gray.50' })}
        >
          <Icon name="user" color={token('colors.gray.200')} size={22} />
          <span className={css({ fontSize: 'xs', fontWeight: isActive ? 'bold' : 'normal' })}>로그인</span>
        </button>
      )}
    </>
  );
}
