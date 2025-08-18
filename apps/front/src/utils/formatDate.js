export function formatDateToSpanish(dateString) {
  const date = new Date(dateString);

  const options = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  };

  const formatter = new Intl.DateTimeFormat('es-ES', options);

  // Formatear la fecha a español
  return formatter.format(date);
}