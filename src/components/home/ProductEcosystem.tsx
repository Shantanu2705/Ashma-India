"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PRODUCTS = [
  {
    title: "RO Water Purifiers",
    category: "Residential",
    description: "Advanced multi-stage purification for your home with alkaline and copper infusion.",
    image: "/images/products/ro-purifiers/ashma-ream-salto-alcea-lineup.jpg",
    href: "/products/ro-purifiers",
    className: "col-span-1 md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    title: "Industrial RO Plants",
    category: "Commercial",
    description: "High-capacity purification for factories, hotels, and hospitals.",
    image: "/images/products/commercial-ro/industrial-ro-plant-tanks.jpg",
    href: "/products/commercial-ro",
    className: "col-span-1 md:col-span-1 md:row-span-1",
  },
  {
    title: "Kitchen Chimneys",
    category: "Home Appliances",
    description: "Smoke-free cooking with powerful suction and auto-clean sensors.",
    image: "/images/products/chimneys/ashma-eco-chimney-outsmart.jpg",
    href: "/products/chimneys",
    className: "col-span-1 md:col-span-1 md:row-span-1",
  },
  {
    title: "Water Dispensers & Softeners",
    category: "Accessories",
    description: "Hydrate with hot, cold, and normal water plus hard-water softeners.",
    image: "/images/products/dispensers/ashma-water-dispenser.jpg",
    href: "/products/dispensers",
    className: "col-span-1 md:col-span-2 md:row-span-1",
  },
];

export default function ProductEcosystem() {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF] text-[#1D1510] border-b border-[#DBD7D4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#FF6300] block mb-4">
              Our Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1D1510] tracking-tight leading-tight">
              Premium Solutions for Every Need.
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-[#1D1510] hover:bg-[#FF6300] text-white text-xs uppercase font-bold tracking-wider px-7 py-3.5 transition-colors duration-300 shadow-md"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group relative rounded-2xl overflow-hidden border border-[#DBD7D4] bg-[#F5F0ED] hover:border-[#FF6300] transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 shadow-sm hover:shadow-lg",
                product.className
              )}
            >
              {/* Product Info Header */}
              <div className="z-10 mb-4">
                <span className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.18em] mb-2 inline-block px-3 py-1 rounded-full border shadow-2xs",
                  product.category === "Residential" && "bg-[#F0F7FF] text-[#008CE2] border-[#BAE6FD]",
                  product.category === "Commercial" && "bg-[#F0F4FF] text-[#242E7F] border-[#C7D7FE]",
                  product.category === "Home Appliances" && "bg-[#FFF0E6] text-[#FF6300] border-[#FFD8BF]",
                  product.category === "Accessories" && "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]"
                )}>
                  {product.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1D1510] mb-2 group-hover:text-[#008CE2] transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-[#716B67] max-w-md leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Image Showcase (Clean, Bright, Fully Visible) */}
              <div className={cn(
                "relative w-full rounded-xl overflow-hidden bg-[#FFFFFF] border border-[#DBD7D4] p-4 flex items-center justify-center my-4 group-hover:scale-[1.02] transition-transform duration-500",
                product.featured ? "aspect-[16/10] md:aspect-[4/3] min-h-[220px]" : "aspect-[16/9] min-h-[160px]"
              )}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Bottom Action */}
              <div className="z-10 pt-4 border-t border-[#DBD7D4]/60 flex items-center justify-between">
                <Link 
                  href={product.href}
                  className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#FF6300] hover:text-[#E05500] transition-colors"
                >
                  <span>Explore Lineup</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#716B67]">
                  Certified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
