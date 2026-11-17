"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const HERO_MODELS = [
  {
    id: "flagship",
    name: "Flagship Lineup",
    badge: "Premium Series",
    image: "/images/products/ro-purifiers/ashma-ream-salto-alcea-lineup.jpg",
    specs: ["Multi-Stage RO+UV+TDS", "12-15 LPH Flow Rate", "Copper & Alkaline"],
  },
  {
    id: "salto",
    name: "Ashma Salto",
    badge: "Zinc & Copper Infused",
    image: "/images/products/ro-purifiers/ashma-salto-ro.jpg",
    specs: ["12L Water Storage", "Active Minerals", "SMPS Power Supply"],
  },
  {
    id: "alcea",
    name: "Ashma Alcea",
    badge: "Smart Filtration",
    image: "/images/products/ro-purifiers/ashma-alcea-ro.jpg",
    specs: ["RO+UV+UF+Minerals", "Food-Grade Body", "Leak-Proof Design"],
  },
];

export default function Hero() {
  const [activeModel, setActiveModel] = useState(HERO_MODELS[0]);

  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 overflow-hidden bg-[#FFFAF7] flex flex-col justify-center border-b border-[#DBD7D4]">
      {/* Warm & Pure Water Ambient Flares */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#008CE2]/8 blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#242E7F]/7 blur-[160px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 max-w-3xl text-left"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#008CE2]/30 bg-[#F0F7FF] text-[#008CE2] text-xs font-bold tracking-[0.25em] uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#008CE2] animate-pulse" />
              Certified Pure Water Solutions
            </div>
            
            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black uppercase text-[#1D1510] tracking-tight leading-[1.08] mb-6">
              Pure Water.<br />
              <span className="text-[#008CE2]">Smart Engineering.</span><br />
              <span className="text-[#FF6300]">Trusted Living.</span>
            </h1>
            
            {/* Body copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#716B67] mb-10 max-w-2xl leading-relaxed">
              Providing advanced water purification, commercial RO systems, industrial water treatment solutions, chimney services, and maintenance support across India.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#FF6300] hover:bg-[#E05500] text-white rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(255,99,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,99,0,0.4)]"
              >
                <span className="flex items-center gap-2">
                  Explore Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#1D1510] rounded-full font-bold uppercase tracking-wider text-xs md:text-sm border-2 border-[#1D1510] hover:bg-[#1D1510] hover:text-white transition-all duration-300"
              >
                Request Service
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="mt-12 pt-8 border-t border-[#DBD7D4] grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#008CE2]">50K+</div>
                <div className="text-xs uppercase tracking-wider text-[#716B67] font-semibold mt-1">Families Served</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#242E7F]">15+</div>
                <div className="text-xs uppercase tracking-wider text-[#716B67] font-semibold mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#FF6300]">24/7</div>
                <div className="text-xs uppercase tracking-wider text-[#716B67] font-semibold mt-1">Direct Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Res Real Product Showcase (Instant & Responsive) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Product Card Container */}
            <div className="relative rounded-2xl bg-[#FFFFFF] border border-[#DBD7D4] p-6 sm:p-8 shadow-[0_20px_50px_rgba(29,21,16,0.08)]">
              
              {/* Model Switcher Tabs */}
              <div className="flex items-center justify-between gap-2 p-1.5 rounded-xl bg-[#F5F0ED] border border-[#DBD7D4] mb-6">
                {HERO_MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setActiveModel(model)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      activeModel.id === model.id
                        ? "bg-[#FFFFFF] text-[#FF6300] shadow-sm"
                        : "text-[#716B67] hover:text-[#1D1510]"
                    }`}
                  >
                    {model.name}
                  </button>
                ))}
              </div>

              {/* Product Image Frame */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#FAF7F5] border border-[#E8E4E1]">
                <div className="absolute inset-4 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeModel.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={activeModel.image}
                        alt={activeModel.name}
                        fill
                        priority
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#DBD7D4] text-[#1D1510] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 rounded-full bg-[#FF6300]" />
                  {activeModel.badge}
                </div>
              </div>

              {/* Specs Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {activeModel.specs.map((spec, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#F5F0ED] text-[#1D1510] border border-[#DBD7D4]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6300]" />
                    {spec}
                  </span>
                ))}
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-6 pt-4 border-t border-[#DBD7D4] flex items-center justify-between text-xs text-[#716B67]">
                <span className="flex items-center gap-1.5 font-bold uppercase text-[#1D1510]">
                  <ShieldCheck className="w-4 h-4 text-[#FF6300]" />
                  100% Genuine Certified
                </span>
                <Link
                  href="/products/ro-purifiers"
                  className="font-bold uppercase text-[#FF6300] hover:text-[#E05500] transition-colors flex items-center gap-1"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#716B67] font-bold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#FF6300]" />
        </motion.div>
      </div>
    </section>
  );
}
