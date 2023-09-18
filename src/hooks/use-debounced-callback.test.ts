import { renderHook } from '@testing-library/react';
import { useDebouncedCallback } from './use-debounced-callback';

describe('`useDebounceCallback` 유닛 테스트', () => {
  const 대기_시간 = 500;
  const 대기_시간보다_짧은_시간 = 490;
  const 남은_시간 = 10;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test('디바운스된 `callback` 함수는 딱 한 번만 실행되어야 한다.', () => {
    // Given
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 대기_시간));
    const debouncedCallback = result.current;

    // When
    debouncedCallback();

    // Then
    expect(callback).not.toBeCalled();

    // When
    jest.advanceTimersByTime(대기_시간);
    jest.advanceTimersByTime(대기_시간);
    jest.advanceTimersByTime(대기_시간);

    // Then
    expect(callback).toBeCalledTimes(1);
  });

  test('디바운스된 `callback` 함수는 대기 시간이 되기 전까지 실행되면 안된다.', () => {
    // Given
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 대기_시간));
    const debouncedCallback = result.current;

    // When
    debouncedCallback();
    jest.advanceTimersByTime(대기_시간보다_짧은_시간);

    // Then
    expect(callback).not.toBeCalled();

    // When
    jest.advanceTimersByTime(남은_시간);

    // Then
    expect(callback).toBeCalledTimes(1);
  });

  test('디바운스된 `callback` 함수가 대기 시간이 되기 전에 다시 실행되면 기다린 시간이 초기화되어야 한다.', () => {
    // Given
    const callback = jest.fn();
    const { result } = renderHook(() => useDebouncedCallback(callback, 대기_시간));
    const debouncedCallback = result.current;

    // When
    debouncedCallback();
    jest.advanceTimersByTime(대기_시간보다_짧은_시간);

    // Then
    expect(callback).not.toBeCalled();

    // When
    debouncedCallback();
    jest.advanceTimersByTime(대기_시간보다_짧은_시간);

    // Then
    expect(callback).not.toBeCalled();

    // When
    jest.advanceTimersByTime(대기_시간);

    // Then
    expect(callback).toBeCalledTimes(1);
  });

  test('`useDebounceCallback`이 언마운트되면 함수 실행은 취소되어야 한다.', () => {
    // Given
    const callback = jest.fn();
    const { result, unmount } = renderHook(() => useDebouncedCallback(callback, 대기_시간));
    const debouncedCallback = result.current;

    // When
    debouncedCallback();
    jest.advanceTimersByTime(대기_시간보다_짧은_시간);

    // Then
    expect(callback).not.toBeCalled();

    // When
    unmount();
    jest.advanceTimersByTime(남은_시간);

    // Then
    expect(callback).not.toBeCalled();
  });
});
