"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Cpu, Droplet, Sparkles, Sliders, CheckCircle2 } from "lucide-react";

const ANATOMY_POINTS = [
  {
    id: "membrane",
    title: "Multi-Stage RO Membrane",
    icon: Droplet,
    badge: "0.0001 Micron",
    badgeColor: "bg-[#F0F7FF] text-[#008CE2] border-[#BAE6FD]",
    pinColor: "bg-[#008CE2]",
    desc: "Removes dissolved solids, heavy metals, arsenic, pesticides, and bacterial contaminants with 99.9% filtration efficiency.",
    x: "50%",
    y: "14%",
  },
  {
    id: "alkaline",
    title: "Copper & Alkaline Mineral Infusion",
    icon: Sparkles,
    badge: "Active Health",
    badgeColor: "bg-[#FFF0E6] text-[#FF6300] border-[#FF6300]/20",
    pinColor: "bg-[#FF6300]",
    desc: "Recharges purified water with vital copper ions and natural alkaline minerals to balance body pH (8.0 - 8.5).",
    x: "50%",
    y: "25%",
  },
  {
    id: "uv",
    title: "Stainless Steel UV Chamber",
    icon: Cpu,
    badge: "11W Germicidal",
    badgeColor: "bg-[#F0F4FF] text-[#242E7F] border-[#C7D7FE]",
    pinColor: "bg-[#242E7F]",
    desc: "Destroys residual bacteria, viruses, and microbial pathogens with intense germicidal ultraviolet radiation.",
    x: "50%",
    y: "35%",
  },
  {
    id: "pump",
    title: "Ashma 100 GPD Booster Pump",
    icon: Sliders,
    badge: "High Pressure",
    badgeColor: "bg-[#F0F9FF] text-[#0284C7] border-[#BAE6FD]",
    pinColor: "bg-[#0284C7]",
    desc: "Engineered heavy-duty booster pump delivering consistent water pressure even in low-pressure Indian domestic pipelines.",
    x: "64%",
    y: "46%",
  },
  {
    id: "tank",
    title: "12L Food-Grade Storage Tank",
    icon: ShieldCheck,
    badge: "Airtight Seal",
    badgeColor: "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]",
    pinColor: "bg-[#008CE2]",
    desc: "UV-protected, food-grade antibacterial storage ensuring pure water stays 100% fresh with continuous water level display.",
    x: "50%",
    y: "74%",
  },
];

export default function Service3DModel() {
  const [activePoint, setActivePoint] = useState(ANATOMY_POINTS[0]);

  return (
    <section className="py-24 lg:py-32 relative bg-[#FFFFFF] text-[#1D1510] border-b border-[#DBD7D4] overflow-hidden">
      {/* Subtle Pure Water Blue Ambient Flare */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#008CE2]/8 blur-[180px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#008CE2] block mb-4">
            Next-Gen Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1D1510] tracking-tight mb-6 leading-tight">
            Anatomy of Pure Water
          </h2>
          <p className="text-[#716B67] text-base md:text-lg leading-relaxed">
            Click on any highlighted component to inspect the advanced multi-stage purification architecture engineered inside every Ashma purifier.
          </p>
        </div>

        {/* Interactive Anatomy Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Product Diagram with Hotspot Pins */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-[3/4] rounded-3xl bg-[#F5F0ED] border-2 border-[#DBD7D4] shadow-md overflow-hidden flex items-center justify-center">
              
              {/* Product Photo: Anchored with absolute inset to guarantee non-zero height */}
              <div className="absolute inset-4 sm:inset-6 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/products/ro-purifiers/ashma-anatomy-ally.jpg"
                    alt="Ashma ALLY RO Purifier Transparent Internal Anatomy"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Interactive Hotspot Pins */}
              {ANATOMY_POINTS.map((point) => {
                const isSelected = activePoint.id === point.id;
                return (
                  <button
                    key={point.id}
                    onClick={() => setActivePoint(point)}
                    style={{ left: point.x, top: point.y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 group flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      isSelected ? "scale-125" : "hover:scale-115"
                    }`}
                    aria-label={point.title}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-lg ${
                      isSelected
                        ? "bg-[#008CE2] text-white ring-4 ring-[#008CE2]/40 scale-110"
                        : "bg-[#FFFFFF] text-[#1D1510] border-2 border-[#008CE2]/50 group-hover:bg-[#008CE2] group-hover:text-white"
                    }`}>
                      +
                    </span>
                  </button>
                );
              })}

              {/* Instruction Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#FFFFFF]/95 backdrop-blur-md border border-[#DBD7D4] text-[#1D1510] text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-sm flex items-center justify-center sm:justify-start gap-2 z-20">
                <span className="w-2 h-2 rounded-full bg-[#008CE2] animate-pulse" />
                Tap Points To Inspect Components
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Technical Specification Drawer */}
          <div className="lg:col-span-5 space-y-4">
            {ANATOMY_POINTS.map((point) => {
              const isSelected = activePoint.id === point.id;
              return (
                <div
                  key={point.id}
                  onClick={() => setActivePoint(point)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#FFFFFF] border-[#008CE2] shadow-md ring-1 ring-[#008CE2]/30"
                      : "bg-[#F5F0ED] border-[#DBD7D4] hover:bg-[#FFFFFF] hover:border-[#DBD7D4]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                        isSelected ? "bg-[#008CE2] text-white shadow-sm" : "bg-white text-[#008CE2] border border-[#DBD7D4]"
                      }`}>
                        <point.icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold uppercase tracking-wider text-[#1D1510]">
                        {point.title}
                      </h3>
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border shrink-0 ${point.badgeColor}`}>
                      {point.badge}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-[#716B67] leading-relaxed mt-3 pl-12"
                      >
                        {point.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
