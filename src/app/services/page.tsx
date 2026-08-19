import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ServicesSection from "@/components/home/ServicesSection";
import ContactSnippet from "@/components/home/ContactSnippet";

export const metadata: Metadata = {
  title: "Services | AshmaIndia",
  description: "Comprehensive installation, repair, maintenance, and AMC services for all water purification and chimney systems.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        description="Expert care and support for your water purifiers, industrial plants, and home appliances."
      />
      <ServicesSection />
      <ContactSnippet />
    </>
  );
}
