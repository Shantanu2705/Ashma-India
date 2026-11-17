"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, PenTool, ThumbsUp, Factory, HeadphonesIcon, Award, CheckCircle } from "lucide-react";
import Image from "next/image";

const FEATURES = [
  {
    title: "Certified Experts",
    description: "Our technicians are highly trained and certified to handle all types of purifiers and industrial plants.",
    icon: ShieldCheck,
    tag: "100+ Trained Engineers",
  },
  {
    title: "Genuine Spare Parts",
    description: "We use only 100% authentic and genuine spare parts to ensure the longevity of your appliances.",
    icon: Zap,
    tag: "Direct Manufacturer Supply",
  },
  {
    title: "Fast Service Support",
    description: "Experience lightning-fast service support with our dedicated 24/7 customer helpline.",
    icon: HeadphonesIcon,
    tag: "Average 4-Hour Response",
  },
  {
    title: "Comprehensive AMC",
    description: "Tailored Annual Maintenance Contracts that offer peace of mind and hassle-free operation all year round.",
    icon: PenTool,
    tag: "3 Free Periodic Visits",
  },
  {
    title: "Industrial Expertise",
    description: "Specialized in large-scale commercial and industrial RO plant installations and maintenance.",
    icon: Factory,
    tag: "Up to 10,000 LPH Capacity",
  },
  {
    title: "100% Satisfaction",
    description: "Our core priority is customer satisfaction, backed by guaranteed service quality.",
    icon: ThumbsUp,
    tag: "Money-Back Quality Promise",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 relative bg-[#FFFAF7] text-[#1D1510] border-b border-[#DBD7D4] overflow-hidden">
      {/* Subtle warm & water blue flare */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#008CE2]/6 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#008CE2] block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1D1510] tracking-tight mb-6 leading-tight">
              The AshmaIndia Advantage
            </h2>
            <p className="text-[#716B67] text-base md:text-lg leading-relaxed mb-6">
              We go beyond just selling products. We build lasting relationships through unmatched service quality, genuine parts, and expert support. Experience the promise of health with every drop.
            </p>
            <div className="flex items-center gap-6 p-4 rounded-xl bg-[#F0F7FF] border border-[#BAE6FD] max-w-md shadow-sm">
              <Award className="w-10 h-10 text-[#008CE2] shrink-0" />
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F265C]">Government & Commercial Approved</h4>
                <p className="text-xs text-[#0284C7]">Trusted across Siliguri, North Bengal, and pan-India institutions.</p>
              </div>
            </div>
          </div>
          
          {/* Dual Real Photo Showcase */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            
            {/* Image 1: Domestic Health Promise */}
            <div className="relative rounded-2xl overflow-hidden border border-[#DBD7D4] bg-[#FFFFFF] p-2.5 shadow-md group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F5F0ED]">
                <Image 
                  src="/images/products/ro-purifiers/ashma-ro-health-promise.jpg" 
                  alt="Ashma India Health Promise" 
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
              <div className="p-2.5 text-center">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#1D1510] block">Domestic Pure Care</span>
                <span className="text-[10px] text-[#716B67] uppercase tracking-wider">Multi-Stage RO+UV</span>
              </div>
            </div>

            {/* Image 2: Industrial RO Setup */}
            <div className="relative rounded-2xl overflow-hidden border border-[#DBD7D4] bg-[#FFFFFF] p-2.5 shadow-md group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F5F0ED]">
                <Image 
                  src="/images/products/commercial-ro/commercial-ro-plant-blue-vessels.jpg" 
                  alt="Ashma Industrial Plant Installation" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
              <div className="p-2.5 text-center">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#1D1510] block">Commercial Plants</span>
                <span className="text-[10px] text-[#716B67] uppercase tracking-wider">Heavy-Duty FRP Vessels</span>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Grid with Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-8 rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] hover:border-[#FF6300] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF0E6] border border-[#FF6300]/20 text-[#FF6300] flex items-center justify-center group-hover:bg-[#FF6300] group-hover:text-white transition-colors duration-300 shadow-sm">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F5F0ED] text-[#716B67]">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-[#1D1510] mb-3 group-hover:text-[#FF6300] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#716B67] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F5F0ED] flex items-center justify-between text-[11px] uppercase tracking-widest text-[#716B67]">
                <span className="flex items-center gap-1 font-bold text-[#1D1510]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF6300]" />
                  Standard
                </span>
                <span className="text-[#FF6300] font-bold">0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
