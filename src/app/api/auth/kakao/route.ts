import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  console.log('🚀 ~ file: route.ts:6 ~ GET ~ request:', request);
  const accessToken = request.cookies.get('access_token');
  const refreshToken = request.cookies.get('refresh_token');
  const all = request.cookies.getAll();

  const cookieStore = cookies();

  if (accessToken && refreshToken) {
    cookieStore.set(accessToken);
    cookieStore.set(refreshToken);
  }

  return redirect('/');
}
