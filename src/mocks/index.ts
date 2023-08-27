const isProduction = process.env.NODE_ENV === 'production';
const isMockingDisabled = process.env.NEXT_PUBLIC_API_MOCKING !== 'enabled';
const isServer = typeof window !== 'undefined';

/**
 * MSW Mocks initialization
 * @returns
 */
export async function initMocks() {
  if (isMockingDisabled || isProduction) {
    return;
  }

  if (isServer) {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./browser');
    const nextRequestRegex = /\/_next.*/;

    await worker.start({
      onUnhandledRequest: req => {
        if (req.url.pathname.match(nextRequestRegex)) return;
        console.warn('[MSW] unmocked request:', `${req.method} ${req.url.pathname}`);
      },
    });
  }
}
