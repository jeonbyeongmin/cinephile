import { ExternalSDK, GlobalClientComponent } from '@/app/_components';
import { NotoSans } from '@/styles/font';
import '@/styles/global.css';
import { logOnDev } from '@/utils';

if (process.env.NODE_ENV === 'development') {
  const startMocking = async () => {
    const { server } = await import('../mocks/server');
    server.listen();
    logOnDev('[MSW] Server mocking enabled');
  };

  startMocking();
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={NotoSans.className}>
        <GlobalClientComponent>{children}</GlobalClientComponent>
      </body>
      <ExternalSDK />
    </html>
  );
}
