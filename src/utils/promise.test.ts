import { wait } from './promise';

describe('`wait` 유닛 테스트', () => {
  const WAIT_TIME = 1000;

  test('`wait` 함수는 Promise를 반환해야 한다.', () => {
    const result = wait(WAIT_TIME);
    expect(result).toBeInstanceOf(Promise);
  });

  test('`wait` 함수는 인자로 전달된 시간만큼 대기한 후에 resolve 되어야 한다.', async () => {
    const start = Date.now();
    await wait(WAIT_TIME);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(WAIT_TIME);
  });
});
