"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function ContactSnippet() {
  return (
    <section className="py-24 bg-ashma-blue relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 C20,60 40,30 60,70 C80,10 90,80 100,50 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="max-w-2xl text-white">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Need Expert Assistance?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Whether you need a new installation, emergency repairs, or an Annual Maintenance Contract, our expert technicians are just a call away.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-ashma-blue px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Book a Service <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="tel:+918101663132" 
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                <PhoneCall className="w-5 h-5" /> Call +91 8101663132
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-auto flex-shrink-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-sm bg-white dark:bg-black rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-xl font-heading font-bold text-ashma-text dark:text-white mb-6">Request a Callback</h3>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-ashma-blue transition-all" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-ashma-blue transition-all" />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-ashma-blue transition-all text-gray-500">
                    <option value="">Select Service</option>
                    <option value="installation">Installation</option>
                    <option value="repair">Repair</option>
                    <option value="amc">AMC</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-ashma-text dark:bg-white text-white dark:text-black font-bold py-3 rounded-xl hover:bg-black dark:hover:bg-gray-200 transition-colors">
                  Submit Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
