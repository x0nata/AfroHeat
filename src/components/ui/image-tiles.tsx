import { motion, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface ImageRevealProps {
    leftImage: string;
    middleImage: string;
    rightImage: string;
}

export default function ImageReveal({ leftImage, middleImage, rightImage }: ImageRevealProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    console.log('ImageReveal mounted successfully');
    console.log('Props:', { leftImage, middleImage, rightImage });
    // Check image loads
    const checkImage = (src: string, name: string) => {
      const img = new Image();
      img.src = src;
      img.onload = () => console.log(`${name} image loaded successfully`);
      img.onerror = () => console.log(`${name} image failed to load - check path`);
    };
    checkImage(leftImage, 'Left');
    checkImage(middleImage, 'Middle');
    checkImage(rightImage, 'Right');
  }, [leftImage, middleImage, rightImage]);
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
            x: isMobile ? -100 : -350,
            y: isMobile ? 8 : 25,
            transition: {
                type: "spring" as const,
                stiffness: 120,
                damping: 12
            }
        },
        hover: {
            rotate: 1,
            x: isMobile ? -110 : -370,
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
        hover: {
            rotate: 0,
            x: 0,
            y: isMobile ? -5 : -10,
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
            x: isMobile ? 100 : 350,
            y: isMobile ? 8 : 25,
            transition: {
                type: "spring" as const,
                stiffness: 120,
                damping: 12
            }
        },
        hover: {
            rotate: 3,
            x: isMobile ? 110 : 370,
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
            className="relative flex items-center justify-center w-full max-w-6xl mx-auto h-96 my-4 sm:my-8 md:my-16 lg:my-24" // Responsive margins for less space on phone
            variants={containerVariants}
            initial="initial"
            animate="animate"
            whileInView="animate"
            viewport={{ once: true }}
        >
            {/* Left Image - Lowest z-index */}
            <motion.div
                className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 origin-bottom-right rounded-xl shadow-lg bg-white border-4 border-black" // Added border for visibility
                variants={leftImageVariants}
                whileHover="hover"
                animate="animate"
                style={{ zIndex: 30 }}
            >
                <img
                    src={leftImage}
                    alt="Left image"
                    className="object-cover p-2 sm:p-3 md:p-4 rounded-xl"
                />
            </motion.div>

            {/* Middle Image - Middle z-index */}
            <motion.div
                className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 origin-bottom-left rounded-xl shadow-lg bg-white border-4 border-black" // Added border for visibility
                variants={middleImageVariants}
                whileHover="hover"
                animate="animate"
                style={{ zIndex: 20 }}
            >
                <img
                    src={middleImage}
                    alt="Middle image"
                    className="object-cover p-2 sm:p-3 md:p-4 rounded-2xl"
                />
            </motion.div>

            {/* Right Image - Highest z-index */}
            <motion.div
                className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 origin-bottom-right rounded-xl shadow-lg bg-white border-4 border-black" // Added border for visibility
                variants={rightImageVariants}
                whileHover="hover"
                animate="animate"
                style={{ zIndex: 10 }}
            >
                <img
                    src={rightImage}
                    alt="Right image"
                    className="object-cover p-2 sm:p-3 md:p-4 rounded-2xl"
                />
            </motion.div>
        </motion.div>
    );
}