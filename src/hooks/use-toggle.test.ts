import { act, renderHook } from '@testing-library/react';
import { useToggle } from './use-toggle';

describe('`useToggle`', () => {
  describe('반환 값 타입 체크', () => {
    // Given
    const { result } = renderHook(useToggle);
    const [value, excute] = result.current;

    test('`value`의 타입은 `boolean`이다.', () => {
      // Then
      expect(typeof value).toBe('boolean');
    });

    test('`excute`의 타입은 `function`이다.', () => {
      // Then
      expect(typeof excute).toBe('function');
    });
  });

  describe('초기값 체크', () => {
    test('디폴트 `initialValue`는 `false`이며, 반환값은 `false`이다.', () => {
      // Given
      const { result } = renderHook(useToggle);
      const [value] = result.current;

      // Then
      expect(value).toBe(false);
    });

    test('`initialValue`가 false면 반환값도 false이다.', () => {
      // Given
      const { result } = renderHook(() => useToggle(false));
      const [value] = result.current;

      // Then
      expect(value).toBe(false);
    });

    test('`initialValue`가 true면 반환값도 true이다.', () => {
      // Given
      const { result } = renderHook(() => useToggle(true));
      const [value] = result.current;

      // Then
      expect(value).toBe(true);
    });
  });

  test('`excute` 실행 시, `value`은 `true` -> `false`, `false` -> `true`가 된다.', () => {
    // Given
    const { result } = renderHook(() => useToggle(true));
    const [, excute] = result.current;

    {
      // When
      act(excute);
      const [value] = result.current;

      // Then
      expect(value).toBe(false);
    }
    {
      // When
      act(excute);
      const [value] = result.current;

      // Then
      expect(value).toBe(true);
    }
    {
      // When
      act(excute);
      const [value] = result.current;

      // Then
      expect(value).toBe(false);
    }
  });
});
