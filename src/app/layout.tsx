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
