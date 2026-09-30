import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://obelisklabs.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/portfolio", "/ca/portfolio"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
