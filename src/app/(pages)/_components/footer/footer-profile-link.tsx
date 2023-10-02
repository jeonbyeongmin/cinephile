'use client';

import { useUser } from '@/app/_contexts';
import { Avatar, Link } from '@/components';
import { open } from '@/redux/features/modal-slice';
import { useAppDispatch } from '@/redux/hooks';
import { css } from '@/styled-system/css';
import { useSelectedLayoutSegment } from 'next/navigation';
import { navLinkStyles } from './footer.styles';

export function FooterProfileLink({}) {
  const dispatch = useAppDispatch();

  const { isLoggedIn, user } = useUser();

  const segment = useSelectedLayoutSegment() as string;
  const isActive = segment.includes('profile');

  return (
    <Link
      onClick={!user ? () => dispatch(open({ type: 'login' })) : undefined}
      href={{ pathname: '/profile', query: { id: 1 } }}
      className={navLinkStyles}
    >
      <Avatar size="sm" src={user?.image} alt="" />
      <span className={css({ fontSize: 'xs', fontWeight: isActive ? 'bold' : 'normal' })}>
        {isLoggedIn ? '프로필' : '로그인'}
      </span>
    </Link>
  );
}
