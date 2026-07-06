"use client";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contacto" className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        <div
          ref={ref}
          className={`glass rounded-3xl p-10 lg:p-16 text-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Label */}
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#4edea3] font-[var(--font-mono)] mb-5">
            Contacto
          </p>

          {/* Heading */}
          <h2 className="text-[32px] lg:text-[40px] font-semibold leading-tight tracking-[-0.01em] text-[#e5e2e1] mb-4">
            ¿Trabajamos juntos?
          </h2>

          {/* Description */}
          <p className="text-[#8b90a0] text-base leading-7 max-w-lg mx-auto mb-10">
            Estoy buscando nuevos retos. Si tienes un proyecto interesante o
            una posición que pueda encajar, me encantaría escucharte.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:carlos.galvez@bekodo.com"
              className="inline-flex items-center justify-center gap-2 bg-[#adc6ff] text-[#002e69] font-semibold px-7 py-3 rounded-xl hover:bg-[#c5d6ff] transition-colors duration-200 text-sm"
            >
              Enviar email
            </a>
            <a
              href="https://linkedin.com/in/carlosgalvezchaves"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#414755] text-[#c1c6d7] font-medium px-7 py-3 rounded-xl hover:border-[#adc6ff]/40 hover:text-[#e5e2e1] transition-all duration-200 text-sm"
            >
              LinkedIn →
            </a>
          </div>

          {/* Quick info */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-white/5">
            {[
              { label: "Email", value: "carlos.galvez@bekodo.com" },
              { label: "Ubicación", value: "España · Remoto" },
              { label: "Disponibilidad", value: "Inmediata" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-[10px] text-[#8b90a0] font-[var(--font-mono)] tracking-[0.1em] uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-[#c1c6d7] font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
