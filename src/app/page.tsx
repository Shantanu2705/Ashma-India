import Hero from "@/components/home/Hero";
import AboutSnippet from "@/components/home/AboutSnippet";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProductEcosystem from "@/components/home/ProductEcosystem";
import ServicesSection from "@/components/home/ServicesSection";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import ContactSnippet from "@/components/home/ContactSnippet";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <WhyChooseUs />
      <ProductEcosystem />
      <ServicesSection />
      <BrandsMarquee />
      <ContactSnippet />
    </>
  );
}
