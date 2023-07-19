export function convertDateToString(date: string | Date) {
  return new Date(date).toLocaleDateString('ko', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
}
