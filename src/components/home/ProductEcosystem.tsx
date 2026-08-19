"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  {
    title: "RO Water Purifiers",
    category: "Residential",
    description: "Advanced multi-stage purification for your home.",
    image: "/images/products/ro-purifiers/ashma-ream-salto-alcea-lineup.jpg",
    href: "/products/ro-purifiers",
    className: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "Industrial RO Plants",
    category: "Commercial",
    description: "High-capacity purification for industries.",
    image: "/images/products/commercial-ro/industrial-ro-plant-tanks.jpg",
    href: "/products/commercial-ro",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Kitchen Chimneys",
    category: "Home Appliances",
    description: "Smoke-free cooking with powerful suction.",
    image: "/images/products/chimneys/ashma-eco-chimney-outsmart.jpg",
    href: "/products/chimneys",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Water Dispensers",
    category: "Accessories",
    description: "Hydrate with Purified water Dispenser.",
    image: "/images/products/dispensers/ashma-water-dispenser.jpg",
    href: "/products/dispensers",
    className: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function ProductEcosystem() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold text-ashma-blue tracking-widest uppercase mb-4">Our Ecosystem</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-ashma-text dark:text-white leading-tight">
              Premium Solutions for Every Need.
            </h3>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-2 text-ashma-blue font-semibold hover:text-ashma-dark transition-colors group"
          >
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn("group relative rounded-3xl overflow-hidden", product.className)}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-ashma-light mb-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {product.category}
                </span>
                <h4 className="text-2xl font-heading font-bold mb-2">
                  {product.title}
                </h4>
                <p className="text-sm text-gray-300 mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {product.description}
                </p>
                <Link 
                  href={product.href}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-ashma-blue hover:border-ashma-blue transition-colors opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300 delay-100"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
