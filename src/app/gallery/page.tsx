import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery-data";

export const metadata = {
  title: "Gallery | Ashma India",
  description: "Explore our gallery showcasing our premium products, installations, and the trust we have built over the years.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader 
        title="Our Gallery" 
        description="Explore our installations, products, and moments of trust that define Ashma India's commitment to quality."
      />
      
      <section className="py-24 bg-white dark:bg-[#050505] min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ashma-text dark:text-white mb-4">
              Real Work, <span className="text-ashma-blue">Real Quality</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A glimpse into our premium installations, satisfied customers, and the excellence we deliver every day.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((src, idx) => (
              <div 
                key={idx} 
                className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-auto bg-gray-100 dark:bg-white/5">
                  <Image 
                    src={src} 
                    alt={`Ashma India Gallery Image ${idx + 1}`}
                    width={600}
                    height={800}
                    className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
