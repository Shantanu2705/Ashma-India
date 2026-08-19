import { notFound } from "next/navigation";
import { getCategoryBySlug, CATEGORIES } from "@/lib/data";
import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      
      <section className="py-24 bg-white dark:bg-[#050505]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.products.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col bg-gray-50 dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-black/50">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-heading font-bold text-ashma-text dark:text-white mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                    {product.description}
                  </p>
                  
                  <Link 
                    href={`/products/${category.slug}/${product.slug}`}
                    className="inline-flex items-center gap-2 text-ashma-blue font-semibold hover:text-ashma-dark transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
