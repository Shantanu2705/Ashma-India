import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ProductEcosystem from "@/components/home/ProductEcosystem";
import ContactSnippet from "@/components/home/ContactSnippet";
import { CATEGORIES } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | AshmaIndia",
  description: "Explore our premium range of RO water purifiers, commercial plants, water softeners, and kitchen chimneys.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader 
        title="Our Products" 
        description="Discover cutting-edge water purification and industrial solutions designed for maximum efficiency and durability."
      />

      {/* Category Overview Cards */}
      <section className="py-24 lg:py-32 bg-[#FFFAF7] text-[#1D1510] border-b border-[#DBD7D4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#FF6300] block mb-4">
              Explore By Category
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1D1510] tracking-tight mb-6">
              Engineered For Pure Living
            </h2>
            <p className="text-[#716B67] text-base md:text-lg leading-relaxed">
              Select a specialized category below to view our complete range of certified domestic, commercial, and industrial appliances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <div 
                key={cat.id}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] hover:border-[#FF6300] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F5F0ED] mb-6 border border-[#DBD7D4] p-3">
                    <Image 
                      src={cat.image} 
                      alt={cat.name} 
                      fill 
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF6300] block mb-2">
                    Category 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#1D1510] mb-3 group-hover:text-[#FF6300] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#716B67] leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#F5F0ED]">
                  <Link 
                    href={`/products/${cat.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#1D1510] hover:text-[#FF6300] transition-colors"
                  >
                    <span>View Models ({cat.products.length})</span>
                    <ArrowRight className="w-4 h-4 text-[#FF6300] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <ProductEcosystem />
      <ContactSnippet />
    </>
  );
}
