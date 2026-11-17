"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/lib/gallery-data";

export default function GalleryClient() {
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, galleryImages.length));
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {galleryImages.slice(0, visibleCount).map((src, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedImage(src)}
            className="relative break-inside-avoid rounded-xl overflow-hidden group cursor-pointer border border-[#DBD7D4] hover:border-[#FF6300] bg-[#FFFFFF] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="relative w-full h-auto bg-[#F5F0ED]">
              <Image 
                src={src} 
                alt={`Ashma India Gallery Image ${idx + 1}`}
                width={600}
                height={800}
                loading={idx < 4 ? "eager" : "lazy"}
                className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1510]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FFFFFF]">Ashma Installation 0{idx + 1}</span>
                <span className="p-1.5 rounded-full bg-[#FF6300] text-white shadow-sm">
                  <ZoomIn className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < galleryImages.length && (
        <div className="mt-16 text-center">
          <button 
            onClick={loadMore}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#FF6300] hover:bg-[#E05500] text-white font-bold uppercase tracking-wider text-xs transition-all shadow-[0_4px_16px_rgba(255,99,0,0.25)] cursor-pointer"
          >
            Load More Images ({galleryImages.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D1510]/75 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 sm:-top-12 sm:right-0 z-50 p-2.5 rounded-full bg-[#FFFFFF] border border-[#DBD7D4] text-[#1D1510] hover:text-[#FF6300] hover:border-[#FF6300] transition-colors cursor-pointer shadow-lg"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative w-full h-full max-h-[85vh] rounded-2xl overflow-hidden border border-[#DBD7D4] bg-[#FFFFFF] shadow-2xl">
                <Image 
                  src={selectedImage} 
                  alt="Expanded Gallery Preview"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
