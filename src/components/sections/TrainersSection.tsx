"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Trainer {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

// Simple optimized image component for trainers section
const TrainerImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}> = ({ src, alt, className = '', fallbackSrc = "/images/logos/afroheat logo black.png" }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(fallbackSrc);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-md" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading="lazy"
        decoding="async"
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-md">
          <span className="text-muted-foreground text-sm font-poppins">Image not available</span>
        </div>
      )}
    </div>
  );
};

const TrainersSection: React.FC = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <TrainerImage
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.role}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  fallbackSrc="/images/logos/afroheat logo black.webp"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground font-industry mb-2 group-hover:text-primary transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-primary font-semibold mb-3 font-poppins">
                  {trainer.role}
                </p>
                <p className="text-muted-foreground leading-relaxed font-poppins">
                  {trainer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;