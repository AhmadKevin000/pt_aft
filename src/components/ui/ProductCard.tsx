import { Product } from "@prisma/client";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article className="group bg-neutral-900 border border-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_28px_-8px_rgba(34,211,238,0.35)] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col">
      {product.imageUrl ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.imageUrl}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="relative aspect-[16/10] bg-neutral-800/60 flex items-center justify-center border-b border-white/5">
          <svg className="w-10 h-10 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
          </svg>
        </div>
      )}

      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            Unit #{String(index + 1).padStart(2, "0")}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-cyan-400 border border-cyan-500/25 bg-cyan-500/5 px-2.5 py-1 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Tersedia
          </span>
        </div>

        <h3 className="text-lg font-medium tracking-tight text-neutral-100 leading-snug group-hover:text-cyan-300 transition-colors duration-200">
          {product.title}
        </h3>

        <p className="text-neutral-400 text-sm leading-relaxed flex-1 line-clamp-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-4 mt-auto border-t border-white/5">
          <a
            href="#contact"
            id={`cta-product-${product.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-300 hover:text-cyan-400 transition-colors"
          >
            Minta Penawaran
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 flex items-center justify-center transition-all duration-200">
            <svg className="w-3.5 h-3.5 text-neutral-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}
