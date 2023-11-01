import { Link, Logo } from '@/components/primitive';
import { css } from '@/styled-system/css';
import { token } from '@/styled-system/tokens';

import { BottomTools } from './bottom-tools';
import { Navbar } from './navbar';

export function Sidebar() {
  return (
    <div className={sidebarStyles}>
      <Link href="/home?sort=hot" className={css({ p: 3, rounded: 'full', _hover: { bg: 'gray.800' } })}>
        <Logo size={32} color={token('colors.white')} />
      </Link>
      <Navbar />
      <BottomTools />
    </div>
  );
}

const sidebarStyles = css({
  display: { base: 'none', md: 'flex' },
  flexDirection: 'column',
  alignItems: 'start',
  gap: 4,
  width: 64,
  py: 5,
  px: 3,
  h: 'full',
  position: 'fixed',
  userSelect: 'none',
});
