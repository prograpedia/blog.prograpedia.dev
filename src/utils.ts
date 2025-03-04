export function formatDate(date: Date) {
  return date.toLocaleDateString('es-HN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
