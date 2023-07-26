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
