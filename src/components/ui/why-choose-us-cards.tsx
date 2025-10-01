import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface WhyChooseUsCardsProps {
  leftImage: string;
  middleImage: string;
  rightImage: string;
}

export default function WhyChooseUsCards({ leftImage, middleImage, rightImage }: WhyChooseUsCardsProps) {

  // Variants for the main container
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  // Variants for each card
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 10,
        damping: 15
      }
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center w-full max-w-6xl mx-auto my-8 md:my-12 lg:my-16 gap-2 md:gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="animate"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* Left Card */}
      <motion.div
        className="w-1/3 min-w-[120px] h-44 sm:h-52 md:h-64 lg:h-72 rounded-2xl shadow-xl bg-white border-2 border-primary/20 overflow-hidden relative z-10"
        custom={0}
        variants={cardVariants}
        whileHover="hover"
        style={{ 
          marginRight: '-2rem',
          zIndex: 20
        }}
      >
        <img
          src={leftImage}
          alt="Community support"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </motion.div>

      {/* Middle Card (Foreground) */}
      <motion.div
        className="w-1/3 min-w-[120px] h-44 sm:h-52 md:h-64 lg:h-72 rounded-2xl shadow-2xl bg-white border-2 border-primary/30 overflow-hidden relative z-20"
        custom={1}
        variants={cardVariants}
        whileHover="hover"
        style={{ 
          zIndex: 30
        }}
      >
        <img
          src={middleImage}
          alt="Empowering environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-30 rounded-2xl" />
      </motion.div>

      {/* Right Card */}
      <motion.div
        className="w-1/3 min-w-[120px] h-44 sm:h-52 md:h-64 lg:h-72 rounded-2xl shadow-xl bg-white border-2 border-primary/20 overflow-hidden relative z-10"
        custom={2}
        variants={cardVariants}
        whileHover="hover"
        style={{ 
          marginLeft: '-2rem',
          zIndex: 20
        }}
      >
        <img
          src={rightImage}
          alt="Strength building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </motion.div>
    </motion.div>
  );
}