export function getDate(date: string | Date) {
  return new Date(date).toLocaleDateString('ko', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
}

export function getYear(date: string | Date) {
  return new Date(date).getFullYear();
}

export function getRelativeTime(date: string | Date) {
  const now = new Date();
  const target = new Date(date);
  const diff = now.getTime() - target.getTime();
  const diffYear = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
  const diffMonth = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  if (diffYear > 0) {
    return `${diffYear}년 전`;
  } else if (diffMonth > 0) {
    return `${diffMonth}개월 전`;
  } else if (diffDays > 0) {
    return `${diffDays}일 전`;
  } else if (diffHours > 0) {
    return `${diffHours}시간 전`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes}분 전`;
  } else if (diffSeconds > 0) {
    return `${diffSeconds}초 전`;
  } else {
    return '방금 전';
  }
}
