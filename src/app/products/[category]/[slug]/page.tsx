import { notFound } from "next/navigation";
import { getProductBySlug, CATEGORIES } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

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

  return (
    <main className="pt-32 pb-24 bg-white dark:bg-[#050505] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link 
          href={`/products/${resolvedParams.category}`}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-ashma-blue transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {resolvedParams.category.replace("-", " ")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Image Gallery Area */}
          <div className="space-y-6">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/10">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                priority
                className="object-contain p-4"
              />
            </div>
            
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {product.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-100 dark:border-white/10 cursor-pointer hover:opacity-80 transition-opacity">
                    <Image 
                      src={img} 
                      alt={`${product.name} gallery ${idx + 1}`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ashma-text dark:text-white mb-6">
              {product.name}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-12">
              <h3 className="text-lg font-bold mb-6 text-ashma-text dark:text-white uppercase tracking-wider">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-ashma-blue flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-8 border-t border-gray-200 dark:border-white/10">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white bg-ashma-blue rounded-full hover:bg-ashma-dark transition-all duration-300 hover:shadow-lg hover:shadow-ashma-blue/30 w-full sm:w-auto"
              >
                Enquire Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
