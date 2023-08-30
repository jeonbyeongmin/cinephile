import { GlobalClientWrapper } from '@/app/components/client-global-wrapper';
import NavBar from '@/app/components/nav-bar';
import { Flex } from '@/styled-system/jsx';
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
  return (
    <html lang="ko">
      <body className={NotoSans.className}>
        <GlobalClientWrapper>
          <NextTopLoader color={token('colors.gray.50')} showSpinner={false} height={1} shadow={false} />
          <Flex w="full" h="full" justify="center">
            <Flex w="full" maxW="breakpoint-xl" h="full" position="relative">
              <NavBar />
              <main className="flex-1 h-full md:ml-56">{children}</main>
              {/* <div className="w-80 hidden lg:block bg-gray-950 h-[100vh] sticky top-0" /> */}
            </Flex>
          </Flex>
        </GlobalClientWrapper>
      </body>
    </html>
  );
}
