import { notFound } from "next/navigation";
import { getProductBySlug, CATEGORIES } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, PhoneCall } from "lucide-react";
import ProductGallery from "@/components/products/ProductGallery";

export const dynamicParams = false;

export async function generateStaticParams() {
  return CATEGORIES.flatMap((category) => 
    category.products.map((product) => ({
      category: category.slug,
      slug: product.slug,
    }))
  );
}

export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ category: string, slug: string }> 
}) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.category, resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const allImages = Array.from(new Set([product.image, ...(product.gallery || [])]));

  return (
    <main className="pt-32 pb-24 bg-[#FFFAF7] text-[#1D1510] min-h-screen border-b border-[#DBD7D4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link 
          href={`/products/${resolvedParams.category}`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-bold text-[#716B67] hover:text-[#FF6300] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {resolvedParams.category.replace("-", " ")}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Image Gallery Area with Interactive Selector */}
          <div className="lg:col-span-6 space-y-6">
            <ProductGallery 
              mainImage={product.image}
              name={product.name}
              gallery={allImages}
            />

            {/* Quality Assurance Card */}
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] flex items-center gap-4 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-[#FF6300] shrink-0" />
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1D1510]">Ashma Guaranteed Genuine</h4>
                <p className="text-xs text-[#716B67] mt-0.5">Backed by 100% authentic components and nationwide technician support.</p>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#FF6300] block mb-3">
              {resolvedParams.category.replace("-", " ")}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1D1510] mb-6">
              {product.name}
            </h1>
            
            <p className="text-base sm:text-lg text-[#716B67] mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* MRP Box */}
            {product.mrp && (
              <div className="mb-8 p-5 bg-[#FFF0E6] rounded-xl border border-[#FF6300]/30 inline-block">
                <span className="text-[#716B67] text-xs font-bold uppercase tracking-widest block mb-1">
                  Maximum Retail Price (Incl. of all taxes)
                </span>
                <span className="text-3xl font-black text-[#FF6300] tracking-tight">{product.mrp}</span>
              </div>
            )}

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6300] mb-4">
                  Key System Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6300] shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1D1510]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Specifications Table */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6300] mb-4">
                  Technical Specifications
                </h3>
                <div className="rounded-xl overflow-hidden border border-[#DBD7D4] bg-[#FFFFFF] shadow-sm">
                  <table className="w-full text-left border-collapse text-xs">
                    <tbody>
                      {Object.entries(product.specs).map(([key, value], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F5F0ED]"}>
                          <th className="py-3.5 px-5 font-bold uppercase tracking-wider text-[#1D1510] w-2/5 border-b border-[#DBD7D4]">
                            {key}
                          </th>
                          <td className="py-3.5 px-5 font-medium text-[#716B67] border-b border-[#DBD7D4]">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="mt-auto pt-8 border-t border-[#DBD7D4] flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/917001934185?text=${encodeURIComponent(`Hello Ashma India,\n\nI am interested in inquiring about ${product.name} (${product.mrp ? 'MRP ' + product.mrp : 'Water Solution'}). Please share pricing, availability, and installation details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-full transition-all shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.4)] flex-1 text-center"
              >
                Enquire via WhatsApp
              </a>
              <a 
                href="tel:+918101663132"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#1D1510] border-2 border-[#1D1510] hover:bg-[#1D1510] hover:text-white rounded-full transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#FF6300]" />
                <span>Call Sales</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
