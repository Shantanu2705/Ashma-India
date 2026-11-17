import { notFound } from "next/navigation";
import { getCategoryBySlug, CATEGORIES } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

export async function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    category: category.slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.category);

  if (!category) {
    notFound();
  }

  return (
    <>
      <PageHeader 
        title={category.name} 
        description={category.description}
      />
      
      <section className="py-24 lg:py-32 bg-[#FFFAF7] text-[#1D1510] min-h-screen border-b border-[#DBD7D4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation */}
          <div className="mb-12">
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-bold text-[#716B67] hover:text-[#FF6300] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Categories</span>
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.products.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#DBD7D4] hover:border-[#FF6300] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Product Image Frame (Clean, High Brightness, Sharp) */}
                <div className="relative aspect-square overflow-hidden bg-[#F5F0ED] border-b border-[#DBD7D4]">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {product.mrp && (
                    <div className="absolute top-4 right-4 bg-[#FFFFFF] border border-[#FF6300]/40 text-[#FF6300] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      MRP {product.mrp}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6300] block mb-2">
                      {category.name}
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-3 group-hover:text-[#FF6300] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[#716B67] text-sm leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Features Badges */}
                    {product.features && product.features.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {product.features.map((feat, i) => (
                          <span 
                            key={i} 
                            className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F5F0ED] text-[#1D1510] border border-[#DBD7D4]"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-6 border-t border-[#F5F0ED] flex items-center justify-between">
                    <Link 
                      href={`/products/${category.slug}/${product.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#FF6300] hover:bg-[#E05500] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors shadow-sm"
                    >
                      <span>View Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-xs text-[#716B67] font-bold uppercase tracking-wider">Ashma Certified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
