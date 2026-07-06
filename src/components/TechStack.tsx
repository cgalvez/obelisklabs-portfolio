"use client";
import { useInView } from "@/hooks/useInView";
import { skillGroups } from "@/data/skills";

export default function TechStack() {
  const { ref, inView } = useInView();

  return (
    <section id="stack" className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#4edea3] font-[var(--font-mono)] mb-4">
            Stack
          </p>
          <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.01em] text-[#e5e2e1]">
            Technical Stack
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.id} group={group} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  group,
  delay,
}: {
  group: (typeof skillGroups)[number];
  delay: number;
}) {
  const { ref, inView } = useInView();

  const tagClass =
    group.accent === "blue"
      ? "tag"
      : group.accent === "green"
      ? "tag tag-green"
      : "tag tag-gray";

  return (
    <div
      ref={ref}
      className={`glass glass-hover rounded-2xl p-6 lg:p-8 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3
        className={`text-base font-semibold mb-4 ${
          group.accent === "blue"
            ? "text-[#adc6ff]"
            : group.accent === "green"
            ? "text-[#4edea3]"
            : "text-[#c1c6d7]"
        }`}
      >
        {group.category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className={tagClass}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
