import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import ContactSnippet from "@/components/home/ContactSnippet";

export const metadata: Metadata = {
  title: "Brands We Deal In | AshmaIndia",
  description: "AshmaIndia partners with top brands like Kent, Aquaguard, Livpure, and more to provide the best water purification solutions.",
};

export default function BrandsPage() {
  return (
    <>
      <PageHeader 
        title="Brands We Deal In" 
        description="Partnering with the world's most trusted manufacturers to bring you unparalleled quality and reliability."
      />
      <div className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 text-center max-w-3xl mb-16">
          <h2 className="text-3xl font-heading font-bold mb-6">Our Trusted Partners</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            We are authorized dealers and service providers for the industry's leading brands. 
            This ensures that every product, spare part, and service we offer meets the highest standards of quality.
          </p>
        </div>
        <BrandsMarquee />
      </div>
      <ContactSnippet />
    </>
  );
}
