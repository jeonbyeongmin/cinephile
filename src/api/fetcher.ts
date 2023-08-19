/**
 * 커스텀 패치를 위한 래퍼 함수
 * @param endpoint
 * @param config
 * @returns {Promise<T>}
 */
export async function fetcher<T>(endpoint: string, { body, ...customConfig }: RequestInit): Promise<T> {
  const headers: RequestInit['headers'] = {};

  if (body) {
    headers['Content-Type'] = 'application/json';
  }

  const config: RequestInit = {
    headers,
    body: body ? JSON.stringify(body) : undefined,
    ...customConfig,
  };

  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  try {
    const response = await fetch(`/api/${endpoint}`, config);
    const data = await response.json();

    return response.ok ? data : Promise.reject(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
