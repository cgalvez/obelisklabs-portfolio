import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { hasLocale, localePath, locales, ogLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://obelisklabs.dev";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta.title,
      template: "%s | ObeliskLabs",
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Carlos Gálvez Chaves" }],
    creator: "Carlos Gálvez Chaves",
    alternates: {
      canonical: localePath(lang),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localePath(l)])),
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocale[l]),
      url: localePath(lang),
      siteName: "ObeliskLabs",
      title: meta.title,
      description: meta.description,
      // app/opengraph-image.tsx queda fuera de [lang], así que se enlaza a mano
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.twitterDescription,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const UMAMI_ID = process.env.NEXT_PUBLIC_UMAMI_ID;
const UMAMI_URL = SITE_URL.replace("://", "://analytics.");

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${inter.variable} ${geistMono.variable}`}>
      <body className="antialiased font-[var(--font-sans)]">
        {children}
        {UMAMI_ID && (
          <Script
            src={`${UMAMI_URL}/script.js`}
            data-website-id={UMAMI_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
