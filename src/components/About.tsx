"use client";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="sobre-mi" className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Section label */}
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#4edea3] font-[var(--font-mono)] mb-4">
            Sobre mí
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left */}
            <div>
              <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.01em] text-[#e5e2e1] mb-6">
                Construyo el back-end que
                <span className="text-[#adc6ff]"> nadie ve</span>, pero todos
                sienten.
              </h2>

              <div className="space-y-4 text-[#8b90a0] text-base leading-7">
                <p>
                  Soy un ingeniero de software con base en España, especializado
                  en arquitecturas backend y desarrollo Android nativo. Me
                  apasiona el diseño de sistemas que escalan sin romperse — desde
                  el modelo de datos hasta el último endpoint.
                </p>
                <p>
                  Mi experiencia abarca el ciclo completo: APIs que consumen
                  millones de peticiones diarias, pipelines de eventos con Kafka,
                  y aplicaciones Android que funcionan tan bien offline como
                  conectadas.
                </p>
                <p>
                  Fuera del trabajo, contribuyo a proyectos open-source y
                  escribo sobre arquitectura de software y buenas prácticas en
                  Android.
                </p>
              </div>
            </div>

            {/* Right — highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Especialidad principal",
                  value: "Backend & Android",
                  accent: "blue",
                },
                {
                  label: "Ubicación",
                  value: "España · Remoto",
                  accent: "green",
                },
                {
                  label: "Lenguaje favorito",
                  value: "Python",
                  accent: "blue",
                },
                {
                  label: "Disponibilidad",
                  value: "Inmediata",
                  accent: "green",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass glass-hover rounded-xl p-5"
                >
                  <p className="text-[10px] text-[#8b90a0] font-[var(--font-mono)] tracking-[0.1em] uppercase mb-2">
                    {item.label}
                  </p>
                  <p
                    className={`font-semibold text-base ${
                      item.accent === "blue"
                        ? "text-[#adc6ff]"
                        : "text-[#4edea3]"
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
