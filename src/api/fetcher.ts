/**
 * 커스텀 패치를 위한 래퍼 함수
 * @param {string} endpoint
 * @param param1
 * @returns {Promise<T>}
 */
export async function fetcher<T>(endpoint: string, { method = 'GET', body, ...customConfig }: RequestInit): Promise<T> {
  const headers: RequestInit['headers'] = {};

  if (body) {
    headers['Content-Type'] = 'application/json';
  }

  const config: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    ...customConfig,
  };

  // Remove leading slash
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  try {
    const response = await fetch(`/api/${endpoint}`, config);

    const data = await response.json();

    return response.status < 400 ? data : Promise.reject(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
