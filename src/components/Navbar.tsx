export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
      <div className="max-w-4xl mx-auto border border-white/10 rounded-full px-5 sm:px-6 py-3 bg-[#101012]/60 backdrop-blur-xl shadow-lg shadow-black/20">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
              </svg>
            </div>
            <span className="font-semibold tracking-tight text-white text-base">
              PT AFT
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-neutral-400">
            {[
              { href: "#produk", label: "Produk" },
              { href: "#benefits", label: "Keunggulan" },
              { href: "#how-it-works", label: "Cara Kerja" },
              { href: "#testimonials", label: "Testimoni" },
              { href: "#faq", label: "FAQ" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              id="cta-navbar"
              className="inline-flex items-center gap-2 text-sm font-medium bg-cyan-500 hover:bg-cyan-400 text-neutral-950 px-4 py-2 rounded-full transition-colors duration-300"
            >
              Minta Penawaran
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
