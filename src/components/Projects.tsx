"use client";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/data/projects";

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
              Mostrando {projects.length} trabajos seleccionados
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
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
  project: (typeof projects)[number];
  delay: number;
}) {
  const { ref, inView } = useInView();
  const url = project.links.demo || project.links.github;
  const Wrapper = url ? "a" : "div";
  const wrapperProps = url
    ? { href: url, target: "_blank", rel: "noopener noreferrer" }
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
      <div className="h-44 bg-gradient-to-br from-[#2a2a2a] to-[#1c1b1b] relative overflow-hidden flex-shrink-0">
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
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <p className="text-[10px] text-[#8b90a0] font-[var(--font-mono)] tracking-[0.1em] uppercase mb-1">
            {project.tagline}
          </p>
          <h3 className="text-lg font-semibold text-[#e5e2e1]">{project.title}</h3>
        </div>

        <p className="text-[#8b90a0] text-sm leading-6 flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Link indicator */}
        {url && (
          <div className="flex items-center gap-1.5 pt-1 border-t border-white/5">
            <span className="text-xs text-[#adc6ff] font-medium">
              {project.links.demo ? "Ver proyecto" : "Ver código"} →
            </span>
          </div>
        )}
      </div>
    </Wrapper>
  );
}
