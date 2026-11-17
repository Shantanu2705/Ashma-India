import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import ContactSnippet from "@/components/home/ContactSnippet";
import { CheckCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Brands We Deal In | AshmaIndia",
  description: "AshmaIndia partners with top brands like Kent, Aquaguard, Livpure, Eureka Forbes, AO Smith, and more to provide authorized water purification and appliance solutions.",
};

interface BrandPartner {
  name: string;
  logo: string;
  width: number;
  height: number;
  category: string;
  desc: string;
}

const PARTNERS: BrandPartner[] = [
  { 
    name: "Kent", 
    logo: "/images/brands/kent.svg",
    width: 140,
    height: 45,
    category: "RO Purifiers & Water Softeners",
    desc: "Advanced mineral RO purifiers, UV filtration systems, and smart domestic water purification solutions." 
  },
  { 
    name: "Aquaguard", 
    logo: "/images/brands/aquaguard.svg",
    width: 150,
    height: 45,
    category: "Active Copper & Mineral Guard",
    desc: "Pioneering Active Copper, zinc booster, and multi-stage UV water purification technology for homes." 
  },
  { 
    name: "Livpure", 
    logo: "/images/brands/livpure.svg",
    width: 130,
    height: 45,
    category: "Smart RO & Alkaline Purifiers",
    desc: "State-of-the-art RO and alkaline solutions designed for contemporary kitchens and modern families." 
  },
  { 
    name: "Eureka Forbes", 
    logo: "/images/brands/eureka-forbes.svg",
    width: 160,
    height: 45,
    category: "Domestic & Commercial Filtration",
    desc: "Decades of proven leadership in drinking water safety, health appliances, and industrial purifiers." 
  },
  { 
    name: "AO Smith", 
    logo: "/images/brands/ao-smith.svg",
    width: 140,
    height: 45,
    category: "Commercial RO & Water Heating",
    desc: "Heavy-duty commercial RO plants, hot-and-cold dispensers, and advanced commercial heating systems." 
  },
  { 
    name: "Hindware", 
    logo: "/images/brands/hindware.svg",
    width: 140,
    height: 45,
    category: "Kitchen Chimneys & Appliances",
    desc: "Industry-leading auto-clean kitchen chimneys, ventilation hoods, and premier sanitary appliances." 
  },
  { 
    name: "Zero B", 
    logo: "/images/brands/zerob.svg",
    width: 130,
    height: 45,
    category: "Whole-House Softeners & RO",
    desc: "Specialized in eco-friendly water softeners, iron removal filters, and whole-house purification plants." 
  },
  { 
    name: "Pureit", 
    logo: "/images/brands/pureit.svg",
    width: 130,
    height: 45,
    category: "Germkill RO & UV Devices",
    desc: "Unmatched multi-stage germkill technology and reliable household drinking water appliances." 
  },
  { 
    name: "LG", 
    logo: "/images/brands/lg.svg",
    width: 110,
    height: 45,
    category: "True Filtration & Stainless Tanks",
    desc: "Innovative dual-protection stainless steel water purifiers with digital sterilization features." 
  },
  { 
    name: "Havells", 
    logo: "/images/brands/havells.svg",
    width: 140,
    height: 45,
    category: "Alkaline & UV Purifiers",
    desc: "Precision engineering with pH balancing, 100% RO & UV purifiers, and smart consumer appliances." 
  },
];

export default function BrandsPage() {
  return (
    <>
      <PageHeader 
        title="Brands We Deal In" 
        description="Partnering with the world's most trusted manufacturers to bring you 100% genuine products, genuine spares, and authorized service."
      />
      
      <section className="py-20 lg:py-28 bg-[#FFFAF7] text-[#1D1510] border-b border-[#DBD7D4]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#FF6300] block mb-3">
              Certified Dealership & Service
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1D1510] tracking-tight mb-4">
              Our Trusted Brand Partners
            </h2>
            <p className="text-[#716B67] text-base md:text-lg leading-relaxed">
              We are authorized dealers and certified service technicians for the industry&apos;s foremost water purification and home appliance brands. Every unit, cartridge, and replacement component is guaranteed 100% original.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
            {PARTNERS.map((partner, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] hover:border-[#FF6300] transition-all duration-300 group flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div>
                  {/* Brand Logo Container */}
                  <div className="h-20 w-full rounded-xl bg-[#F5F0ED] border border-[#DBD7D4]/60 flex items-center justify-center p-4 mb-5 group-hover:bg-[#FFF4EC] transition-colors">
                    <div className="relative h-10 w-full max-w-[140px] flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} Authorized Partner`}
                        width={partner.width}
                        height={partner.height}
                        className="object-contain max-h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#FF6300] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Authorized
                    </span>
                    <CheckCircle className="w-4 h-4 text-[#FF6300]" />
                  </div>
                  
                  <h3 className="text-lg font-black uppercase tracking-tight text-[#1D1510] mb-1 group-hover:text-[#FF6300] transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-[11px] font-semibold text-[#FF6300] uppercase tracking-wider mb-3">
                    {partner.category}
                  </p>
                  
                  <p className="text-xs text-[#716B67] leading-relaxed">
                    {partner.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F5F0ED] flex items-center justify-between text-[11px] uppercase tracking-wider text-[#716B67] font-semibold">
                  <span>Sales & Service</span>
                  <span className="text-[#FF6300] font-bold">100% Genuine</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        <BrandsMarquee />
      </section>

      <ContactSnippet />
    </>
  );
}
