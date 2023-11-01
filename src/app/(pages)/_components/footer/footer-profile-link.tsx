'use client';

import { useUser } from '@/app/_contexts';
import { Avatar, Link } from '@/components/primitive';
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
    <>
      {isLoggedIn ? (
        <Link href={{ pathname: '/profile', query: { id: 1 } }} className={navLinkStyles}>
          <Avatar size="sm" variant="outline" src={user?.image} alt="profile" />
          <span className={css({ fontSize: 'xs', fontWeight: isActive ? 'bold' : 'normal' })}>프로필</span>
        </Link>
      ) : (
        <button className={navLinkStyles} onClick={() => dispatch(open({ type: 'login' }))}>
          <Avatar size="sm" variant="outline" src={user?.image} alt="profile" />
          <span className={css({ fontSize: 'xs', fontWeight: 'normal' })}>로그인</span>
        </button>
      )}
    </>
  );
}
