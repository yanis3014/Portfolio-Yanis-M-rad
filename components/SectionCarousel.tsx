"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

interface SectionCarouselProps {
  images: string[];
  title: string;
  sectionKey: string;
  onImageClick: (imageIdx: number) => void;
}

export default function SectionCarousel({ images, title, sectionKey, onImageClick }: SectionCarouselProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const prev = () => {
    setCurrentIdx((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
  };

  if (!images || images.length === 0) return null;

  const carouselContent = (
    <>
      <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden border border-primary/20 bg-card dark:bg-card-dark shadow-lg group cursor-pointer">
        <Image
          src={images[currentIdx]}
          alt={`${title} — capture ${currentIdx + 1}`}
          fill
          sizes="(min-width: 1024px) 60vw, 90vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 dark:bg-black/90 p-3 rounded-full shadow-lg">
              <Expand size={20} className="text-text dark:text-text-dark" />
            </div>
          </div>
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 dark:bg-card-dark/80 shadow-lg hover:bg-card dark:hover:bg-card-dark hover:scale-110 transition-all duration-200 z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft size={18} className="text-text dark:text-text-dark" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 dark:bg-card-dark/80 shadow-lg hover:bg-card dark:hover:bg-card-dark hover:scale-110 transition-all duration-200 z-10"
            aria-label="Image suivante"
          >
            <ChevronRight size={18} className="text-text dark:text-text-dark" />
          </button>
          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIdx(i);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIdx ? 'bg-accent w-5' : 'bg-white/60'
                }`}
                aria-label={`Aller à l'image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </>
  );

  return (
    <div className="relative w-full max-w-4xl mx-auto" onClick={() => onImageClick(currentIdx)}>
      {isMounted ? (
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {carouselContent}
        </motion.div>
      ) : (
        <div>
          {carouselContent}
        </div>
      )}
    </div>
  );
}
