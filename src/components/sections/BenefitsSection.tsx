const BENEFITS = [
  {
    title: "Garansi Seumur Hidup",
    desc: "Setiap unit yang kami pasang dilindungi garansi seumur hidup. Anda tidak perlu khawatir soal biaya perbaikan jangka panjang — kami tanggung.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    highlighted: false,
  },
  {
    title: "Cepat & Andal",
    desc: "Instalasi profesional selesai dalam 7 hari kerja. Tim teknisi bersertifikat kami siap beroperasi 24/7 untuk memastikan downtime nol.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    highlighted: true,
  },
  {
    title: "Kualitas Terjamin",
    desc: "Semua produk menggunakan komponen berstandar internasional (ISO & SNI). Setiap unit melewati QC ketat sebelum dikirim ke lokasi Anda.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
    highlighted: false,
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="bg-[#101012] py-20 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
            [ Kenapa Kami ]
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-neutral-100">
            Ketenangan pikiran jangka panjang.
          </h2>
          <p className="text-neutral-400 mt-4 text-base leading-relaxed">
            Kami tidak hanya menjual mesin — kami menghadirkan kepastian untuk
            operasional bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className={`rounded-2xl p-8 transition-all duration-300 border ${
                benefit.highlighted
                  ? "bg-neutral-900 border-cyan-500/30 shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)]"
                  : "bg-neutral-900/50 border-white/10 hover:border-white/20"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 border ${
                  benefit.highlighted
                    ? "bg-cyan-500/10 border-cyan-500/30"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <svg
                  className={`w-5 h-5 ${benefit.highlighted ? "text-cyan-400" : "text-neutral-300"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-medium tracking-tight text-neutral-100 mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
