import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultLocale } from "@/i18n/config";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio — Carlos Gálvez Chaves",
  description: "BackEnd Developer & Android Developer. Más de 6 años construyendo sistemas escalables y apps Android.",
};

export default async function PortfolioPage({ params }: PageProps<"/[lang]/portfolio">) {
  // El portfolio solo está disponible en castellano
  const { lang } = await params;
  if (lang !== defaultLocale) notFound();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
