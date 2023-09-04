import { NavBar } from '@/app/(pages)/components';
import { css } from '@/styled-system/css';
import { Container } from '@/styled-system/jsx';

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container paddingX={0} maxW="7xl" css={{ flex: 1, h: 'full', minH: 0 }}>
      <NavBar />
      <main className={css({ flex: 1, h: 'full', ml: { base: 0, md: 64 } })}>{children}</main>
    </Container>
  );
}
