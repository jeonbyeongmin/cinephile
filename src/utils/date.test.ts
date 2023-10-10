import { HOUR, MINUTE, MONTH, YEAR, getRelativeTime, getYear } from '@/utils/date';

describe('`getRelativeTime` 유닛 테스트', () => {
  const now = new Date();

  test('현재 시간', () => {
    expect(getRelativeTime(now)).toBe('방금 전');
  });

  test('현재 시간으로부터 1분 전', () => {
    const oneMinuteAgo = new Date(now.getTime() - MINUTE);
    expect(getRelativeTime(oneMinuteAgo)).toBe('1분 전');
  });

  test('현재 시간으로부터 1시간 전', () => {
    const oneHourAgo = new Date(now.getTime() - HOUR);
    expect(getRelativeTime(oneHourAgo)).toBe('1시간 전');
  });

  test('현재 시간으로부터 1일 전', () => {
    const oneHourAgo = new Date(now.getTime() - HOUR);
    expect(getRelativeTime(oneHourAgo)).toBe('1시간 전');
  });

  test('현재 시간으로부터 1달 전', () => {
    const oneMonthAgo = new Date(now.getTime() - MONTH);
    expect(getRelativeTime(oneMonthAgo)).toBe('1개월 전');
  });

  test('현재 시간으로부터 1년 전', () => {
    const oneYearAgo = new Date(now.getTime() - YEAR);
    expect(getRelativeTime(oneYearAgo)).toBe('1년 전');
  });
});

describe('`getYear` 유닛 테스트', () => {
  const now = new Date();
  test('Date 타입의 값이 들어가면 전체 년도가 반환되어야 한다.', () => {
    expect(now.getFullYear()).toBe(getYear(now));
  });

  test('문자열 타입의 값이 들어가면 전체 년도가 반환되어야 한다.', () => {
    const stringDate = now.toISOString();
    expect(now.getFullYear()).toBe(getYear(stringDate));
  });
});
