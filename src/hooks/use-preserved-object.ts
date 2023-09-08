import { useEffect, useState } from 'react';

type NotNullishValue = {};

/**
 * @description 값이 바뀌지 않으면 객체의 레퍼런스가 보존되는 훅
 * @license MIT License Copyright (c) 2021 Viva Republica, Inc
 */
export function usePreservedObject<T extends NotNullishValue>(
  value: T,
  areValuesEqual: (a: T, b: T) => boolean = areDeeplyEqual
) {
  const [reference, setReference] = useState<T>(value);

  useEffect(() => {
    if (!areValuesEqual(value, reference)) {
      setReference(value);
    }
  }, [areValuesEqual, reference, value]);

  return reference;
}

function areDeeplyEqual<T extends NotNullishValue>(x: T, y: T) {
  return JSON.stringify(x) === JSON.stringify(y);
}
