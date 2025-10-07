import React from 'react';
import { motion } from 'framer-motion';

interface NewHomeSectionProps {
  onScheduleOpen?: () => void;
}

const NewHomeSection: React.FC<NewHomeSectionProps> = ({ onScheduleOpen }) => {
  React.useEffect(() => {
    console.log('NewHomeSection rendered');
    const mediaQuery = window.matchMedia('(max-width: 640px)');
    console.log('Is mobile (sm breakpoint):', mediaQuery.matches);
    
    const cardsContainer = document.querySelector('.grid-cols-2') as HTMLElement;
    if (cardsContainer) {
      console.log('Cards container dimensions:', {
        width: cardsContainer.offsetWidth,
        height: cardsContainer.offsetHeight,
        overflow: window.getComputedStyle(cardsContainer).overflow
      });
    }
    
    const section = document.querySelector('section.py-12') as HTMLElement;
    if (section) {
      console.log('Section overflow:', window.getComputedStyle(section).overflow);
    }
  }, []);

  const cardData = [
    {
      id: 1,
      description: 'For women ready to conquer their limits. This bootcamp isn\'t just exercise-it\'s transformation.',
      buttonText: 'See Our Schedule',
      onClick: onScheduleOpen
    },
    {
      id: 2,
      description: 'Build resilience under the stars. Evening sessions that strengthen body and mind in a supportive community.',
      buttonText: 'See Our Packages',
      buttonLink: '/services#membership'
    }
  ];

  return (
    <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-background relative overflow-visible mt-10">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Left Side - Header Section */}
        <motion.div
          className="flex-1 lg:w-2/5 space-y-3 sm:space-y-4 text-center lg:text-left "
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-xs sm:text-sm uppercase font-bold text-[#8c1e81] dark:text-white tracking-wide">HEALTH + FITNESS</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 font-industry">
                      Women's Fitness Bootcamp
                    </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-900 dark:text-white leading-relaxed font-poppins">
                      Our women-only fitness classes are designed to help you build a stronger, fitter, and more resilient body in a safe learning environment.
                    </p>
        </motion.div>

        {/* Right Side - Buttons */}
        <motion.div
          className="flex-1 lg:w-3/5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-6 lg:gap-8 mt-5">
            {cardData.map((card) => (
              <motion.button
                key={card.id}
                className="w-full px-6 sm:px-8 relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-5 sm:py-6 rounded-xl font-bold font-poppins text-base sm:text-lg lg:text-xl shadow-lg hover:shadow-xl hover:from-primary hover:to-primary/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={card.onClick || (() => window.location.href = card.buttonLink!)}
              >
                <span className="relative z-10">{card.buttonText}</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.45 }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewHomeSection;