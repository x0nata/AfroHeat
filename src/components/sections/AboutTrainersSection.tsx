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
}> = ({ src, alt, className = '', fallbackSrc = "/images/logos/afroheat logo black.webp" }) => {
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
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 max-w-full max-h-full`}
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

const AboutTrainersSection: React.FC = () => {
  const trainers: Trainer[] = [
    {
      id: '1',
      name: 'HAMRAWIT GIZAW',
      role: 'Founder & Head Trainer',
      description: 'Founder and Group exercise instructor who has successfully completed the objectives and skills evaluation in accordance with the ISSA CPR and AER certification curriculum.',
      image: '/images/Trainers/hamrawit-gizaw-head-coach.webp'
    },
    {
      id: '2',
      name: 'SELAMAWIT AYELE',
      role: 'KIKBOXING & STRENGTH',
      description: 'Kickboxing instructor and Level 2 health-related physical fitness coach who has successfully completed First Aid training at the Tikur Anbessa Specialized Hospital Training Center.',
      image: '/images/Trainers/selam-ayele-kikboxing-strength-trainer.webp'
    },
    {
      id: '3',
      name: 'LINA TESFAYE',
      role: 'STRENGTH TRAINER',
      description: 'Group exercise instructor, Level 1 health-related physical fitness coach who has successfully completed the Sports Injury Treatment and Physiotherapy Training organized by CPID and SPHMMC, in collaboration with the Addis Ababa Youth and Sport Bureau.',
      image: '/images/Trainers/lina-tesfayee-strength-trainer.webp'
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

        <div className="space-y-16">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${trainer.name === 'SELAM AYELE' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 max-w-6xl mx-auto bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300`}
            >
              <div className="w-full md:w-2/5 overflow-hidden">
                <TrainerImage
                  src={trainer.image}
                  alt={`${trainer.name} - ${trainer.role}`}
                  className="w-full h-80 object-cover rounded-t-2xl md:rounded-none md:rounded-l-2xl group-hover:scale-105 transition-transform duration-300"
                  fallbackSrc="/images/logos/afroheat logo black.webp"
                />
              </div>
              
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground font-industry mb-3 group-hover:text-primary transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-primary font-semibold mb-4 font-poppins uppercase tracking-wide text-lg">
                  {trainer.role}
                </p>
                <p className="text-muted-foreground leading-relaxed font-poppins text-base md:text-lg">
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

export default AboutTrainersSection;