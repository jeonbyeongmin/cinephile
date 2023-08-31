import BottomTools from '@/app/components/nav-bar/bottom-tools';
import { Logo } from '@/components/base';
import { css } from '@/styled-system/css';
import Link from 'next/link';
import NavBarMenu from './nav-bar-menu';

export default function NavBar() {
  return (
    <nav
      className={css({
        h: '100vh',
        position: 'fixed',
        flexDirection: 'column',
        userSelect: 'none',
        width: 56,
        py: 5,
        gap: 2,
        display: { base: 'none', md: 'flex' },
      })}
    >
      <Link href="/" className={css({ px: 3, pb: 5 })}>
        <Logo width={120} height={40} />
      </Link>
      <NavBarMenu />
      <BottomTools />
    </nav>
  );
}
