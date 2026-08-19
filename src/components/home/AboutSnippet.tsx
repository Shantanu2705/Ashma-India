"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Droplet, Award, Users, ShieldCheck } from "lucide-react";

const STATS = [
  { label: "Happy Customers", value: "50K+", icon: Users },
  { label: "Years Experience", value: "15+", icon: Award },
  { label: "Installations", value: "100K+", icon: Droplet },
  { label: "Service Centers", value: "250+", icon: ShieldCheck },
];

export default function AboutSnippet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-white dark:bg-black/50">
      
      {/* Dynamic Background Image overlay for premium feel */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-5 dark:opacity-10 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('/images/products/ro-purifiers/ashma-ro-lifestyle.jpg')` }}
      />
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-transparent to-white dark:to-[#050505] pointer-events-none" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white dark:from-[#050505] to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div style={{ opacity, y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}>
            <h2 className="text-sm font-semibold text-ashma-blue tracking-widest uppercase mb-4">About AshmaIndia</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-ashma-text dark:text-white mb-6 leading-tight">
              Pioneering Water Purity Since 2008.
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              At AshmaIndia, we believe that access to pure water is a fundamental right. With over a decade of excellence, we have been delivering state-of-the-art RO water purifiers, commercial plants, and industrial water treatment solutions that set industry benchmarks.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              Our mission is to combine cutting-edge technology with unparalleled service, ensuring health and wellness for millions of households and businesses across the nation.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-black bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 text-lg">★★★★★</div>
                <p className="text-sm font-medium text-gray-500">Trusted by 50,000+ families</p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-ashma-blue/20 blur-3xl rounded-full pointer-events-none" />
            
            {STATS.map((stat, index) => {
              return <StatCard key={index} stat={stat} index={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
    >
      <div className="w-16 h-16 rounded-2xl bg-ashma-light dark:bg-ashma-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <stat.icon className="w-8 h-8 text-ashma-blue" />
      </div>
      <h4 className="text-4xl font-heading font-bold text-ashma-text dark:text-white mb-2">{stat.value}</h4>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</p>
    </motion.div>
  );
}
