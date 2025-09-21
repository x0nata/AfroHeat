"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

interface Trainer {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

interface AnimatedTrainersSectionProps {
  autoplay?: boolean;
}

const AnimatedTrainersSection: React.FC<AnimatedTrainersSectionProps> = ({ autoplay = false }) => {
  const trainers: Trainer[] = [
    {
      id: '1',
      name: 'HAMRAWIT GIZAW',
      role: 'Founder & Head Trainer',
      description: 'Internationally certified personal trainer and group fitness instructor specializing in AfroHeat Dance Fitness programs.',
      image: '/images/trainers/hamrawit.webp'
    },
    {
      id: '2',
      name: 'ALEM TADESSE',
      role: 'Senior Fitness Instructor',
      description: 'Specializes in strength training and functional fitness with over 5 years of experience in group fitness.',
      image: '/images/trainers/alem.webp'
    },
    {
      id: '3',
      name: 'SARA MENGISTU',
      role: 'Dance Fitness Specialist',
      description: 'Professional dancer and certified fitness instructor with expertise in African dance styles and choreography.',
      image: '/images/trainers/sara.webp'
    },
    {
      id: '4',
      name: 'DAWIT BEKELE',
      role: 'Nutrition & Wellness Coach',
      description: 'Certified nutritionist and wellness coach focusing on holistic health approaches for the African community.',
      image: '/images/trainers/dawit.webp'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % trainers.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + trainers.length) % trainers.length);
  };

  const handleImageError = (trainerId: string) => {
    setImageError(prev => ({ ...prev, [trainerId]: true }));
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <section className="py-16 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground font-industry mb-4">
            MEET THE TRAINERS
          </h2>
        </motion.div>

        <div className="mx-auto max-w-sm px-4 py-8 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {trainers.map((trainer, index) => (
                    <motion.div
                      key={trainer.id}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: index === activeIndex ? 1 : 0.7,
                        scale: index === activeIndex ? 1 : 0.95,
                        z: index === activeIndex ? 0 : -100,
                        rotate: index === activeIndex ? 0 : randomRotateY(),
                        zIndex: index === activeIndex ? 40 : trainers.length + 2 - index,
                        y: index === activeIndex ? [0, -40, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      {imageError[trainer.id] ? (
                        <div className="h-full w-full rounded-3xl bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground text-sm font-poppins">Image not available</span>
                        </div>
                      ) : (
                        <img
                          src={trainer.image}
                          alt={trainer.name}
                          width={500}
                          height={500}
                          draggable={false}
                          onError={() => handleImageError(trainer.id)}
                          className="h-full w-full rounded-3xl object-cover object-center"
                        />
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex flex-col justify-between py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -20,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                >
                  <h3 className="text-2xl font-bold text-foreground font-industry">
                    {trainers[activeIndex].name}
                  </h3>
                  <p className="text-primary font-semibold mb-4 font-poppins">
                    {trainers[activeIndex].role}
                  </p>
                  <motion.p className="text-muted-foreground leading-relaxed font-poppins">
                    {trainers[activeIndex].description.split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          filter: "blur(4px)",
                          opacity: 0,
                          y: 3,
                        }}
                        animate={{
                          filter: "blur(0px)",
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.15,
                          ease: "easeInOut",
                          delay: 0.01 * index,
                        }}
                        className="inline-block"
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
              <div className="flex gap-4 pt-8 md:pt-0">
                <button
                  onClick={handlePrev}
                  className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Previous trainer"
                >
                  <IconArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Next trainer"
                >
                  <IconArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTrainersSection;