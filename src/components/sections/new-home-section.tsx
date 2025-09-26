import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      title: '',
      description: 'For women ready to conquer their limits. This bootcamp isn\'t just exercise-it\'s transformation.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      buttonText: 'See Our Schedule',
      onClick: onScheduleOpen
    },
    {
      id: 2,
      title: '',
      description: 'Build resilience under the stars. Evening sessions that strengthen body and mind in a supportive community.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7e87?w=800&h=600&fit=crop',
      buttonText: 'See Our Packages',
      buttonLink: '/services'
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background relative overflow-visible">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Left Side - Header Section */}
        <motion.div
          className="flex-1 lg:w-2/5 space-y-3 sm:space-y-4 text-center lg:text-left mt-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-xs sm:text-sm uppercase font-bold text-[#8c1e81] dark:text-[#a53a97] tracking-wide">HEALTH + FITNESS</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 font-industry">
            Women's Fitness Bootcamp
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-900 dark:text-gray-300 leading-relaxed font-poppins">
            Our women-only fitness classes are designed to help you build a stronger, fitter, and more resilient body in a safe learning environment.
          </p>
        </motion.div>

        {/* Right Side - Cards Section */}
        <motion.div
          className="flex-1 lg:w-3/5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] xl:min-h-[400px]">
            {cardData.map((card) => (
              <motion.div
                key={card.id}
                className="relative aspect-[2/3] sm:aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 group cursor-pointer transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                {/* Light mode overlay - lighter gradient for dark text */}
                <div
                  className="absolute inset-0 z-0 dark:hidden"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.7) 70%, rgba(255, 255, 255, 0.9) 100%)'
                  }}
                />
                {/* Dark mode overlay - dark gradient for light text */}
                <div
                  className="absolute inset-0 z-0 hidden dark:block"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0.95) 100%)'
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 text-left z-10 transition-all duration-300">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 md:mb-3 font-poppins">{card.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-900 dark:text-gray-300 leading-tight sm:leading-relaxed mb-2 sm:mb-3 md:mb-4 font-poppins">
                    {card.description}
                  </p>
                  {card.onClick ? (
                    <motion.button
                      onClick={card.onClick}
                      className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-full text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {card.buttonText}
                    </motion.button>
                  ) : (
                    <Link
                      to={card.buttonLink!}
                      className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 rounded-full text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 hover:scale-105"
                    >
                      {card.buttonText}
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewHomeSection;