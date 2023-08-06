import Header from '@/components/Header';
import { NavBar } from '@/components/NavBar';
import { Flex } from '@/components/base';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const notoSans = Noto_Sans({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cinephile',
  description: '영화를 좋아하는 사람들을 위한 커뮤니티',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <div className="h-full">
          <Header />
          <Flex className="w-full px-5" justify="center">
            <Flex className="max-w-screen-xl w-full" gap={5}>
              <NavBar />
              <main className="flex-1">{children}</main>
              <div className="w-80 hidden lg:block bg-gray-900 h-[100vh] sticky top-0" />
            </Flex>
          </Flex>
        </div>
      </body>
    </html>
  );
}
