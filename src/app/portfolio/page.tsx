import type { Metadata } from "next";
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

export default function PortfolioPage() {
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
