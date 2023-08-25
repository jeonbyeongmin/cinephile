import { mergeObject } from '@/utils/object';

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_MOCKING = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';
const BASE_URL = IS_DEV && IS_MOCKING ? process.env.NEXT_PUBLIC_MOCKING_API_URL : process.env.NEXT_PUBLIC_API_URL;

/**
 * fetch를 위한 래퍼 함수
 * @param endpoint
 * @param config
 * @returns {Promise<T>}
 */
export async function fetchData<T>(endpoint: string, init?: RequestInit): Promise<T> {
  const { body, headers, ...customConfig } = init || {};
  const defaultHeaders: RequestInit['headers'] = {};

  if (body) {
    defaultHeaders['Content-Type'] = 'application/json';
  }

  const mergedHeaders = mergeObject(defaultHeaders, headers);
  const config: RequestInit = {
    headers: mergedHeaders,
    body: body ? JSON.stringify(body) : undefined,
    ...customConfig,
  };

  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  try {
    const response = await fetch(`/${endpoint}`, config);
    const data: T = await response.json();

    return response.ok ? data : Promise.reject(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
