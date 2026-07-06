import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Availability badge */}
            <span className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/20 text-[#4edea3] text-xs font-medium tracking-widest uppercase font-[var(--font-mono)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse" />
              Disponible para trabajar
            </span>

            {/* Heading */}
            <h1 className="text-[42px] sm:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.02em] text-[#e5e2e1]">
              Hola, soy{" "}
              <br className="hidden sm:block" />
              <span className="text-[#adc6ff]">Carlos Gálvez</span>
              <br />
              Chaves
            </h1>

            {/* Role */}
            <p className="text-[#c1c6d7] text-lg font-medium -mt-1">
              BackEnd Developer{" "}
              <span className="text-[#414755] mx-1">|</span>
              Android Developer
            </p>

            {/* Bio */}
            <p className="text-[#8b90a0] text-base leading-7 max-w-md">
              Ingeniero de software con más de 10 años construyendo sistemas
              backend escalables y apps Android de alto rendimiento.
              Especializado en Kotlin, Python y arquitecturas orientadas a
              eventos.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mt-1">
              <a
                href="mailto:carlos.galvez@bekodo.com"
                className="inline-flex items-center gap-2 bg-[#adc6ff] text-[#002e69] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#c5d6ff] transition-colors duration-200 text-sm"
              >
                Contactar
              </a>
              <a
                href="https://linkedin.com/in/carlosgalvezchaves"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#414755] text-[#c1c6d7] font-medium px-5 py-2.5 rounded-lg hover:border-[#8b90a0] hover:text-[#e5e2e1] transition-all duration-200 text-sm"
              >
                Ver LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-5 mt-1 border-t border-[#1c1b1b]">
              <div>
                <p className="text-2xl font-bold text-[#adc6ff]">10+</p>
                <p className="text-xs text-[#8b90a0] mt-0.5 font-[var(--font-mono)] tracking-wide">
                  años exp.
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#4edea3]">15+</p>
                <p className="text-xs text-[#8b90a0] mt-0.5 font-[var(--font-mono)] tracking-wide">
                  proyectos
                </p>
              </div>
            </div>
          </div>

          {/* Right column — photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Ambient glow */}
              <div
                className="absolute inset-[-20%] rounded-[50%] opacity-20 blur-3xl"
                style={{ background: "radial-gradient(ellipse, #adc6ff 0%, transparent 70%)" }}
              />

              {/* Photo frame */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10 bg-[#201f1f] shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Carlos Gálvez Chaves"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#131313]/60 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-xl">⚡</span>
                <div>
                  <p className="text-[10px] text-[#8b90a0] font-[var(--font-mono)] tracking-wider uppercase">
                    Senior Engineer
                  </p>
                  <p className="text-sm font-semibold text-[#e5e2e1]">
                    Backend - Frontend - Mobile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
