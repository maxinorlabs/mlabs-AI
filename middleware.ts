import { NextResponse, type NextRequest } from 'next/server';

const USER = process.env.STAGING_BASIC_AUTH_USER;
const PASSWORD = process.env.STAGING_BASIC_AUTH_PASSWORD;

function isAuthorized(header: string | null) {
  if (!header?.startsWith('Basic ')) return false;
  try {
    const decoded = atob(header.slice(6));
    const separator = decoded.indexOf(':');
    return decoded.slice(0, separator) === USER && decoded.slice(separator + 1) === PASSWORD;
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  if (!USER || !PASSWORD) return NextResponse.next();

  if (!isAuthorized(request.headers.get('authorization'))) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Maxinor staging", charset="UTF-8"',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  }

  const response = NextResponse.next();
  response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  return response;
}

export const config = {
  // Image files stay public: the /_next/image optimizer fetches them internally without credentials.
  matcher: ['/((?!_next/static|_next/image|.*\\.(?:webp|avif|png|jpe?g|gif|svg|ico)$).*)'],
};
