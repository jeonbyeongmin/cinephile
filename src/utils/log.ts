export function logOnDev(...args: any[]) {
  if (process.env.NODE_ENV === 'development') {
    console.log('DEV::', ...args);
  }
}
