import Hero from "@/components/home/Hero";
import AboutSnippet from "@/components/home/AboutSnippet";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProductEcosystem from "@/components/home/ProductEcosystem";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import ContactSnippet from "@/components/home/ContactSnippet";
import dynamic from "next/dynamic";

const Service3DModel = dynamic(() => import("@/components/home/Service3DModel"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/home/ServicesSection"), { ssr: true });

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <WhyChooseUs />
      <ProductEcosystem />
      <ServicesSection />
      <Service3DModel />
      <BrandsMarquee />
      <ContactSnippet />
    </>
  );
}
