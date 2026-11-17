"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGalleryProps {
  mainImage: string;
  name: string;
  gallery: string[];
}

export default function ProductGallery({ mainImage, name, gallery }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage);

  return (
    <div className="space-y-6">
      {/* Active Display Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#DBD7D4] p-4 shadow-sm flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full"
          >
            <Image 
              src={selectedImage} 
              alt={name}
              fill
              priority
              className="object-contain p-4"
              sizes="(max-width: 1024px) 100vw, 550px"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Thumbnails */}
      {gallery && gallery.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {gallery.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedImage(img)}
              className={`relative aspect-square rounded-xl overflow-hidden bg-[#FFFFFF] border transition-all cursor-pointer p-1.5 ${
                selectedImage === img
                  ? "border-[#FF6300] ring-2 ring-[#FF6300]/40 shadow-sm"
                  : "border-[#DBD7D4] hover:border-[#FF6300] opacity-80 hover:opacity-100"
              }`}
            >
              <Image 
                src={img} 
                alt={`${name} thumbnail ${idx + 1}`}
                fill
                className="object-contain p-1"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
