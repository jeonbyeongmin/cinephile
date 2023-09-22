import NextTopLoader from 'nextjs-toploader';

import { AuthModal, Footer, MovieSelectModal, Sidebar } from '@/app/(pages)/_components';
import { css } from '@/styled-system/css';
import { Container } from '@/styled-system/jsx';
import { token } from '@/styled-system/tokens';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '씨네필',
  description: '영화를 좋아하는 사람들을 위한 커뮤니티',
};

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader color={token('colors.gray.50')} showSpinner={false} height={1} shadow={false} />
      <Container paddingX={0} maxW="4xl" css={{ flex: 1, minH: 0, h: 'full' }}>
        <Sidebar />
        <main className={css({ flex: 1, h: 'full', ml: { base: 0, md: 64 }, mb: 16 })}>{children}</main>
        <Footer />
      </Container>
      <MovieSelectModal />
      <AuthModal />
    </>
  );
}
