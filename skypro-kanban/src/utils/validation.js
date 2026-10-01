export function isBlank(value) {
  return !value || !value.trim();
}

export function validateTask({ title, description }) {
  if (isBlank(title)) return 'Введите название задачи';
  if (isBlank(description)) return 'Введите описание задачи';
  return '';
}
