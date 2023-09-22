/* -disable react-hooks/exhaustive-deps */
import type { SetupWorker } from 'msw';

import { logOnDev } from '@/utils';
import { useEffect, useRef } from 'react';

const isProduction = process.env.NODE_ENV === 'production';

export function useMockServiceWorker() {
  const worker = useRef<SetupWorker | null>(null);

  const init = async () => {
    const { worker } = await import('../../mocks/browser');
    return worker;
  };

  const start = (worker: SetupWorker) => {
    worker.start({ onUnhandledRequest: 'bypass' });
    logOnDev('[MSW] Browser mocking enabled');
  };

  const stop = (worker: SetupWorker) => {
    worker.stop();
  };

  useEffect(() => {
    if (!isProduction) {
      init().then(w => {
        if (!worker.current) {
          worker.current = w;
          start(worker.current);
        }
      });

      return () => {
        if (worker.current) {
          stop(worker.current);
        }
      };
    }
  }, []);
}
