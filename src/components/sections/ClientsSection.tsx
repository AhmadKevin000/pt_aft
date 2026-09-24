import { TRUSTED_CLIENTS } from "@/lib/fallbackData";

export default function ClientsSection() {
  return (
    <section className="bg-[#101012] py-20 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
            [ Klien Kami ]
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-neutral-100">
            Dipercaya perusahaan terkemuka.
          </h2>
          <p className="text-neutral-400 mt-4 text-base leading-relaxed">
            Lebih dari 200+ perusahaan di seluruh Indonesia mempercayakan
            kebutuhan cold chain mereka kepada kami.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {TRUSTED_CLIENTS.map((client) => (
            <div
              key={client.id}
              className="bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.35)] rounded-xl px-5 py-6 text-center opacity-70 hover:opacity-100 transition-all duration-300 group"
            >
              <p className="text-neutral-200 font-medium text-xs leading-tight tracking-tight">{client.name}</p>
              <p className="font-mono text-[10px] text-neutral-600 group-hover:text-cyan-500/70 uppercase tracking-widest mt-2 transition-colors">
                {client.sector}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
