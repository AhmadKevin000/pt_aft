export default function Footer() {
  return (
    <footer id="contact" className="bg-[#101012] border-t border-white/10 py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
                </svg>
              </div>
              <span className="font-semibold tracking-tight text-white text-base">
                PT AFT
              </span>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Spesialis cold storage &amp; mesin pendingin industri. Melayani
              seluruh Indonesia sejak 2010 dengan standar kualitas internasional.
            </p>
            <div className="flex gap-2 mt-2">
              {["#produk", "#benefits", "#how-it-works", "#faq"].map((href) => (
                <a
                  key={href}
                  href={href}
                  className="w-8 h-8 bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/30 rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <span className="w-1.5 h-1.5 bg-neutral-600 hover:bg-cyan-400 rounded-full transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-white font-medium text-sm mb-1">Navigasi</p>
            <a href="#produk" className="text-neutral-500 hover:text-cyan-400 text-sm transition-colors">Katalog Produk</a>
            <a href="#benefits" className="text-neutral-500 hover:text-cyan-400 text-sm transition-colors">Keunggulan</a>
            <a href="#how-it-works" className="text-neutral-500 hover:text-cyan-400 text-sm transition-colors">Cara Kerja</a>
            <a href="#testimonials" className="text-neutral-500 hover:text-cyan-400 text-sm transition-colors">Testimoni</a>
            <a href="#faq" className="text-neutral-500 hover:text-cyan-400 text-sm transition-colors">FAQ</a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-white font-medium text-sm mb-1">Hubungi Kami</p>
            <div className="flex items-center gap-3 text-neutral-500 text-sm">
              <svg className="w-4 h-4 text-cyan-500/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +62 812-3456-7890
            </div>
            <div className="flex items-center gap-3 text-neutral-500 text-sm">
              <svg className="w-4 h-4 text-cyan-500/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@ptaft.co.id
            </div>
            <div className="flex items-start gap-3 text-neutral-500 text-sm">
              <svg className="w-4 h-4 text-cyan-500/70 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Jakarta, Indonesia
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} PT AFT. Hak cipta dilindungi undang-undang.
          </p>
          <p className="font-mono text-neutral-700 text-xs">
            Cold Chain Solutions — Sejak 2010
          </p>
        </div>
      </div>
    </footer>
  );
}
