import { mergeObject } from '@/utils/object';

interface CustomRequest extends RequestInit {
  data?: any;
}

interface FetchDataParams {
  endpoint: string;
  option?: CustomRequest;
  isServer?: boolean;
}

/**
 * fetch를 위한 래퍼 함수
 * @param endpoint
 * @param config
 * @param isServer
 * @returns {Promise<T>}
 */
export async function fetchData<T>({ endpoint, option, isServer }: FetchDataParams): Promise<T> {
  const { data, headers, ...customConfig } = option || {};
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

  // TEST: 1초 지연
  // await wait(1000);

  const path = isServer ? `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}` : `/api/${endpoint}`;

  try {
    const response = await fetch(path, config);
    const data: T = await response.json();

    return response.ok ? data : Promise.reject(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
