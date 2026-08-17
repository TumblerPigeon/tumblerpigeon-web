import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);
const legacyBlogPath = /^\/(?:(?:en|tr)\/)?blog(?:\/|$)/;

export default function middleware(request: NextRequest) {
  if (legacyBlogPath.test(request.nextUrl.pathname)) {
    return new NextResponse(null, {
      status: 410,
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=86400',
      },
    });
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
