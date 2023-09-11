'use client';

import { isMobile } from '@/utils';
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

interface QueryClientProviderProps {
  children: React.ReactNode;
}

export default function QueryClientProvider({ children }: QueryClientProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );

  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
      {!isMobile() && <ReactQueryDevtools initialIsOpen={false} />}
    </ReactQueryClientProvider>
  );
}
