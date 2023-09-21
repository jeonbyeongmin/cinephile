import { ExternalSDK, GlobalClientProvider } from '@/app/_components';
import { NotoSans } from '@/styles/font';
import '@/styles/global.css';

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
