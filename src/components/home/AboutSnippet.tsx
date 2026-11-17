"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Droplet, Award, Users, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const STATS = [
  { label: "Happy Customers", value: "50K+", icon: Users },
  { label: "Years Experience", value: "15+", icon: Award },
  { label: "Installations", value: "100K+", icon: Droplet },
  { label: "Service Centers", value: "250+", icon: ShieldCheck },
];

export default function AboutSnippet() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 lg:py-32 relative overflow-hidden bg-[#FFFFFF] text-[#1D1510] border-b border-[#DBD7D4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
          
          {/* Text Content */}
          <div className="lg:col-span-6">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#008CE2] block mb-4">
              About AshmaIndia
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1D1510] tracking-tight mb-6 leading-tight">
              Pioneering Water Purity Since 2008.
            </h2>
            <p className="text-[#716B67] text-base md:text-lg leading-relaxed mb-6">
              At AshmaIndia, we believe that access to pure water is a fundamental right. With over a decade of excellence, we have been delivering state-of-the-art RO water purifiers, commercial plants, and industrial water treatment solutions that set industry benchmarks.
            </p>
            <p className="text-[#716B67] text-base md:text-lg leading-relaxed mb-8">
              Our mission is to combine cutting-edge technology with unparalleled service, ensuring health and wellness for millions of households and businesses across the nation.
            </p>
            
            {/* Value checklist */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {["ISO Certified Systems", "100% Genuine Components", "Doorstep AMC Support", "Custom Industrial Plants"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D1510]">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6300] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#DBD7D4]">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-11 h-11 rounded-full border-2 border-white bg-[#EDE9E6] flex items-center justify-center overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i + 12}`} alt="Customer" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-[#FF6300] text-base tracking-wider">★★★★★</div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#716B67] mt-0.5">Trusted by 50,000+ families</p>
              </div>
              <div className="sm:ml-auto">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D1510] hover:text-[#FF6300] transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4 text-[#FF6300]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Rich Multi-Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              
              {/* Primary Large Image */}
              <div className="col-span-8 relative rounded-2xl overflow-hidden border border-[#DBD7D4] bg-[#F5F0ED] shadow-md group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/products/ro-purifiers/ashma-ro-lifestyle.jpg"
                    alt="Ashma India Pure Water Lifestyle"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                </div>
                <div className="p-3 bg-white border-t border-[#DBD7D4] flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D1510]">Pure Family Health</span>
                  <span className="w-2 h-2 rounded-full bg-[#FF6300]" />
                </div>
              </div>

              {/* Secondary Stacked Images */}
              <div className="col-span-4 space-y-4">
                <div className="relative rounded-xl overflow-hidden border border-[#DBD7D4] bg-[#F5F0ED] shadow-sm group">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/images/products/ro-purifiers/ashma-salto-kitchen-lifestyle.jpg"
                      alt="Ashma RO Kitchen Installation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="200px"
                    />
                  </div>
                  <div className="p-2 bg-white text-[10px] font-bold uppercase text-center text-[#716B67] border-t border-[#DBD7D4]">
                    Modern Kitchen
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden border border-[#DBD7D4] bg-[#F5F0ED] shadow-sm group">
                  <div className="relative aspect-square w-full">
                    <Image
                      src="/images/company-gallery/gallery-2.jpeg"
                      alt="Ashma Certified Installation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="200px"
                    />
                  </div>
                  <div className="p-2 bg-white text-[10px] font-bold uppercase text-center text-[#716B67] border-t border-[#DBD7D4]">
                    Field Verified
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const isBlue = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "p-8 rounded-2xl bg-[#F5F0ED] border border-[#DBD7D4] flex flex-col justify-between hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md",
        isBlue ? "hover:border-[#008CE2]" : "hover:border-[#FF6300]"
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-xl bg-white border border-[#DBD7D4] flex items-center justify-center mb-6 transition-colors shadow-sm",
        isBlue 
          ? "text-[#008CE2] group-hover:bg-[#008CE2] group-hover:text-white group-hover:border-[#008CE2]"
          : "text-[#FF6300] group-hover:bg-[#FF6300] group-hover:text-white group-hover:border-[#FF6300]"
      )}>
        <stat.icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-3xl sm:text-4xl font-black text-[#1D1510] tracking-tight mb-1">
          {stat.value}
        </h4>
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#716B67]">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}
