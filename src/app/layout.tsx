import '@/styles/global.css';

import { ExternalSDK, GlobalClientComponent } from '@/app/_components';
import { UserProvider } from '@/app/_contexts';
import { NotoSans } from '@/styles/font';
import { isMockEnabled, isProduction } from '@/utils/is';

if (!isProduction && isMockEnabled) {
  const startMocking = async () => {
    const { server } = await import('../mocks/server');
    server.listen();
  };

  startMocking();
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = null;

  return (
    <html lang="ko">
      <body className={NotoSans.className}>
        <GlobalClientComponent>
          <UserProvider user={user}>{children}</UserProvider>
        </GlobalClientComponent>
      </body>
      <ExternalSDK />
    </html>
  );
}
