import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If there's no session and the user is trying to access protected routes
  // if (!session) {
  //   const isProtectedRoute = 
  //     req.nextUrl.pathname.startsWith('/account');

  //   if (isProtectedRoute) {
  //     return NextResponse.redirect(new URL('/login', req.url));
  //   }
  // }

  // If user is logged in and trying to access auth pages
  if (session) {
    const isAuthRoute = 
      req.nextUrl.pathname.startsWith('/login') ||
      req.nextUrl.pathname.startsWith('/login/signup');

    if (isAuthRoute) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};