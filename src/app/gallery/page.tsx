import PageHeader from "@/components/layout/PageHeader";
import GalleryClient from "./GalleryClient";

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

          <GalleryClient />

        </div>
      </section>
    </>
  );
}
