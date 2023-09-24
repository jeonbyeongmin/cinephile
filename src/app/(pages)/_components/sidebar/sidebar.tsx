import BottomTools from '@/app/(pages)/_components/sidebar/bottom-tools';
import { Link, Logo } from '@/components';
import { css } from '@/styled-system/css';

import { token } from '@/styled-system/tokens';
import Navbar from './navbar';

export function Sidebar() {
  return (
    <nav
      className={css({
        h: 'full',
        position: 'fixed',
        flexDirection: 'column',
        userSelect: 'none',
        width: '64',
        py: 5,
        px: 3,
        gap: 2,
        display: { base: 'none', md: 'flex' },
      })}
    >
      <Link href="/home?sort=hot" className={css({ px: 3, pb: 5, color: 'white' })}>
        <Logo size={30} color={token('colors.white')} />
      </Link>
      <Navbar />
      <BottomTools />
    </nav>
  );
}
