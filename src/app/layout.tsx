import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Carlos Gálvez Chaves — BackEnd & Android Developer",
  description:
    "Senior Backend & Android Developer con 6+ años de experiencia construyendo sistemas escalables con Kotlin, Spring Boot y Jetpack Compose.",
  keywords: ["Backend Developer", "Android Developer", "Kotlin", "Spring Boot", "Jetpack Compose"],
  authors: [{ name: "Carlos Gálvez Chaves" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="antialiased font-[var(--font-sans)]">{children}</body>
    </html>
  );
}
