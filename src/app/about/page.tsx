import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import AboutSnippet from "@/components/home/AboutSnippet";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us | AshmaIndia",
  description: "Learn more about AshmaIndia, our mission, vision, and our journey in providing premium water purification and industrial solutions.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        description="Pioneering water purity and industrial solutions with trusted technology and expertise."
      />
      <AboutSnippet />
      <WhyChooseUs />
    </>
  );
}
