import { renderHook } from '@testing-library/react';
import { usePreservedCallback } from './use-preserved-callback';

describe('`usePreservedCallback`', () => {
  test('`usePreservedCallback`은 항상 함수를 반환해야 한다', () => {
    // Given
    const { result } = renderHook(() => usePreservedCallback(() => {}));

    // Then
    expect(result.current).toBeInstanceOf(Function);
  });

  test('함수가 리렌더링 이후 다시 생성되어도 `preservedCallback`의 레퍼런스는 변경되면 안된다.', () => {
    // Given
    const { result, rerender } = renderHook(({ callback }) => usePreservedCallback(callback), {
      initialProps: { callback: () => {} },
    });
    const preservedCallback = result.current;

    // When
    rerender({ callback: () => {} });

    // Then
    expect(result.current).toBe(preservedCallback);
  });
});
