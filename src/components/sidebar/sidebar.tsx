import { Link, Logo } from '@/components';
import BottomTools from '@/components/sidebar/bottom-tools';
import { css } from '@/styled-system/css';

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
      <Link href="/" className={css({ px: 3, pb: 5, color: 'yellow.400' })}>
        <Logo width={120} height={40} />
      </Link>
      <Navbar />
      <BottomTools />
    </nav>
  );
}
