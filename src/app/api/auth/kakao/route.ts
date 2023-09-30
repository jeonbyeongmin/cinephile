import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get('access_token');
  const refreshToken = request.cookies.get('refresh_token');
  const cookieStore = cookies();

  if (accessToken && refreshToken) {
    cookieStore.set(accessToken);
    cookieStore.set(refreshToken);
  }

  return redirect('/');
}
