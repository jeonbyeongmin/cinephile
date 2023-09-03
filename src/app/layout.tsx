import { GlobalClientProvider, GlobalModal, NavBar } from '@/app/components';
import { css } from '@/styled-system/css';
import { Container } from '@/styled-system/jsx';
import { token } from '@/styled-system/tokens';
import { NotoSans } from '@/styles/font';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import './global.css';

if (process.env.NODE_ENV === 'development') {
  const startMocking = async () => {
    const initMocks = await import('../mocks').then(res => res.initMocks);
    await initMocks();
  };

  startMocking();
}

export const metadata: Metadata = {
  title: 'Cinephile',
  description: '영화를 좋아하는 사람들을 위한 커뮤니티',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // TODO: 유저 정보 Fetch

  return (
    <html lang="ko">
      <body className={NotoSans.className}>
        <GlobalClientProvider>
          <GlobalModal />
          <NextTopLoader color={token('colors.gray.50')} showSpinner={false} height={1} shadow={false} />
          <Container paddingX={0} maxW="7xl" css={{ flex: 1, h: 'full', minH: 0 }}>
            <NavBar />
            <main className={css({ flex: 1, h: 'full', ml: { base: 0, md: 64 } })}>{children}</main>
          </Container>
        </GlobalClientProvider>
      </body>
    </html>
  );
}
