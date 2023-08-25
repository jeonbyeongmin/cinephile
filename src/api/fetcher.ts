import { mergeObject } from '@/utils/object';

interface CustomRequest extends RequestInit {
  data?: any;
}

/**
 * fetch를 위한 래퍼 함수
 * @param endpoint
 * @param config
 * @returns {Promise<T>}
 */
export async function fetchData<T>(endpoint: string, init?: CustomRequest): Promise<T> {
  const { data, headers, ...customConfig } = init || {};
  const defaultHeaders: RequestInit['headers'] = {};

  if (data) {
    defaultHeaders['Content-Type'] = 'application/json';
  }

  const mergedHeaders = mergeObject(defaultHeaders, headers);
  const config: RequestInit = {
    headers: mergedHeaders,
    body: data ? JSON.stringify(data) : undefined,
    ...customConfig,
  };

  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  try {
    const response = await fetch(`/api/${endpoint}`, config);
    const data: T = await response.json();

    return response.ok ? data : Promise.reject(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
