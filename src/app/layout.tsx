import '@/styles/global.css';

import { ExternalSDK, GlobalClientComponent } from '@/app/_components';
import { UserProvider } from '@/app/_contexts';
import { NotoSans } from '@/styles/font';
import { isMockEnabled, isProduction } from '@/utils/is';
import { cookies } from 'next/headers';

if (!isProduction && isMockEnabled) {
  const startMocking = async () => {
    const { server } = await import('../mocks/server');
    server.listen();
  };

  startMocking();
}

async function getUser() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
      headers: { Cookie: cookies().toString() },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return { user: null };
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { user } = await getUser();

  return (
    <html lang="ko">
      <body className={NotoSans.className}>
        <ExternalSDK />
        <GlobalClientComponent>
          <UserProvider user={user}>{children}</UserProvider>
        </GlobalClientComponent>
      </body>
    </html>
  );
}
