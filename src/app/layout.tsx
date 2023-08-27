import { NavBar } from '@/components/NavBar';
import { Flex } from '@/components/base';
import { QueryClientProvider } from '@/lib/query/provider';
import { MSWComponent } from '@/mocks/MockContainer';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

const notoSans = Noto_Sans({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cinephile',
  description: '영화를 좋아하는 사람들을 위한 커뮤니티',
};

if (process.env.NODE_ENV === 'development') {
  const startMocking = async () => {
    const initMocks = await import('../mocks').then(res => res.initMocks);
    await initMocks();
  };

  startMocking();
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <MSWComponent>
          <QueryClientProvider>
            <NextTopLoader color="#F4F4F5" showSpinner={false} height={1} shadow={false} />
            <Flex className="w-full h-full" justify="center">
              <Flex className="max-w-screen-xl w-full h-full relative">
                <NavBar />
                <main className="flex-1 h-full md:ml-56">{children}</main>
                <div className="w-80 hidden lg:block bg-gray-950 h-[100vh] sticky top-0" />
              </Flex>
            </Flex>
          </QueryClientProvider>
        </MSWComponent>
      </body>
    </html>
  );
}
