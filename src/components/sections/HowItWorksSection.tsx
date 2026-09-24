const STEPS = [
  {
    step: "01",
    title: "Konsultasi Gratis",
    desc: "Ceritakan kebutuhan cold storage Anda kepada tim expert kami. Kami analisis kebutuhan, lokasi, dan kapasitas secara menyeluruh tanpa biaya apapun.",
    iconPath: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    step: "02",
    title: "Proposal Tersuai",
    desc: "Dapatkan proposal teknis lengkap dengan desain 3D, bill of material, dan rincian harga transparan. Tidak ada biaya tersembunyi.",
    iconPath: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    step: "03",
    title: "Instalasi Profesional",
    desc: "Tim teknisi bersertifikat kami menyelesaikan setup dalam 7 hari kerja. Commissioning dan testing dilakukan hingga sistem berjalan sempurna.",
    iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    step: "04",
    title: "Monitoring 24/7",
    desc: "Sistem IoT kami memantau suhu, humidity, dan performa mesin secara real-time. Alert otomatis via WhatsApp jika ada anomali — tim siap respons dalam 2 jam.",
    iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#101012] py-20 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
            [ Cara Kerja ]
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-neutral-100">
            Empat langkah menuju solusi optimal.
          </h2>
          <p className="text-neutral-400 mt-4 text-base leading-relaxed">
            Dari konsultasi awal hingga monitoring jangka panjang — kami
            dampingi setiap langkah dengan transparansi penuh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="group bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.35)] rounded-2xl p-8 transition-all duration-300 flex gap-6"
            >
              <span className="font-mono text-3xl text-neutral-700 group-hover:text-cyan-500/60 transition-colors duration-300 leading-none pt-1">
                {s.step}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-medium tracking-tight text-neutral-100">
                  {s.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
