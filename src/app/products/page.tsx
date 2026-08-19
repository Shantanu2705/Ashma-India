import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ProductEcosystem from "@/components/home/ProductEcosystem";

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
      <ProductEcosystem />
    </>
  );
}
