export default function HeroSection() {
  return (
    <section className="relative bg-[#101012] overflow-hidden pt-40 pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-24 left-[15%] w-[480px] h-[320px] bg-cyan-500/15 blur-[110px] rounded-full" />
        <div className="absolute top-1/3 -right-20 w-[420px] h-[280px] bg-cyan-400/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-1/3 w-[360px] h-[240px] bg-white/5 blur-[90px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <div className="flex flex-col gap-8">
              <div>
                <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                  [ Solusi Cold Chain Industri ]
                </p>
                <h1 className="text-5xl md:text-6xl font-medium tracking-tighter text-neutral-100 leading-[1.05] mt-5">
                  Pendinginan presisi untuk bisnis yang{" "}
                  <span className="text-cyan-400">tidak boleh berhenti.</span>
                </h1>
              </div>

              <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
                Cold storage dan sistem refrigerasi industri untuk penyimpanan
                daging, pangan, dan logistik berskala besar — dengan suhu yang
                stabil, monitoring 24/7, dan garansi seumur hidup.
              </p>

              <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
              </div>
              <div className="hidden sm:grid grid-cols-3 gap-6 relative bg-[#101012] px-4 w-fit">
                {["Cold Storage", "Chiller Room", "Blast Freezer"].map((label) => (
                  <div key={label} className="flex items-center gap-2 text-neutral-400">
                    <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" d="M5 12h14M12 5v14" />
                    </svg>
                    <span className="text-sm whitespace-nowrap">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-8 pt-2">
              {[
                { value: "200+", label: "Proyek Selesai" },
                { value: "99,8%", label: "Uptime Terjaga" },
                { value: "15+", label: "Tahun Pengalaman" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-white/10" />}
                  <div>
                    <p className="font-mono text-2xl text-neutral-100 tracking-tight">{stat.value}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[480px] hidden lg:block">
            <div className="absolute inset-4 rounded-3xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Unit 01</p>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <div>
                <p className="text-neutral-100 font-medium text-lg leading-snug tracking-tight">Industrial Cold Room</p>
                <p className="text-neutral-500 text-sm mt-1">Kapasitas 5 – 500 Ton</p>
              </div>
              <div>
                <div className="flex items-end justify-between mb-2">
                  <p className="font-mono text-3xl text-cyan-400 tracking-tight">-18°C</p>
                  <p className="font-mono text-[10px] text-neutral-500 uppercase">Suhu Saat Ini</p>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-cyan-500 rounded-full" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                {[
                  { label: "Kelembapan", value: "75%" },
                  { label: "Efisiensi", value: "80%" },
                ].map((m) => (
                  <div key={m.label}>
                    <p className="font-mono text-sm text-neutral-200">{m.value}</p>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-wide">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute top-8 left-0 bg-neutral-900/90 backdrop-blur border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Perlindungan</p>
                <p className="text-neutral-100 text-sm font-medium leading-tight">Garansi Seumur Hidup</p>
              </div>
            </div>

            <div className="absolute bottom-8 right-0 bg-neutral-900/90 backdrop-blur border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-wide">Instalasi</p>
                <p className="text-neutral-100 text-sm font-medium leading-tight">7 Hari Kerja</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
