/**
 * 2개 이상의 객체를 병합합니다. 깊은 복사는 mergeObjectDeep를 사용하세요.
 * @param obj
 * @returns
 */
export function mergeObject<T>(...obj: T[]): T {
  return Object.assign({}, ...obj);
}

/**
 * 사용 시 성능이 저해될 수 있습니다. 가능하다면 mergeObject를 사용하세요.
 * @param obj
 * @returns
 */
export function mergeObjectDeep<T>(...obj: T[]): T {
  return mergeDeep({}, ...obj);
}

function mergeDeep(target: any, ...sources: any[]): any {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isMergeableObject(target) && isMergeableObject(source)) {
    Object.keys(source).forEach(key => {
      if (isMergeableObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  }

  return mergeDeep(target, ...sources);
}

function isMergeableObject(val: any): boolean {
  const nonNullObject = val && typeof val === 'object';
  const isNotRegExp = Object.prototype.toString.call(val) !== '[object RegExp]';
  const isNotDate = Object.prototype.toString.call(val) !== '[object Date]';

  return nonNullObject && isNotRegExp && isNotDate;
}
