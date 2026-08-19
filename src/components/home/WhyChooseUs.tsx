"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ShieldCheck, Zap, PenTool, ThumbsUp, Factory, HeadphonesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    title: "Certified Experts",
    description: "Our technicians are highly trained and certified to handle all types of purifiers and industrial plants.",
    icon: ShieldCheck,
  },
  {
    title: "Genuine Spare Parts",
    description: "We use only 100% authentic and genuine spare parts to ensure the longevity of your appliances.",
    icon: Zap,
  },
  {
    title: "Fast Service Support",
    description: "Experience lightning-fast service support with our dedicated 24/7 customer helpline.",
    icon: HeadphonesIcon,
  },
  {
    title: "Comprehensive AMC",
    description: "Tailored Annual Maintenance Contracts that offer peace of mind and hassle-free operation all year round.",
    icon: PenTool,
  },
  {
    title: "Industrial Expertise",
    description: "Specialized in large-scale commercial and industrial RO plant installations and maintenance.",
    icon: Factory,
  },
  {
    title: "100% Satisfaction",
    description: "Our core priority is customer satisfaction, backed by guaranteed service quality.",
    icon: ThumbsUp,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative bg-gray-50 dark:bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-sm font-semibold text-ashma-blue tracking-widest uppercase mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-ashma-text dark:text-white mb-6">
              The AshmaIndia Advantage
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              We go beyond just selling products. We build lasting relationships through unmatched service quality, genuine parts, and expert support. Experience the promise of health with every drop.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-ashma-blue/20 blur-3xl rounded-full scale-75 transform -translate-y-4" />
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl bg-white dark:bg-white/5 flex items-center justify-center p-2">
              <img 
                src="/images/products/ro-purifiers/ashma-ro-health-promise.jpg" 
                alt="Ashma India Health Promise" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <TiltCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ feature, index }: { feature: any; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${useMotionTemplate`${mouseX}*100%`} ${useMotionTemplate`${mouseY}*100%`},
              var(--color-ashma-blue) 0%,
              transparent 80%
            )
          `,
          mixBlendMode: "overlay",
        }}
      />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-ashma-light dark:bg-white/10 flex items-center justify-center mb-6 text-ashma-blue dark:text-white group-hover:scale-110 transition-transform duration-300">
          <feature.icon className="w-7 h-7" />
        </div>
        <h4 className="text-xl font-heading font-bold text-ashma-text dark:text-white mb-3 group-hover:text-ashma-blue transition-colors">
          {feature.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
