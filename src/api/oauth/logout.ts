import { fetchData } from '@/api/fetcher';

export interface LogoutResponse {
  error: string | null;
}

export async function logout() {
  return await fetchData<LogoutResponse>({
    endpoint: 'oauth/logout',
  });
}
