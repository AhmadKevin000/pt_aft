import { Product } from "@prisma/client";
import ProductCard from "@/components/ui/ProductCard";

interface ProductsSectionProps {
  products: Product[];
}

export default function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section id="produk" className="bg-[#101012] py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div className="max-w-xl">
            <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
              [ Katalog Unit ]
            </p>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-neutral-100">
              Katalog mesin pendingin.
            </h2>
            <p className="text-neutral-400 mt-4 text-base leading-relaxed">
              Berbagai solusi pendingin industri — dari cold room skala kecil
              hingga sistem refrigerasi logistik berskala besar.
            </p>
          </div>
          <a
            href="#contact"
            id="cta-catalog-inquiry"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-white/10 hover:border-cyan-500/40 hover:text-cyan-400 text-neutral-300 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
          >
            Request Custom Order
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </div>

        {products.length === 0 ? (
          <div className="bg-neutral-900 border border-white/10 p-10 rounded-3xl text-center">
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
              </svg>
            </div>
            <p className="text-neutral-500 text-sm">Belum ada produk. Tambahkan data lewat Prisma Studio.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
