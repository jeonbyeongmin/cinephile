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
    if (isProduction || !isMockEnabled) {
      return;
    }

    init().then(w => {
      if (worker.current !== null) {
        return;
      }
      worker.current = w;
      worker.current.start({ onUnhandledRequest: 'bypass' });
    });

    return () => {
      worker.current?.stop();
    };
  }, []);
}
