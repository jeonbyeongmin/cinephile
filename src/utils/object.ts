export function mergeObject<T>(...obj: T[]): T {
  return Object.assign({}, ...obj);
}
