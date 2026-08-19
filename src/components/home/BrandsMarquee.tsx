"use client";

import { motion } from "framer-motion";

const BRANDS = [
  "Kent",
  "Aquaguard",
  "Livpure",
  "Hindware",
  "Eureka Forbes",
  "Zero B",
  "Pureit",
  "AO Smith",
  "LG",
  "Havells"
];

export default function BrandsMarquee() {
  return (
    <section className="py-20 border-y border-gray-100 dark:border-white/5 bg-white dark:bg-black overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h3 className="text-xl font-heading font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          Trusted Brands We Partner With
        </h3>
      </div>
      
      <div className="relative flex w-full overflow-hidden">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex whitespace-nowrap items-center"
        >
          {/* Repeat brands array twice to create seamless loop */}
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, index) => (
            <div
              key={index}
              className="mx-12 text-3xl md:text-5xl font-heading font-black text-gray-200 dark:text-gray-800 hover:text-ashma-blue dark:hover:text-ashma-blue transition-colors duration-300 cursor-default"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
