"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery-data";

export default function GalleryClient() {
  const [visibleCount, setVisibleCount] = useState(12);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, galleryImages.length));
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {galleryImages.slice(0, visibleCount).map((src, idx) => (
          <div 
            key={idx} 
            className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-auto bg-gray-100 dark:bg-white/5">
              <Image 
                src={src} 
                alt={`Ashma India Gallery Image ${idx + 1}`}
                width={600}
                height={800}
                loading={idx < 4 ? "eager" : "lazy"}
                className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {visibleCount < galleryImages.length && (
        <div className="mt-16 text-center">
          <button 
            onClick={loadMore}
            className="px-8 py-3 rounded-full bg-ashma-blue text-white font-medium hover:bg-ashma-dark transition-colors shadow-lg shadow-ashma-blue/20"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
