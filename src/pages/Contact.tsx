import React, { useState } from 'react';
import ContactSection from '../components/sections/ContactSection';
import { motion } from 'framer-motion';
import ScheduleModal from '../components/ui/ScheduleModal';

const Contact: React.FC = () => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-10 bg-background text-foreground">
        <div className="w-full px-4 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-3 font-industry">
              Get in{" "}
              <span className="text-primary">
                Touch
              </span>
            </h1>
          </motion.div>
        </div>
      </section>
      
      <ContactSection onScheduleOpen={() => setIsScheduleOpen(true)} />
      
      {/* CTA Section */}
      <motion.section
        className="py-12 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg group mt-12 bg-background"
        whileHover="hover"
        variants={{
          hover: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/20 rounded-lg p-6"
          >
            <motion.h2
              className="text-2xl font-bold mb-4 text-foreground font-industry"
              variants={{
                hover: {
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }
              }}
            >
              Ready to Join Our Community?
            </motion.h2>
            <motion.p
              className="text-base text-muted-foreground mb-6 font-poppins"
              variants={{
                hover: {
                  y: -3,
                  transition: { duration: 0.3 }
                }
              }}
            >
              See our class schedule and book your spot today.
            </motion.p>
            <motion.button
              onClick={() => setIsScheduleOpen(true)}
              className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg relative overflow-hidden group w-full sm:w-auto font-poppins"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hover: {
                  y: -3,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: { duration: 0.3 }
                }
              }}
            >
              <span className="relative z-10">See Our Schedule</span>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
      </div>
      <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
    </>
  );
};

export default Contact;