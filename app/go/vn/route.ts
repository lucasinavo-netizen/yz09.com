import { NextResponse } from 'next/server';

// Vietnam affiliate route. The partner URL never appears in public HTML, and
// /go/ is disallowed in robots.txt. Implemented as a route handler because
// next.config redirects are not being picked up on this deployment.
const TARGET = 'https://www.v123888.com/agent/AUKMEH';

export const dynamic = 'force-dynamic';

export function GET() {
  return NextResponse.redirect(TARGET, {
    status: 302,
    headers: {
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}
