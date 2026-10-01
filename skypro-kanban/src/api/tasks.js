import { ENDPOINTS } from './config.js';
import { toDateOnly } from '../utils/board.js';
import { request } from './http.js';

function normalizeTask(raw) {
  if (!raw) return null;
  return {
    id: raw._id || raw.id,
    title: raw.title || '',
    description: raw.description || '',
    topic: raw.topic || raw.category || 'Web Design',
    status: raw.status || 'Без статуса',
    date: toDateOnly(raw.date),
  };
}

function toBody({ title, description, topic, status, date }) {
  return { title, description, topic, status, date };
}

function extractList(data) {
  const list = Array.isArray(data) ? data : data?.tasks;
  return Array.isArray(list) ? list.map(normalizeTask).filter(Boolean) : null;
}

export async function getTasks(token) {
  const data = await request(ENDPOINTS.tasks, { token });
  return extractList(data) || [];
}

/**
 * Сервер на создание, изменение и удаление возвращает актуальный список задач.
 * Если пришёл он — возвращаем его, иначе null, и список нужно запросить заново.
 */
export async function createTask(taskData, token) {
  const data = await request(ENDPOINTS.tasks, { method: 'POST', token, body: toBody(taskData) });
  return extractList(data);
}

export async function updateTask(id, taskData, token) {
  const data = await request(ENDPOINTS.task(id), { method: 'PUT', token, body: toBody(taskData) });
  return extractList(data);
}

export async function deleteTask(id, token) {
  const data = await request(ENDPOINTS.task(id), { method: 'DELETE', token });
  return extractList(data);
}
