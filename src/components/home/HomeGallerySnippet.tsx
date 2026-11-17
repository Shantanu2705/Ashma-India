"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ZoomIn } from "lucide-react";

const HIGHLIGHT_PHOTOS = [
  { src: "/images/company-gallery/gallery-1.jpeg", label: "Customer RO Handover" },
  { src: "/images/company-gallery/gallery-8.jpeg", label: "Commercial Setup" },
  { src: "/images/company-gallery/gallery-14.jpeg", label: "Kitchen Chimney Fitment" },
  { src: "/images/company-gallery/gallery-22.jpeg", label: "Industrial RO Unit" },
  { src: "/images/company-gallery/gallery-31.jpeg", label: "Domestic Water System" },
  { src: "/images/company-gallery/gallery-38.jpeg", label: "Siliguri Installation" },
];

export default function HomeGallerySnippet() {
  return (
    <section className="py-24 bg-[#FFFFFF] text-[#1D1510] border-b border-[#DBD7D4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#FF6300] block mb-4">
              Real Installations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#1D1510] tracking-tight leading-tight">
              Trusted Across Homes & Businesses
            </h2>
            <p className="text-[#716B67] text-base md:text-lg leading-relaxed mt-2">
              Browse actual photographs from our recent doorstep installations, commercial plant setups, and happy customer handovers.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-[#1D1510] hover:bg-[#FF6300] text-white text-xs uppercase font-bold tracking-wider px-7 py-3.5 transition-colors duration-300 shadow-md shrink-0"
          >
            <span>Explore Full Gallery (50+ Photos)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6-Photo Visual Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {HIGHLIGHT_PHOTOS.map((photo, idx) => (
            <Link
              key={idx}
              href="/gallery"
              className="group relative rounded-xl overflow-hidden bg-[#F5F0ED] border border-[#DBD7D4] hover:border-[#FF6300] transition-all duration-300 shadow-sm hover:shadow-lg aspect-[3/4]"
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 220px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1510]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white line-clamp-1">{photo.label}</span>
                <span className="text-[9px] text-[#FF6300] font-bold uppercase tracking-widest mt-0.5 flex items-center gap-1">
                  View <ZoomIn className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

