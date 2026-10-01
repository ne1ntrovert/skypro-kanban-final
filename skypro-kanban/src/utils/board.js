export const STATUSES = [
  'Без статуса',
  'Нужно сделать',
  'В работе',
  'Тестирование',
  'Готово',
];

export const TOPICS = [
  { name: 'Web Design', color: 'orange' },
  { name: 'Research', color: 'green' },
  { name: 'Copywriting', color: 'purple' },
];

export function topicColor(topic) {
  return TOPICS.find((t) => t.name === topic)?.color || 'gray';
}

export function todayIso() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

/** Приводит дату с сервера ("2026-10-14T00:00:00.000Z") к виду "2026-10-14". */
export function toDateOnly(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(value || '');
  return match ? `${match[1]}-${match[2]}-${match[3]}` : '';
}

/** "2026-10-14" или ISO-строка с сервера -> "14.10.26" */
export function formatDisplayDate(value) {
  const dateOnly = toDateOnly(value);
  if (!dateOnly) return '';
  const [y, m, d] = dateOnly.split('-');
  return `${d}.${m}.${y.slice(2)}`;
}
