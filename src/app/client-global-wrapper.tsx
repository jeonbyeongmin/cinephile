'use client';

import { MockClientWrapper } from '@/app/mock-client-wrapper';
import { QueryClientProvider } from '@/app/query-client-provider';

export function GlobalClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <MockClientWrapper>
      <QueryClientProvider>{children}</QueryClientProvider>
    </MockClientWrapper>
  );
}
