export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isTest = process.env.NODE_ENV === 'test';

export const isClient = typeof window !== 'undefined';
export const isServer = !isClient;

export const isMockEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';
export const isMockDisabled = !isMockEnabled;

export const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
