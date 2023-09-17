import { ExternalSDK } from '@/app/external-sdk';
import { GlobalClientProvider } from '@/app/global-client-provider';
import { NotoSans } from '@/styles/font';
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
      </body>
      <ExternalSDK />
    </html>
  );
}
