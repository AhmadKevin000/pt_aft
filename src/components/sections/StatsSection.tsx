import { IndustrialStats } from "@prisma/client";
import { fallbackStats } from "@/lib/fallbackData";
import { Package, Building2, TrendingUp, Award, LucideIcon } from "lucide-react";

const STAT_ICONS: Record<number, LucideIcon> = {
  1: Package,
  2: Building2,
  3: TrendingUp,
  4: Award,
};

interface StatsSectionProps {
  stats: IndustrialStats[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const data = stats.length > 0 ? stats : fallbackStats;

  return (
    <section className="bg-[#101012] py-20 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
            [ Angka Bicara ]
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-neutral-100">
            Kepercayaan industri sejak awal.
          </h2>
          <p className="text-neutral-400 mt-4 text-base leading-relaxed">
            Angka-angka ini bukan sekadar statistik — mereka bukti nyata
            kepercayaan ratusan perusahaan kepada kami.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((stat) => {
            const Icon = STAT_ICONS[stat.order] ?? Package;
            return (
              <div
                key={stat.id}
                className="group bg-neutral-900 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.35)] rounded-2xl p-6 md:p-8 transition-all duration-300"
              >
                <Icon
                  className="w-5 h-5 text-neutral-500 group-hover:text-cyan-400 transition-colors duration-300"
                  strokeWidth={1.5}
                />
                <p className="font-mono text-3xl md:text-4xl text-neutral-100 tracking-tight mt-6">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-cyan-400/90 mt-2">{stat.label}</p>
                <p className="text-xs text-neutral-500 leading-relaxed mt-2 hidden md:block">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
