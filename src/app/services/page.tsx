import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactSnippet from "@/components/home/ContactSnippet";
import Image from "next/image";
import { PhoneCall, Calendar, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | AshmaIndia",
  description: "Comprehensive installation, repair, maintenance, and AMC services for all water purification and chimney systems.",
};

const STEPS = [
  {
    step: "01",
    title: "Book Service",
    desc: "Call +91 8101663132 or submit an online callback request in seconds.",
    image: "/images/company-gallery/gallery-10.jpeg",
    icon: Calendar,
  },
  {
    step: "02",
    title: "Doorstep Visit",
    desc: "Certified engineers arrive equipped with digital testing and diagnostics tools.",
    image: "/images/company-gallery/gallery-4.jpeg",
    icon: Wrench,
  },
  {
    step: "03",
    title: "Genuine Parts",
    desc: "Installation of authentic membranes, sediment filters, and booster pumps.",
    image: "/images/company-gallery/gallery-9.jpeg",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "TDS Certification",
    desc: "Comprehensive water testing and warranty signoff before concluding the job.",
    image: "/images/company-gallery/gallery-16.jpeg",
    icon: PhoneCall,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        description="Expert care and support for your water purifiers, industrial plants, and home appliances."
      />

      <ServicesSection />

      {/* 4-Step Process Section with Real Photos */}
      <section className="py-24 bg-[#FFFFFF] text-[#1D1510] border-b border-[#DBD7D4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#FF6300] block mb-4">
              Service Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1D1510] tracking-tight mb-6">
              How Our Service Works
            </h2>
            <p className="text-[#716B67] text-base md:text-lg leading-relaxed">
              We ensure a smooth, transparent, and professional experience from the moment you call to final quality verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {STEPS.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-2xl overflow-hidden bg-[#F5F0ED] border border-[#DBD7D4] hover:border-[#FF6300] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md group"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-white border-b border-[#DBD7D4]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                    <div className="absolute top-3 left-3 bg-[#FF6300] text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      Step {item.step}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-black uppercase tracking-tight text-[#1D1510] mb-2 group-hover:text-[#FF6300] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#716B67] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D1510] flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FF6300]" />
                    Guaranteed Quality
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA Box */}
          <div className="p-8 sm:p-12 rounded-2xl bg-[#FFF0E6] border border-[#FF6300]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl font-black uppercase tracking-tight text-[#1D1510] mb-2">
                Need Emergency Purifier Repair?
              </h4>
              <p className="text-sm text-[#716B67]">
                Our certified on-field engineers are available for same-day priority service across Siliguri.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF6300] hover:bg-[#E05500] text-white px-8 py-4 font-bold uppercase tracking-wider text-xs shadow-md shrink-0 transition-colors"
            >
              <span>Book Priority Service</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      <WhyChooseUs />
      <ContactSnippet />
    </>
  );
}
