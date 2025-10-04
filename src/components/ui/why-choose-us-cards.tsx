import { motion, Variants } from 'framer-motion';

interface WhyChooseUsCardsProps {
  leftImage: string;
  middleImage: string;
  rightImage: string;
}

export default function WhyChooseUsCards({ leftImage, middleImage, rightImage }: WhyChooseUsCardsProps) {
  const containerVariants: Variants = {
    initial: {
      opacity: 0,
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
      x: '-60%',
      y: '-45%',
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12
      }
    },
    whileHover: {
      rotate: -6,
      x: '-62%',
      y: '-47%',
      scale: 1.05,
      zIndex: 50,
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
      rotate: 0,
      x: '0%',
      y: '0%',
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12
      }
    },
    whileHover: {
      rotate: 0,
      x: '0%',
      y: '-2%',
      scale: 1.05,
      zIndex: 50,
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
      rotate: 8,
      x: '65%',
      y: '65%',
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 12
      }
    },
    whileHover: {
      rotate: 10,
      x: '67%',
      y: '67%',
      scale: 1.05,
      zIndex: 50,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className="relative flex items-center justify-center w-full max-w-7xl mx-auto h-[350px] md:h-[450px] lg:h-[600px] xl:h-[700px] my-0 px-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* Left Image - Top-left, front */}
      <motion.div
        className="absolute w-2/5 h-2/5 md:w-2/5 md:h-2/5 lg:w-2/5 lg:h-2/5 origin-top-left overflow-hidden rounded-xl shadow-2xl bg-white"
        variants={leftImageVariants}
        whileHover="whileHover"
        animate="animate"
        style={{ zIndex: 30 }}
        whileTap={{ scale: 0.98, zIndex: 50 }}
      >
        <img
          src={leftImage}
          alt="Left image"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Middle Image - Center, middle */}
      <motion.div
        className="absolute w-1/2 h-1/2 md:w-2/5 md:h-2/5 lg:w-1/2 lg:h-1/2 origin-center overflow-hidden rounded-xl shadow-2xl bg-white"
        variants={middleImageVariants}
        whileHover="whileHover"
        animate="animate"
        style={{ zIndex: 20 }}
        whileTap={{ scale: 0.98, zIndex: 50 }}
      >
        <img
          src={middleImage}
          alt="Middle image"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Image - Bottom-right, back */}
      <motion.div
        className="absolute w-2/5 h-2/5 md:w-2/5 md:h-2/5 lg:w-2/5 lg:h-2/5 origin-bottom-right overflow-hidden rounded-xl shadow-2xl bg-white"
        variants={rightImageVariants}
        whileHover="whileHover"
        animate="animate"
        style={{ zIndex: 10 }}
        whileTap={{ scale: 0.98, zIndex: 50 }}
      >
        <img
          src={rightImage}
          alt="Right image"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}