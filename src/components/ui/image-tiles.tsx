import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ImageRevealProps {
    leftImage: string;
    middleImage: string;
    rightImage: string;
}

export default function ImageReveal({ leftImage, middleImage, rightImage }: ImageRevealProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants: Variants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.2,
      }
    }
  };

  const leftImageVariants: Variants = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: {
      rotate: -8,
      x: isMobile ? -40 : -120,
      y: isMobile ? 5 : 10,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12
      }
    },
    whileHover: {
      rotate: 1,
      x: isMobile ? -50 : -130,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    }
  };

  const middleImageVariants: Variants = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: {
      rotate: 6,
      x: 0,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12
      }
    },
    whileHover: {
      rotate: 0,
      x: 0,
      y: isMobile ? -3 : -8,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    }
 };

  const rightImageVariants: Variants = {
    initial: { rotate: 0, x: 0, y: 0 },
    animate: {
      rotate: -6,
      x: isMobile ? 40 : 150,
      y: isMobile ? 5 : 15,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12
      }
    },
    whileHover: {
      rotate: 3,
      x: isMobile ? 50 : 160,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    }
 };

  return (
    <motion.div
      className="relative flex items-center justify-center w-full max-w-4xl mx-auto h-60 sm:h-72 md:h-80 lg:h-96 my-0"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileInView="animate"
      viewport={{ once: true }}
      // Enable touch interactions
      whileTap={{}} // This enables the hover/tap interactions on touch devices
    >
      {/* Left Image - Lowest z-index */}
      <motion.div
        className="absolute w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 origin-bottom-right overflow-hidden rounded-xl shadow-lg bg-white"
        variants={leftImageVariants}
        whileHover="whileHover"
        animate="animate"
        style={{ zIndex: 30 }}
        // Enable touch interactions
        whileTap={{ scale: 0.98 }}
        drag={isMobile ? true : false}
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        dragElastic={0.2}
      >
        <img
          src={leftImage}
          alt="Left image"
          className="w-full h-full object-cover p-2 rounded-xl"
        />
      </motion.div>

      {/* Middle Image - Middle z-index */}
      <motion.div
        className="absolute w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 origin-bottom-left overflow-hidden rounded-xl shadow-lg bg-white"
        variants={middleImageVariants}
        whileHover="whileHover"
        animate="animate"
        style={{ zIndex: 20 }}
        // Enable touch interactions
        whileTap={{ scale: 0.98 }}
        drag={isMobile ? true : false}
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        dragElastic={0.2}
      >
        <img
          src={middleImage}
          alt="Middle image"
          className="w-full h-full object-cover p-2 rounded-2xl"
        />
      </motion.div>

      {/* Right Image - Highest z-index */}
      <motion.div
        className="absolute w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 origin-bottom-right overflow-hidden rounded-xl shadow-lg bg-white"
        variants={rightImageVariants}
        whileHover="whileHover"
        animate="animate"
        style={{ zIndex: 10 }}
        // Enable touch interactions
        whileTap={{ scale: 0.98 }}
        drag={isMobile ? true : false}
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        dragElastic={0.2}
      >
        <img
          src={rightImage}
          alt="Right image"
          className="w-full h-full object-cover p-2 rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
}