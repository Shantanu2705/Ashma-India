"use client";

import { motion } from "framer-motion";
import { Wrench, RefreshCw, Activity, CheckCircle, Wind, Droplets } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Installation Services",
    description: "Professional setup of RO systems, industrial plants, and kitchen chimneys.",
    icon: CheckCircle,
  },
  {
    title: "Repair & Maintenance",
    description: "Prompt troubleshooting and repair for all water purification systems.",
    icon: Wrench,
  },
  {
    title: "Annual Maintenance (AMC)",
    description: "Comprehensive yearly contracts for hassle-free performance.",
    icon: RefreshCw,
  },
  {
    title: "Water Testing",
    description: "Advanced water quality analysis for safe consumption and industrial use.",
    icon: Activity,
  },
  {
    title: "Chimney Cleaning",
    description: "Deep cleaning and service for all types of kitchen chimneys.",
    icon: Wind,
  },
  {
    title: "Pool Pump Maintenance",
    description: "Expert servicing to keep your pool water crystal clear and safe.",
    icon: Droplets,
    image: "/images/products/pool-pumps/ashma-pool-pump.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 relative bg-gray-50 dark:bg-[#050505]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-ashma-blue tracking-widest uppercase mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-ashma-text dark:text-white mb-6">
            Expert Care, Anytime.
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            From seamless installations to proactive maintenance, our certified technicians ensure your systems run flawlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-ashma-blue/10 overflow-hidden flex flex-col"
            >
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-ashma-blue/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {service.image ? (
                <div 
                  className="w-full h-32 rounded-xl mb-6 bg-contain bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-ashma-grey dark:bg-white/10 flex items-center justify-center mb-6 text-ashma-blue dark:text-white group-hover:bg-ashma-blue group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
              )}
              
              <h4 className="text-xl font-heading font-bold text-ashma-text dark:text-white mb-3 mt-auto">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                {service.description}
              </p>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center text-sm font-semibold text-ashma-blue hover:text-ashma-dark transition-colors"
              >
                Book Service <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
