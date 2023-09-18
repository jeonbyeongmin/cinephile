import { renderHook } from '@testing-library/react';
import { useIsMounted } from './use-is-mounted';

describe('`useIsMounted` 유닛 테스트', () => {
  it('`useIsMounted`가 마운트되면 `true`를 반환해야 한다.', () => {
    // Given
    const { result } = renderHook(useIsMounted);

    // Then
    expect(result.current).toBe(true);
  });
});
