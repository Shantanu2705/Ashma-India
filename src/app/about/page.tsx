import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import AboutSnippet from "@/components/home/AboutSnippet";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import ContactSnippet from "@/components/home/ContactSnippet";
import Image from "next/image";
import { Target, Compass, Award, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | AshmaIndia",
  description: "Learn more about AshmaIndia, our mission, vision, and our journey in providing premium water purification and industrial solutions.",
};

const MILESTONES = [
  {
    year: "2008",
    title: "Founded in Siliguri",
    desc: "Started as Swagata Enterprise with a vision to provide clean, healthy drinking water to households across North Bengal.",
    image: "/images/company-gallery/gallery-1.jpeg",
  },
  {
    year: "2014",
    title: "Industrial RO Expansion",
    desc: "Launched our commercial and industrial RO plant division, delivering high-capacity water systems up to 10,000 LPH.",
    image: "/images/products/commercial-ro/industrial-ro-plant-system.jpg",
  },
  {
    year: "2019",
    title: "Smart Kitchen Chimneys",
    desc: "Introduced touch-sensor and motion-sensor kitchen chimneys to deliver complete home wellness solutions.",
    image: "/images/products/chimneys/ashma-chimney-diwali.jpg",
  },
  {
    year: "2024",
    title: "50,000+ Happy Families",
    desc: "Celebrating 15+ years of excellence, trusted by 50,000+ homes, businesses, hotels, and healthcare institutions.",
    image: "/images/products/ro-purifiers/ashma-ream-alcea-couple.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        description="Pioneering water purity and industrial solutions with trusted technology and expertise."
      />

      <AboutSnippet />

      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#FFFAF7] text-[#1D1510] border-b border-[#DBD7D4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            <div className="p-10 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm hover:border-[#FF6300] transition-colors">
              <div className="w-14 h-14 rounded-xl bg-[#FFF0E6] text-[#FF6300] flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF6300] block mb-2">Our Mission</span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-4">Purity in Every Drop</h3>
              <p className="text-[#716B67] text-base leading-relaxed">
                To engineer and deliver advanced, reliable, and accessible water purification technology and appliances that protect public health, enhance kitchen wellness, and support sustainable industrial operations across India.
              </p>
            </div>

            <div className="p-10 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm hover:border-[#FF6300] transition-colors">
              <div className="w-14 h-14 rounded-xl bg-[#FFF0E6] text-[#FF6300] flex items-center justify-center mb-6">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#FF6300] block mb-2">Our Vision</span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-4">Engineering Trust & Innovation</h3>
              <p className="text-[#716B67] text-base leading-relaxed">
                To be India&apos;s most dependable brand in water filtration and home environmental appliances, recognized for uncompromised engineering quality, genuine spare parts, and prompt doorstep customer care.
              </p>
            </div>

          </div>

          {/* Our Journey Milestones */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#FF6300] block mb-4">
              Historical Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1D1510] tracking-tight mb-4">
              Our 15+ Year Journey
            </h2>
            <p className="text-[#716B67] text-base md:text-lg leading-relaxed">
              From our humble beginnings to becoming a leading water purification powerhouse.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONES.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#DBD7D4] shadow-sm hover:shadow-md hover:border-[#FF6300] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F0ED] border-b border-[#DBD7D4]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    <div className="absolute top-3 left-3 bg-[#FF6300] text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {item.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-black uppercase tracking-tight text-[#1D1510] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#716B67] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6300] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Ashma Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <WhyChooseUs />
      <BrandsMarquee />
      <ContactSnippet />
    </>
  );
}
