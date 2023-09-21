import { MockClientWrapper } from './mock-client-wrapper';
import { QueryClientProvider } from './query-client-provider';
import { ReduxProvider } from './redux-provider';

export function GlobalClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <MockClientWrapper>
      <QueryClientProvider>
        <ReduxProvider>{children}</ReduxProvider>
      </QueryClientProvider>
    </MockClientWrapper>
  );
}
