import BottomTools from '@/app/(pages)/components/navbar/bottom-tools';
import { Logo } from '@/components';
import { css } from '@/styled-system/css';
import Link from 'next/link';
import NavbarMenu from './navbar-menu';

export function Navbar() {
  return (
    <nav
      className={css({
        h: '100vh',
        position: 'fixed',
        flexDirection: 'column',
        userSelect: 'none',
        width: '64',
        py: 5,
        pr: 3,
        gap: 2,
        display: { base: 'none', md: 'flex' },
      })}
    >
      <Link href="/" className={css({ px: 3, pb: 5, color: 'yellow.400' })}>
        <Logo width={120} height={40} />
      </Link>
      <NavbarMenu />
      <BottomTools />
    </nav>
  );
}
