import { act, renderHook } from '@testing-library/react';
import { useBoolean } from '../use-boolean';

describe('`useBoolean`', () => {
  describe('반환 값 타입 체크', () => {
    // Given
    const { result } = renderHook(useBoolean);
    const [value, setTrue, setFalse, excuteToggle] = result.current;

    test('`value`의 타입은 `boolean`이다.', () => {
      // Then
      expect(typeof value).toBe('boolean');
    });

    test('`setTrue`의 타입은 `function`이다.', () => {
      // Then
      expect(typeof setTrue).toBe('function');
    });

    test('`setFalse`의 타입은 `function`이다.', () => {
      // Then
      expect(typeof setFalse).toBe('function');
    });

    test('`excuteToggle`의 타입은 `function`이다.', () => {
      // Then
      expect(typeof excuteToggle).toBe('function');
    });
  });

  describe('초기값 체크', () => {
    test('디폴트 `initialValue`는 `false`이며, 반환값은 `false`이다.', () => {
      // Given
      const { result } = renderHook(useBoolean);
      const [value] = result.current;

      // Then
      expect(value).toBe(false);
    });

    test('`initialValue`가 false면 반환값도 false이다.', () => {
      // Given
      const { result } = renderHook(() => useBoolean(false));
      const [value] = result.current;

      // Then
      expect(value).toBe(false);
    });

    test('`initialValue`가 true면 반환값도 true이다.', () => {
      // Given
      const { result } = renderHook(() => useBoolean(true));
      const [value] = result.current;

      // Then
      expect(value).toBe(true);
    });
  });

  test('`setTrue` 실행 시, `value`은 `true`가 된다.', () => {
    // Given
    const { result } = renderHook(() => useBoolean(false));
    const [, setTrue] = result.current;

    {
      // When
      act(setTrue);
      const [value] = result.current;

      // Then
      expect(value).toBe(true);
    }
  });

  test('`setFalse` 실행 시, `value`은 `false`가 된다.', () => {
    // Given
    const { result } = renderHook(() => useBoolean(true));
    const [, , setFalse] = result.current;

    {
      // When
      act(setFalse);
      const [value] = result.current;

      // Then
      expect(value).toBe(false);
    }
  });

  test('`excuteToggle` 실행 시, `value`은 `true` -> `false`, `false` -> `true`가 된다.', () => {
    // Given
    const { result } = renderHook(() => useBoolean(true));
    const [, , , excuteToggle] = result.current;

    {
      // When
      act(excuteToggle);
      const [value] = result.current;

      // Then
      expect(value).toBe(false);
    }
    {
      // When
      act(excuteToggle);
      const [value] = result.current;

      // Then
      expect(value).toBe(true);
    }
    {
      // When
      act(excuteToggle);
      const [value] = result.current;

      // Then
      expect(value).toBe(false);
    }
  });
});
