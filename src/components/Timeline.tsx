"use client";
import { useInView } from "@/hooks/useInView";
import { experience } from "@/data/experience";

export default function Timeline() {
  const { ref, inView } = useInView();

  return (
    <section id="experiencia" className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#4edea3] font-[var(--font-mono)] mb-4">
            Experiencia
          </p>
          <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.01em] text-[#e5e2e1]">
            Technical Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 lg:left-6 top-0 bottom-0 w-px bg-[#414755]/50" />

          <div className="flex flex-col gap-0">
            {experience.map((job, i) => (
              <TimelineItem key={job.id} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  job,
  index,
}: {
  job: (typeof experience)[number];
  index: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`relative pl-8 lg:pl-20 pb-12 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Node */}
      <div
        className={`absolute left-[-5px] lg:left-[19px] top-1 w-[11px] h-[11px] rounded-full border-2 transition-all duration-500 ${
          inView
            ? job.current
              ? "border-[#4edea3] bg-[#4edea3] shadow-[0_0_12px_rgba(78,222,163,0.5)]"
              : "border-[#adc6ff] bg-[#131313]"
            : "border-[#414755] bg-[#131313]"
        }`}
      />

      <div className="glass glass-hover rounded-2xl p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div>
            <h3 className="text-xl font-semibold text-[#e5e2e1]">{job.company}</h3>
            <p className="text-[#adc6ff] font-medium text-sm mt-0.5">{job.role}</p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
            <span className="text-xs font-medium text-[#8b90a0] font-[var(--font-mono)] bg-[#1c1b1b] px-3 py-1 rounded-full border border-[#414755]/50">
              {job.period}
            </span>
            <span className="text-xs text-[#8b90a0] font-[var(--font-mono)]">
              {job.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <ul className="space-y-2.5 mb-5">
          {job.description.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-[#8b90a0] leading-6">
              <span className="text-[#4edea3] mt-1 flex-shrink-0">▸</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
