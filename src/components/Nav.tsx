"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 backdrop-blur-xl bg-[#131313]/75"
          : ""
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 lg:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <span className="w-7 h-7 bg-[#adc6ff] rounded flex items-center justify-center text-[#002e69] font-bold text-[10px] tracking-tight">
            CGC
          </span>
          <span className="text-[#e5e2e1] font-semibold text-sm hidden sm:block">
            Carlos Gálvez
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[#8b90a0] hover:text-[#e5e2e1] text-sm transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:carlos.galvez@bekodo.com"
          className="hidden lg:inline-flex items-center gap-2 bg-[#adc6ff] text-[#002e69] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#c5d6ff] transition-colors duration-200"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 text-[#c1c6d7]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px bg-current transition-all duration-200 ${open ? "rotate-45 translate-y-[5px] w-5" : "w-5"}`}
          />
          <span
            className={`block h-px bg-current transition-all duration-200 ${open ? "opacity-0 w-5" : "w-4"}`}
          />
          <span
            className={`block h-px bg-current transition-all duration-200 ${open ? "-rotate-45 -translate-y-[5px] w-5" : "w-5"}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-white/5" : "max-h-0"
        } bg-[#1c1b1b]`}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#c1c6d7] hover:text-[#e5e2e1] text-sm py-1 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:carlos.galvez@bekodo.com"
            className="mt-2 bg-[#adc6ff] text-[#002e69] text-sm font-semibold px-4 py-2.5 rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
