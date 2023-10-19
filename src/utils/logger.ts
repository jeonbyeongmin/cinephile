import { isClient } from '@/utils/is';

export function logOnBrowser(type: 'error' | 'log' | 'warn', ...args: any[]) {
  if (isClient) {
    console[type](...args);
  }
}
