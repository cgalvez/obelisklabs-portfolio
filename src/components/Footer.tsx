export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 bg-[#adc6ff] rounded flex items-center justify-center text-[#002e69] font-bold text-[9px]">
            CGC
          </span>
          <span className="text-[#8b90a0] text-sm">Carlos Gálvez Chaves</span>
        </div>
        <p className="text-[#414755] text-xs font-[var(--font-mono)]">
          © {year} · Hecho con Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
