"use client";
import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import { obeliskProjects } from "@/data/obelisk-projects";
import type { ObeliskProject } from "@/data/obelisk-projects";

/* ─── Logo ─────────────────────────────────────────────────────────── */

function ObeliskMark({ size = 64, className = "" }: { size?: number; className?: string }) {
  const h = Math.round(size * 1.75);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 48 84"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="ol-g" x1="24" y1="0" x2="24" y2="84" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#adc6ff" />
          <stop offset="55%" stopColor="#7eb4ff" />
          <stop offset="100%" stopColor="#4edea3" />
        </linearGradient>
      </defs>
      {/* Pyramidion */}
      <polygon points="24,2 15,20 33,20" fill="url(#ol-g)" />
      {/* Shaft — slightly tapered */}
      <polygon points="15,21 11,74 37,74 33,21" fill="url(#ol-g)" opacity="0.9" />
      {/* Decorative engraving lines */}
      <line x1="13.5" y1="35" x2="34.5" y2="35" stroke="white" strokeOpacity="0.22" strokeWidth="0.7" />
      <line x1="12.5" y1="53" x2="35.5" y2="53" stroke="white" strokeOpacity="0.22" strokeWidth="0.7" />
      {/* Base — two tiers */}
      <rect x="9" y="75" width="30" height="4" rx="0.5" fill="url(#ol-g)" opacity="0.85" />
      <rect x="6" y="79.5" width="36" height="3" rx="0.5" fill="url(#ol-g)" opacity="0.5" />
    </svg>
  );
}

/* ─── Nav ───────────────────────────────────────────────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <ObeliskMark size={20} />
          <span className="font-semibold text-[#e5e2e1] tracking-tight">ObeliskLabs</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-[#8b90a0]">
          <a href="#proyectos" className="hover:text-[#e5e2e1] transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-[#e5e2e1] transition-colors">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0px,#fff 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,#fff 0px,#fff 1px,transparent 1px,transparent 48px)",
        }}
      />
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #adc6ff 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full opacity-8 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #4edea3 0%, transparent 70%)" }}
      />

      <div className="relative text-center px-6 flex flex-col items-center gap-7 max-w-2xl mx-auto">
        {/* Logo mark + glow */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 blur-2xl opacity-30"
            style={{ background: "radial-gradient(ellipse, #adc6ff 0%, #4edea3 100%)" }}
          />
          <ObeliskMark size={96} className="relative drop-shadow-2xl" />
        </div>

        {/* Wordmark */}
        <div className="flex flex-col items-center gap-3">
          <h1
            className="text-[56px] sm:text-[72px] font-bold leading-none tracking-[-0.03em]"
            style={{
              background: "linear-gradient(135deg, #adc6ff 0%, #e5e2e1 50%, #4edea3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ObeliskLabs
          </h1>
          <p className="text-[#8b90a0] font-[var(--font-mono)] text-xs tracking-[0.2em] uppercase">
            Laboratorio personal de software
          </p>
        </div>

        {/* Description */}
        <p className="text-[#8b90a0] text-base sm:text-lg leading-7 max-w-lg">
          Un espacio donde las ideas se convierten en realidad.
          Código artesanal, arquitecturas sólidas y proyectos construidos
          para <span className="text-[#c1c6d7]">perdurar</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 bg-[#adc6ff] text-[#002e69] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#c5d6ff] transition-colors text-sm"
          >
            Explorar proyectos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border border-[#414755] text-[#c1c6d7] font-medium px-5 py-2.5 rounded-lg hover:border-[#8b90a0] hover:text-[#e5e2e1] transition-all text-sm"
          >
            Contacto
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[#8b90a0]" />
      </div>
    </section>
  );
}

/* ─── Pillars ───────────────────────────────────────────────────────── */

const PILLARS = [
  {
    icon: "⚙️",
    title: "Ingeniería sólida",
    body: "Cada proyecto diseñado con intención. Arquitecturas que escalan, código limpio y decisiones deliberadas — sin atajos.",
    accent: "blue" as const,
  },
  {
    icon: "🚀",
    title: "Productos reales",
    body: "No prototipos de papel. Software que llega a usuarios, resuelve problemas concretos y evoluciona con el tiempo.",
    accent: "green" as const,
  },
  {
    icon: "🧪",
    title: "I+D constante",
    body: "Un espacio para investigar y aprender. Experimentando siempre con tecnologías emergentes, nuevos frameworks y metodologías.",
    accent: "purple" as const,
  },
];

function Pillars() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 lg:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#4edea3] font-[var(--font-mono)] mb-4 text-center">
            Filosofía
          </p>
          <h2 className="text-[32px] font-semibold text-center text-[#e5e2e1] tracking-[-0.01em] mb-12">
            ¿Qué es ObeliskLabs?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="glass glass-hover rounded-2xl p-7 flex flex-col gap-4"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-2xl">{p.icon}</span>
                <h3
                  className={`font-semibold text-lg ${
                    p.accent === "blue"
                      ? "text-[#adc6ff]"
                      : p.accent === "green"
                      ? "text-[#4edea3]"
                      : "text-[#e5e2e1]"
                  }`}
                >
                  {p.title}
                </h3>
                <p className="text-[#8b90a0] text-sm leading-6">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ──────────────────────────────────────────────────────── */

const STATUS_LABEL: Record<ObeliskProject["status"], string> = {
  live: "Live",
  wip: "En desarrollo",
  soon: "Próximamente",
};
const STATUS_COLOR: Record<ObeliskProject["status"], string> = {
  live: "text-[#4edea3] border-[#4edea3]/30 bg-[#4edea3]/10",
  wip: "text-[#adc6ff] border-[#adc6ff]/30 bg-[#adc6ff]/10",
  soon: "text-[#8b90a0] border-white/10 bg-white/5",
};

function ProjectCard({ project, delay }: { project: ObeliskProject; delay: number }) {
  const { ref, inView } = useInView();
  const url = project.url || project.github;
  const Wrapper = url ? "a" : "div";
  const wrapperProps = url ? { href: url, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...(wrapperProps as object)}
      ref={ref as React.RefObject<HTMLAnchorElement & HTMLDivElement>}
      className={`glass glass-hover rounded-2xl p-6 flex flex-col gap-4 transition-all duration-700 ${
        url ? "cursor-pointer" : ""
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-[#e5e2e1] text-base">{project.name}</h3>
        <span
          className={`shrink-0 text-[10px] font-medium font-[var(--font-mono)] tracking-wider uppercase px-2 py-1 rounded-full border ${
            STATUS_COLOR[project.status]
          }`}
        >
          {STATUS_LABEL[project.status]}
        </span>
      </div>
      <p className="text-[#8b90a0] text-sm leading-6 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      {url && (
        <div className="pt-1 border-t border-white/5">
          <span className="text-xs text-[#adc6ff] font-medium">
            {project.url ? "Ver proyecto" : "Ver código"} →
          </span>
        </div>
      )}
    </Wrapper>
  );
}

function Projects() {
  const { ref, inView } = useInView();
  const empty = obeliskProjects.length === 0;

  return (
    <section id="proyectos" className="py-24 lg:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#4edea3] font-[var(--font-mono)] mb-4">
            Proyectos
          </p>
          <h2 className="text-[32px] font-semibold text-[#e5e2e1] tracking-[-0.01em]">
            Trabajo destacado
          </h2>
        </div>

        {empty ? (
          <div className="glass rounded-2xl py-20 flex flex-col items-center gap-5 text-center px-6">
            <div className="relative">
              <div className="absolute inset-0 blur-xl opacity-20"
                style={{ background: "radial-gradient(ellipse, #adc6ff, transparent)" }}
              />
              <ObeliskMark size={48} className="relative opacity-50" />
            </div>
            <p className="text-[#8b90a0] font-[var(--font-mono)] text-sm tracking-wider uppercase">
              Próximamente
            </p>
            <p className="text-[#8b90a0] text-sm max-w-xs leading-6">
              Los primeros proyectos de ObeliskLabs están en construcción.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {obeliskProjects.map((p, i) => (
              <ProjectCard key={p.id} project={p} delay={i * 100} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Contact ───────────────────────────────────────────────────────── */

function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contacto" className="py-24 lg:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div
          ref={ref}
          className={`glass rounded-3xl px-8 py-16 text-center flex flex-col items-center gap-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ background: "rgba(32,31,31,0.7)" }}
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#4edea3] font-[var(--font-mono)]">
            Contacto
          </p>
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#e5e2e1] tracking-tight max-w-md leading-tight">
            ¿Tienes una idea que
            <span className="text-[#adc6ff]"> merece existir</span>?
          </h2>
          <p className="text-[#8b90a0] text-base max-w-sm leading-7">
            Siempre abierto a colaboraciones, proyectos interesantes
            y conversaciones sobre software.
          </p>
          <a
            href="mailto:info@obelisklabs.dev"
            className="inline-flex items-center gap-2 bg-[#adc6ff] text-[#002e69] font-semibold px-6 py-3 rounded-lg hover:bg-[#c5d6ff] transition-colors"
          >
            Hablemos →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2.5">
        <ObeliskMark size={18} />
        <div>
          <span className="font-semibold text-sm text-[#e5e2e1]">ObeliskLabs</span>
          <span className="text-[#414755] mx-2 text-sm">·</span>
          <span className="text-[#8b90a0] text-sm">by Carlos Gálvez</span>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function ObeliskLabsLanding() {
  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1]">
      <Nav />
      <Hero />
      <Pillars />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
