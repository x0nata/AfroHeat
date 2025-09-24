import React from 'react';
import { motion } from 'framer-motion';

interface ConnectedGridSectionProps {
  topLeftTitle: string;
  topLeftDescription: string;
  topRightImage: string;
  bottomLeftImage: string;
  bottomRightDescription: string;
}

const ConnectedGridSection: React.FC<ConnectedGridSectionProps> = ({
  topLeftTitle,
  topLeftDescription,
  topRightImage,
  bottomLeftImage,
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
          <div className="max-w-md w-full flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              {topLeftTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-3 leading-relaxed">
              {topLeftDescription}
            </p>
            <motion.button
              className="bg-primary text-white px-8 sm:px-8 py-4 sm:py-4 rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group text-sm sm:text-base"
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
              <motion.button
              className="bg-primary text-white px-8 sm:px-8 py-4 sm:py-4 rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group text-sm sm:text-base"
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
    
        {/* Bottom Left  */}
        <div className="flex flex-col items-start justify-start p-4 sm:p-8 lg:p-16 bg-background h-[455px] overflow-hidden">
          <div className="max-w-md w-full">
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-4 mt-10 leading-relaxed">
              {bottomRightDescription}
            </p>
            <div className="mt-6 w-full flex justify-start">
              <svg className="w-24 h-6" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 10 Q 10 2 20 10 Q 30 18 40 10 Q 50 2 60 10 Q 70 18 80 10 L 90 10 M 90 10 L 100 10" stroke="#8c1e81" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <polygon points="95,7 100,10 95,13" fill="#8c1e81"/>
              </svg>
            </div>
          </div>
        </div>
    
        {/* Bottom Right */}
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