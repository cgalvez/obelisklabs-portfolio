import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

const matchesPrefix = (pathname: string, prefix: string) =>
  pathname === prefix || pathname.startsWith(`${prefix}/`);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // El portfolio no es público en producción
  if (
    process.env.NODE_ENV === "production" &&
    ["/portfolio", ...locales.map((l) => `/${l}/portfolio`)].some((p) => matchesPrefix(pathname, p))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // El idioma por defecto vive sin prefijo: /es/... → /...
  if (matchesPrefix(pathname, `/${defaultLocale}`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  // Rutas con prefijo de otro idioma (/ca/...) se sirven tal cual
  if (locales.some((l) => matchesPrefix(pathname, `/${l}`))) {
    return NextResponse.next();
  }

  // Sin prefijo → idioma por defecto, sin cambiar la URL
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Excluye assets internos, archivos con extensión y rutas de metadatos
  matcher: ["/((?!_next|api|icon|apple-icon|opengraph-image|.*\\..*).*)"],
};
