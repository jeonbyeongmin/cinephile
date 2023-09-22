'use client';

import { QueryClientProvider, ReduxProvider } from '@/app/_contexts';
import { useMockServiceWorker } from '@/app/_hooks/useMockServiceWorker';

export function GlobalClientComponent({ children }: { children: React.ReactNode }) {
  useMockServiceWorker();

  return (
    <QueryClientProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </QueryClientProvider>
  );
}
