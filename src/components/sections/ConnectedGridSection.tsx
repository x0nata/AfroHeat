import React from 'react';
import { motion } from 'framer-motion';

interface ConnectedGridSectionProps {
  topLeftTitle: string;
  topLeftDescription: string;
  topRightImage: string;
  bottomLeftImage: string;
  bottomRightTitle: string;
  bottomRightDescription: string;
}

const ConnectedGridSection: React.FC<ConnectedGridSectionProps> = ({
  topLeftTitle,
  topLeftDescription,
  topRightImage,
  bottomLeftImage,
  bottomRightTitle,
  bottomRightDescription
}) => {
  return (
    <section className="w-full bg-background">
      <div className="grid grid-cols-2 grid-rows-2 gap-0">
        {/* Top Left - Image (switched) */}
        <div className="relative overflow-hidden group h-[455px]">
          <img
            src={topRightImage}
            alt="Women's Fitness Bootcamp"
            className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
    
        {/* Top Right - Text Content (switched) */}
        <div className="flex flex-col items-start justify-start p-4 sm:p-8 lg:p-16 bg-background h-[455px] overflow-hidden">
          <div className="max-w-md w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              {topLeftTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              {topLeftDescription}
            </p>
            <motion.button
              className="bg-primary text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">See Our Packages</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </div>
    
        {/* Bottom Left - Text Content (flipped) */}
        <div className="flex flex-col items-start justify-start p-4 sm:p-8 lg:p-16 bg-background h-[455px] overflow-hidden">
          <div className="max-w-md w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              {bottomRightTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              {bottomRightDescription}
            </p>
            <motion.button
              className="bg-primary text-white px-4 sm:px-8 py-2 sm:py-4 rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">See Our Schedule</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </div>
    
        {/* Bottom Right - Image (flipped) */}
        <div className="relative overflow-hidden group h-[455px]">
          <img
            src={bottomLeftImage}
            alt="Our Approach"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ConnectedGridSection;