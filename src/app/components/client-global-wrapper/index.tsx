'use client';

import { MockClientWrapper } from '@/app/components/client-global-wrapper/mock-client-wrapper';
import { QueryClientProvider } from '@/app/components/client-global-wrapper/query-client-provider';

export function GlobalClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MockClientWrapper>
      <QueryClientProvider>{children}</QueryClientProvider>
    </MockClientWrapper>
  );
}
