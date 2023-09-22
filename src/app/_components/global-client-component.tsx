'use client';

import { QueryClientProvider, ReduxProvider } from '@/app/_contexts';
import { useMSW } from '@/app/_hooks';

export function GlobalClientComponent({ children }: { children: React.ReactNode }) {
  useMSW();

  return (
    <QueryClientProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </QueryClientProvider>
  );
}
