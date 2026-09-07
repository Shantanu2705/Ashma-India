"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const HeroBackground = dynamic(() => import("./Hero3DScene").then(mod => mod.HeroBackground), { ssr: false });
const HeroModel = dynamic(() => import("./Hero3DScene").then(mod => mod.HeroModel), { ssr: false });

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-ashma-grey dark:bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60 dark:opacity-40">
        <HeroBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full glass border-ashma-blue/20 text-ashma-blue text-sm font-semibold tracking-wider uppercase"
            >
              Premium Water Solutions
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-ashma-text dark:text-white leading-tight mb-8">
              Pure Water.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ashma-blue to-ashma-dark">Smart Technology.</span><br />
              Trusted Solutions.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl leading-relaxed">
              Providing advanced water purification, commercial RO systems, industrial water treatment solutions, chimney services, and maintenance support across India.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Link
                href="/products"
                className="group w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-4 bg-ashma-blue text-white rounded-full font-medium overflow-hidden transition-all hover:bg-ashma-dark shadow-lg shadow-ashma-blue/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-white/10 text-ashma-text dark:text-white rounded-full font-medium border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/20 transition-all"
              >
                Request Service
              </Link>
            </div>
          </motion.div>

          {/* 3D Model Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full hidden sm:block cursor-grab active:cursor-grabbing"
          >
            <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-xs text-white/70 border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-ashma-blue animate-pulse" />
              Drag to Rotate
            </div>
            <HeroModel />
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Scroll Discover</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-ashma-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
}
