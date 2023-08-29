'use client';

import { ReactNode, useEffect, useState } from 'react';

export function MockClientWrapper({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      const initMocks = await import('../mocks').then(res => res.initMocks);
      await initMocks();
      setReady(true);
    };

    if (!ready) {
      init();
    }
  }, [ready]);

  if (!ready) {
    return null;
  }

  return <>{children}</>;
}
