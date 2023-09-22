import '@/styles/global.css';

import { ExternalSDK, GlobalClientComponent } from '@/app/_components';
import { NotoSans } from '@/styles/font';
import { isMockEnabled, isProduction } from '@/utils/is';

if (!isProduction && isMockEnabled) {
  const startMocking = async () => {
    const { server } = await import('../mocks/server');
    server.listen();
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
