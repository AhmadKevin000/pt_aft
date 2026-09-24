import { MessageCircle, ShieldCheck, Zap, Headphones } from "lucide-react";

const TRUST_BADGES = [
  { label: "Konsultasi Gratis", Icon: MessageCircle },
  { label: "Garansi Seumur Hidup", Icon: ShieldCheck },
  { label: "Instalasi 7 Hari", Icon: Zap },
  { label: "Support 24/7", Icon: Headphones },
];

export default function FinalCTASection() {
  return (
    <section className="bg-[#101012] py-20 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl border border-white/10 bg-neutral-900/50 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="absolute -top-32 left-[10%] w-[420px] h-[300px] bg-cyan-500/20 blur-[100px] rounded-full" />
            <div className="absolute -bottom-24 -right-16 w-[380px] h-[260px] bg-cyan-400/15 blur-[90px] rounded-full" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-white/5 blur-[80px] rounded-full" />
          </div>

          <div className="relative px-6 py-16 md:py-20 text-center">
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-5">
              [ Mulai Sekarang ]
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-neutral-100 mb-6 max-w-2xl mx-auto leading-[1.1]">
              Siap upgrade cold storage Anda?
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed mb-10">
              Hubungi kami hari ini dan dapatkan konsultasi gratis bersama tim
              engineer berpengalaman. Tanpa komitmen, tanpa biaya tersembunyi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contact"
                id="cta-final-estimate"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 active:scale-[0.98] text-neutral-950 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 w-full sm:w-auto justify-center"
              >
                Minta Penawaran Gratis
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#produk"
                id="cta-final-katalog"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 hover:bg-white/5 text-neutral-200 font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-200 w-full sm:w-auto justify-center"
              >
                Unduh Katalog
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12 pt-10 border-t border-white/5">
              {TRUST_BADGES.map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-cyan-400" strokeWidth={1.75} />
                  <span className="text-sm text-neutral-300">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
