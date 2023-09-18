import { renderHook } from '@testing-library/react';
import { usePreservedObject } from './use-preserved-object';

describe('`usePreservedObject`', () => {
  test('`usePreservedObject`은 항상 객체를 반환해야 한다', () => {
    // Given
    const { result } = renderHook(() => usePreservedObject(() => {}));

    // Then
    expect(result.current).toBeInstanceOf(Object);
  });

  test('함수가 리렌더링 이후 다시 생성되어도 `preservedObject`의 레퍼런스는 변경되면 안된다.', () => {
    // Given
    const { result, rerender } = renderHook(({ object }) => usePreservedObject(object), {
      initialProps: { object: {} },
    });
    const preservedObject = result.current;

    // When
    rerender({ object: {} });

    // Then
    expect(result.current).toBe(preservedObject);
  });
});
