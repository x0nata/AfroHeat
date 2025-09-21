import ContactSection from '../components/sections/ContactSection';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
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
      
      <ContactSection />
    </div>
  );
};

export default Contact;