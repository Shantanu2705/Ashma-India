"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  {
    title: "Installation Services",
    description: "Professional setup of RO systems, industrial plants, and kitchen chimneys by certified technicians.",
    image: "/images/company-gallery/gallery-4.jpeg",
    badge: "Certified Setup",
  },
  {
    title: "Repair & Maintenance",
    description: "Prompt troubleshooting and precision component repair for all water purification systems.",
    image: "/images/company-gallery/gallery-9.jpeg",
    badge: "Quick Turnaround",
  },
  {
    title: "Annual Maintenance (AMC)",
    description: "Comprehensive yearly contracts for hassle-free performance, filter replacement, and sanitization.",
    image: "/images/products/ro-purifiers/ashma-salto-kitchen-lifestyle.jpg",
    badge: "365-Day Care",
  },
  {
    title: "Water Quality Testing",
    description: "Advanced chemical, microbial, and TDS water quality analysis for safe domestic and industrial use.",
    image: "/images/company-gallery/gallery-16.jpeg",
    badge: "Lab Certified",
  },
  {
    title: "Chimney Deep Cleaning",
    description: "Deep oil-degreasing, filter wash, and motor servicing for all residential kitchen chimneys.",
    image: "/images/products/chimneys/ashma-chimney-premium.jpg",
    badge: "Auto-Clean Care",
  },
  {
    title: "Pool Pump Maintenance",
    description: "Expert servicing, sand filter flushing, and motor maintenance to keep pool water crystal clear.",
    image: "/images/products/pool-pumps/ashma-pool-pump.jpg",
    badge: "Commercial Grade",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 relative bg-[#FFFAF7] text-[#1D1510] border-b border-[#DBD7D4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#FF6300] block mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1D1510] tracking-tight mb-6">
            Expert Care, Anytime.
          </h2>
          <p className="text-[#716B67] text-base md:text-lg leading-relaxed">
            From seamless installations to proactive maintenance, our certified technicians ensure your systems run flawlessly.
          </p>
        </div>

        {/* Services Grid with Visual Photographs on Every Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] hover:border-[#FF6300] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F0ED] border-b border-[#DBD7D4]">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#DBD7D4] text-[#1D1510] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6300]" />
                    {service.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#1D1510]/80 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                    0{index + 1}
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#1D1510] mb-3 group-hover:text-[#FF6300] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#716B67] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-[#F5F0ED] flex items-center justify-between">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#FF6300] hover:text-[#E05500] transition-colors"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <span className="flex items-center gap-1 text-[11px] font-bold text-[#716B67] uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6300]" />
                  Guaranteed
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
