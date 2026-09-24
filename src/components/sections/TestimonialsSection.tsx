import { Testimonial } from "@prisma/client";
import { fallbackTestimonials } from "@/lib/fallbackData";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const data = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <section id="testimonials" className="bg-[#101012] py-20 md:py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
            [ Testimoni Klien ]
          </p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-neutral-100">
            Dipercaya oleh pemimpin industri.
          </h2>
          <p className="text-neutral-400 mt-4 text-base leading-relaxed">
            Bukan sekadar kata-kata kami — inilah pengalaman nyata dari klien
            yang sudah mempercayai PT AFT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((t) => (
            <figure
              key={t.id}
              className="bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_24px_-6px_rgba(34,211,238,0.35)] rounded-2xl p-7 transition-all duration-300 flex flex-col gap-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
                  {t.rating.toFixed(1)}
                </span>
              </div>

              <blockquote className="text-neutral-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono text-xs text-cyan-400">{t.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-medium text-neutral-100 text-sm">{t.author}</p>
                  <p className="text-neutral-500 text-xs">{t.company}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
