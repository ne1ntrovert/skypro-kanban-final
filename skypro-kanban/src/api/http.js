const NETWORK_ERROR = 'Не удалось соединиться с сервером. Проверьте интернет-соединение.';
const SERVER_ERROR = 'Сервер временно недоступен. Попробуйте позже.';

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function parseBody(response) {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/**
 * Обёртка над fetch. Любая ошибка (сеть, 4xx, 5xx) превращается в ApiError
 * с понятным для пользователя message.
 * Content-Type намеренно не выставляется: сервер учебного API
 * отклоняет запросы с явным application/json.
 */
export async function request(url, { method = 'GET', body, token } = {}) {
  const headers = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  let response;
  try {
    response = await fetch(url, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError(NETWORK_ERROR, 0);
  }

  const data = await parseBody(response);

  if (!response.ok) {
    if (response.status >= 500) {
      throw new ApiError(SERVER_ERROR, response.status);
    }
    const message = data?.message || data?.error || `Ошибка запроса (${response.status})`;
    throw new ApiError(message, response.status);
  }

  return data;
}
