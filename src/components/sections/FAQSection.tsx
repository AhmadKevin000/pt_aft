import { FAQ } from "@prisma/client";
import { fallbackFAQs } from "@/lib/fallbackData";
import FAQAccordion from "@/components/ui/FAQAccordion";

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const data = faqs.length > 0 ? faqs : fallbackFAQs;

  return (
    <section id="faq" className="bg-[#101012] py-20 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
                [ FAQ ]
              </p>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-neutral-100">
                Pertanyaan umum.
              </h2>
              <p className="text-neutral-400 mt-4 text-base leading-relaxed">
                Kami jawab semua pertanyaan yang sering muncul sebelum Anda
                memutuskan bekerja sama dengan kami.
              </p>
            </div>

            <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
              <p className="font-medium text-neutral-100 text-sm">Tidak menemukan jawaban?</p>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Hubungi tim kami langsung — kami siap menjawab pertanyaan
                spesifik Anda dalam 1 jam.
              </p>
              <a
                href="#contact"
                id="cta-faq-contact"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-neutral-950 text-sm font-semibold px-5 py-2.5 rounded-full transition-colors mt-1 w-fit"
              >
                Tanya Langsung
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <FAQAccordion faqs={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
