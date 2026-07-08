import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ObeliskLabs — Laboratorio personal de software",
    template: "%s | ObeliskLabs",
  },
  description:
    "Un espacio donde las ideas se convierten en realidad. Código artesanal, arquitecturas sólidas y proyectos construidos para perdurar.",
  keywords: [
    "ObeliskLabs",
    "software personal",
    "proyectos indie",
    "Backend Developer",
    "Android Developer",
    "Carlos Gálvez",
  ],
  authors: [{ name: "Carlos Gálvez Chaves" }],
  creator: "Carlos Gálvez Chaves",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "ObeliskLabs",
    title: "ObeliskLabs — Laboratorio personal de software",
    description:
      "Un espacio donde las ideas se convierten en realidad. Código artesanal, arquitecturas sólidas y proyectos construidos para perdurar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ObeliskLabs — Laboratorio personal de software",
    description:
      "Un espacio donde las ideas se convierten en realidad.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="antialiased font-[var(--font-sans)]">
        {children}
      </body>
    </html>
  );
}
