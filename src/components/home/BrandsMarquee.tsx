"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BRAND_LOGOS = [
  { name: "Kent", logo: "/images/brands/kent.svg", width: 140, height: 45 },
  { name: "Aquaguard", logo: "/images/brands/aquaguard.svg", width: 150, height: 45 },
  { name: "Livpure", logo: "/images/brands/livpure.svg", width: 130, height: 45 },
  { name: "Hindware", logo: "/images/brands/hindware.svg", width: 140, height: 45 },
  { name: "Eureka Forbes", logo: "/images/brands/eureka-forbes.svg", width: 160, height: 45 },
  { name: "Zero B", logo: "/images/brands/zerob.svg", width: 130, height: 45 },
  { name: "Pureit", logo: "/images/brands/pureit.svg", width: 130, height: 45 },
  { name: "AO Smith", logo: "/images/brands/ao-smith.svg", width: 140, height: 45 },
  { name: "LG", logo: "/images/brands/lg.svg", width: 110, height: 45 },
  { name: "Havells", logo: "/images/brands/havells.svg", width: 140, height: 45 },
];

export default function BrandsMarquee() {
  return (
    <section className="py-14 border-y border-[#DBD7D4] bg-[#FFFFFF] overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-4 mb-8 text-center">
        <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#FF6300]">
          Authorized Sales & Service Partners
        </span>
      </div>
      
      <div className="relative flex w-full overflow-hidden">
        {/* Gradients for smooth fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex whitespace-nowrap items-center gap-6"
        >
          {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 py-3 rounded-xl bg-[#F5F0ED] border border-[#DBD7D4] hover:border-[#FF6300] transition-all duration-300 flex items-center justify-center min-w-[170px] h-18 shadow-sm group cursor-pointer"
            >
              <div className="relative h-10 w-32 flex items-center justify-center grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} Authorized Partner`}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain max-h-10 w-auto"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
