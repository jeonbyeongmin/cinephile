/* eslint-disable @next/next/no-before-interactive-script-outside-document */

import { GlobalClientProvider } from '@/app/global-client-provider';
import { NotoSans } from '@/styles/font';
import Script from 'next/script';
import './global.css';

if (process.env.NODE_ENV === 'development') {
  const startMocking = async () => {
    const initMocks = await import('../mocks').then(res => res.initMocks);
    await initMocks();
  };

  startMocking();
}

/**
 * @description
 * - `RootLayout` 은 모든 페이지에 공통으로 적용되는 레이아웃입니다.
 * - 글로벌 스타일, 클라이언트 프로바이더 등과 같은 전역 설정을 제공하는 것 이외에는 아무 것도 하지 않습니다.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={NotoSans.className}>
        <GlobalClientProvider>{children}</GlobalClientProvider>
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
          integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script
          id="kakao-init"
          strategy="beforeInteractive"
        >{`window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID); console.log(Kakao.isInitialized());`}</Script>
      </body>
    </html>
  );
}
