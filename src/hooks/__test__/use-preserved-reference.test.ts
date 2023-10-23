import { renderHook } from '@testing-library/react';
import { usePreservedReference } from '../use-preserved-reference';

describe('`usePreservedObject`', () => {
  test('`usePreservedObject`의 반환값의 타입은 첫 번째 인자의 타입과 같다', () => {
    // Given
    const { result } = renderHook(() => usePreservedReference({}));

    // Then
    expect(result.current).toBeInstanceOf(Object);
  });

  test('객체가 리렌더링 이후 다시 생성되어도 `preservedObject`의 레퍼런스는 변경되면 안된다.', () => {
    // Given
    const { result, rerender } = renderHook(({ object }) => usePreservedReference(object), {
      initialProps: { object: {} },
    });
    const preservedObject = result.current;

    // When
    rerender({ object: {} });

    // Then
    expect(result.current).toBe(preservedObject);
  });

  test('객체의 프로퍼티가 변경될 경우 `preservedObject`의 레퍼런스는 변경되어야 한다.', () => {
    // Given
    const { result, rerender } = renderHook(({ object }) => usePreservedReference(object), {
      initialProps: { object: {} },
    });
    const preservedObject = result.current;

    // When
    rerender({ object: { foo: 'bar' } });

    // Then
    expect(result.current).not.toBe(preservedObject);
  });
});
