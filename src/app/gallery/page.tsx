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
      
      <section className="py-24 lg:py-32 bg-[#FFFAF7] text-[#1D1510] min-h-screen border-b border-[#DBD7D4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#FF6300] block mb-4">
              Proven Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1D1510] mb-6">
              Real Work, <span className="text-[#FF6300]">Real Quality</span>
            </h2>
            <p className="text-[#716B67] text-base md:text-lg leading-relaxed">
              A glimpse into our premium installations, satisfied customers, and the excellence we deliver every day.
            </p>
          </div>

          <GalleryClient />

        </div>
      </section>
    </>
  );
}
