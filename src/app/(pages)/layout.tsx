import { GlobalModal, NavBar } from '@/app/(pages)/components';
import { css } from '@/styled-system/css';
import { Container } from '@/styled-system/jsx';
import { token } from '@/styled-system/tokens';
import NextTopLoader from 'nextjs-toploader';

/**
 * @description
 * - `PagesLayout` 은 모든 페이지에 공통으로 적용되는 레이아웃입니다.
 * - 모든 페이지에 공통 레이아웃 UI 을 적용합니다.
 */
export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader color={token('colors.gray.50')} showSpinner={false} height={1} shadow={false} />
      <GlobalModal />
      <Container paddingX={0} maxW="7xl" css={{ flex: 1, h: 'full', minH: 0 }}>
        <NavBar />
        <main className={css({ flex: 1, h: 'full', ml: { base: 0, md: 64 } })}>{children}</main>
      </Container>
    </>
  );
}
