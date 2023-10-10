export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;
export const MONTH = 30 * DAY;
export const YEAR = 12 * MONTH;

export function getYear(date: string | Date) {
  return new Date(date).getFullYear();
}

export function getRelativeTime(date: string | Date) {
  const now = new Date();
  const target = new Date(date);
  const diff = now.getTime() - target.getTime();

  const intervals = [
    { label: '년', divisor: YEAR },
    { label: '개월', divisor: MONTH },
    { label: '일', divisor: DAY },
    { label: '시간', divisor: HOUR },
    { label: '분', divisor: MINUTE },
    { label: '초', divisor: SECOND },
  ];

  for (const interval of intervals) {
    const value = Math.floor(diff / interval.divisor);
    if (value > 0) {
      return `${value}${interval.label} 전`;
    }
  }

  return '방금 전';
}
