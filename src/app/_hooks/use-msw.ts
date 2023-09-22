/* -disable react-hooks/exhaustive-deps */

import type { SetupWorker } from 'msw';

import { isMockEnabled, isProduction } from '@/utils/is';
import { useEffect, useRef } from 'react';

export function useMSW() {
  const worker = useRef<SetupWorker | null>(null);

  const init = async () => {
    const { worker } = await import('../../mocks/browser');
    return worker;
  };

  useEffect(() => {
    if (!isProduction && isMockEnabled) {
      init().then(w => {
        if (!worker.current) {
          worker.current = w;
          worker.current.start({ onUnhandledRequest: 'bypass' });
        }
      });

      return () => {
        if (worker.current) {
          worker.current.stop();
        }
      };
    }
  }, []);
}
