import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VALID_PATH_PREFIXES = new Set([
  "",
  "404",
  "about-us",
  "accuracy-reports",
  "blog",
  "contact-us",
  "how-it-works",
  "player-analysis",
  "predictions",
  "privacy-policy",
  "terms-and-conditions",
  "venue-reports",
  "robots.txt",
]);

function isKnownPath(pathname: string): boolean {
  const segment = pathname.replace(/^\/|\/$/g, "").split("/")[0] ?? "";
  if (VALID_PATH_PREFIXES.has(segment)) return true;
  return false;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (isKnownPath(pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/404";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, etc.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
