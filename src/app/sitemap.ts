import type { MetadataRoute } from "next";
import { locales, localePath } from "@/i18n/config";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://obelisklabs.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${BASE_URL}${localePath(l)}`])
  );

  return locales.map((l) => ({
    url: `${BASE_URL}${localePath(l)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
