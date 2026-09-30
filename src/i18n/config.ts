export const locales = ["es", "ca"] as const;
export type Locale = (typeof locales)[number];

// El idioma por defecto se sirve en "/" (sin prefijo); el resto en "/<locale>"
export const defaultLocale: Locale = "es";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const localePath = (locale: Locale, path = "/") => {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
};

export const ogLocale: Record<Locale, string> = {
  es: "es_ES",
  ca: "ca_ES",
};
