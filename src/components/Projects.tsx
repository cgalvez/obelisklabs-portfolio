"use client";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { obeliskProjects, type ObeliskProject } from "@/data/obelisk-projects";
import { es } from "@/i18n/dictionaries/es";

// El portfolio solo existe en castellano
const lang = "es";
const t = es.projects;

const STATUS_COLOR: Record<ObeliskProject["status"], string> = {
  live: "text-[#4edea3] border-[#4edea3]/30 bg-[#4edea3]/10",
  wip: "text-[#adc6ff] border-[#adc6ff]/30 bg-[#adc6ff]/10",
  soon: "text-[#8b90a0] border-white/10 bg-white/5",
};

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="proyectos" className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#4edea3] font-[var(--font-mono)] mb-4">
            Proyectos
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.01em] text-[#e5e2e1]">
              Proyectos Destacados
            </h2>
            <p className="text-[#8b90a0] text-sm font-[var(--font-mono)]">
              Mostrando {obeliskProjects.length} trabajos seleccionados
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {obeliskProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  delay,
}: {
  project: ObeliskProject;
  delay: number;
}) {
  const { ref, inView } = useInView();
  const url = project.url || project.github;
  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        "data-umami-event": "project-click",
        "data-umami-event-project": project.id,
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      ref={ref as React.RefObject<HTMLAnchorElement & HTMLDivElement>}
      className={`glass glass-hover rounded-2xl overflow-hidden flex flex-col transition-all duration-700 ${
        url ? "cursor-pointer" : ""
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image / placeholder */}
      <div
        className="h-44 bg-gradient-to-br from-[#2a2a2a] to-[#1c1b1b] relative overflow-hidden flex-shrink-0"
        style={project.imageBg ? { background: project.imageBg } : undefined}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${t.logoAlt} ${project.name}`}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
            className="object-contain p-6"
          />
        ) : (
          <>
            <div className="absolute inset-0 flex items-end p-4">
              <span className="text-[#414755] text-xs font-[var(--font-mono)]">
                {project.id}.preview
              </span>
            </div>
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 24px)",
              }}
            />
            {/* Accent glow */}
            <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#adc6ff]/10 blur-xl" />
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#e5e2e1]">{project.name}</h3>
          <span
            className={`shrink-0 text-[10px] font-medium font-[var(--font-mono)] tracking-wider uppercase px-2 py-1 rounded-full border ${
              STATUS_COLOR[project.status]
            }`}
          >
            {t.status[project.status]}
          </span>
        </div>

        <p className="text-[#8b90a0] text-sm leading-6 flex-1">{project.description[lang]}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags[lang].map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Link indicator */}
        {url && (
          <div className="flex items-center gap-1.5 pt-1 border-t border-white/5">
            <span className="text-xs text-[#adc6ff] font-medium">
              {project.url ? t.viewProject : t.viewCode} →
            </span>
          </div>
        )}
      </div>
    </Wrapper>
  );
}
