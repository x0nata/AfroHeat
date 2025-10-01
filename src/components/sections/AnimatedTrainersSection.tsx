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
      image: '/images/Trainers/Hamrawit Gizaw/HAMRAWIT GIZAW.webp'
    },
    {
      id: '2',
      name: 'SELAM AYELE',
      role: 'KIKBOXING & STRENGTH',
      description: 'Specializes in strength training and functional fitness with over 5 years of experience in group fitness.',
      image: '/images/Trainers/SELAM AYELE/SELAM AYELE KIKBOXING & STRENGTH.webp'
    },
    {
      id: '3',
      name: 'LINA TESFAYEE',
      role: 'STRENGTH TRAINER',
      description: 'Specializes in strength training and functional fitness with over 5 years of experience in group fitness.',
      image: '/images/Trainers/Lina tesfayee/LINA TESFAYEE STRENGTH TRAINER.webp'
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300 hover:scale-105 flex flex-col md:flex-row"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                width={300}
                height={400}
                className="w-full md:w-2/5 h-64 object-cover max-w-full max-h-full rounded-t-2xl md:rounded-l-2xl md:rounded-r-none group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = '/images/logos/afroheat logo black.webp';
                }}
              />
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground font-industry mb-2 group-hover:text-primary transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-primary font-semibold mb-3 font-poppins uppercase tracking-wide">
                  {trainer.role}
                </p>
                <p className="text-muted-foreground leading-relaxed font-poppins text-base">
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

export default AnimatedTrainersSection;