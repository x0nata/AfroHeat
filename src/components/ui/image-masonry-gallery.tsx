"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageMasonryGalleryProps {
  images: GalleryImage[];
  className?: string;
  columnCount?: number;
  gapSize?: "sm" | "md" | "lg";
  enableHoverEffect?: boolean;
  enableClickZoom?: boolean;
}

export default function ImageMasonryGallery({
  images,
  className,
  columnCount = 3,
  gapSize = "md",
  enableHoverEffect = true,
  enableClickZoom = true
}: ImageMasonryGalleryProps) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6"
  };

  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4"
  };

  const handleImageClick = (src: string) => {
    if (enableClickZoom) {
      setExpandedImage(src);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "grid",
          columnClasses[columnCount as keyof typeof columnClasses],
          gapClasses[gapSize],
          "w-full"
        )}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => handleImageClick(image.src)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={enableHoverEffect ? { y: -10, scale: 1.02 } : {}}
            whileTap={{ scale: 0.98 }}
          >
            <div className="aspect-square overflow-hidden rounded-xl">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                style={{ objectPosition: 'top' }}
              />
            </div>
            
            {/* Overlay with title/description on hover */}
            <AnimatePresence>
              {enableHoverEffect && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {image.title && (
                    <motion.h3 
                      className="text-white font-bold text-lg"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      {image.title}
                    </motion.h3>
                  )}
                  {image.description && (
                    <motion.p 
                      className="text-white/80 text-sm mt-1"
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {image.description}
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Expanded Image Modal */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
          >
            <motion.div
              className="relative max-w-6xl max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <img
                src={expandedImage}
                alt="Expanded view"
                className="max-w-full max-h-[80vh] object-contain"
              />
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedImage(null);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}