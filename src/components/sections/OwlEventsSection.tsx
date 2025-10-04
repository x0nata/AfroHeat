import React from 'react';
import { motion } from 'framer-motion';
import { IconExternalLink } from '@tabler/icons-react';

const OwlEventsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center mb-6">
            <span className="text-sm uppercase font-bold text-primary tracking-wide flex items-center">
              Book a Class
            </span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-foreground font-industry mb-6">
            Book a class using <span className="text-primary">OwlEvents</span>
          </h3>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-base md:text-lg">
            Reserve your spot in our fitness classes through our official booking platform
          </p>
          
          <motion.a
            href="https://owlevents.app/organizers/detail?org_id=250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold font-poppins text-base md:text-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Book Now</span>
            <IconExternalLink className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default OwlEventsSection;