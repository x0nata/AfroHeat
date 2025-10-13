import { useEffect } from 'react';
import ServicesSection from '../components/sections/ServicesSection';
import MembershipSection from '../components/sections/MembershipSection';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  useEffect(() => {
    // Check if there's a hash in the URL when the component mounts
    if (window.location.hash === '#studio-rental') {
      // Wait a bit for the ServicesSection to render, then scroll
      setTimeout(() => {
        const element = document.getElementById('studio-rental');
        if (element) {
          // Scroll to the element with smooth behavior
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300); // Small delay to ensure ServicesSection has rendered
    } else if (window.location.hash === '#membership') {
      // Wait a bit for the MembershipSection to render, then scroll
      setTimeout(() => {
        const element = document.getElementById('membership');
        if (element) {
          // Scroll to the element with smooth behavior
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300); // Small delay to ensure MembershipSection has rendered
    }
  }, []); // Empty dependency array means this runs once on mount

   return (
    <div className="min-h-screen bg-transparent relative">
      <div className="absolute inset-0 -z-10" style={{ backgroundImage: `url('/images/logos/afroheat-logo-and-pattern-01.webp')`, backgroundRepeat: 'repeat', backgroundSize: '50% auto', opacity: 0.5, border: '4px solid red' }}></div>
      {/* Page Header */}
      <section className="py-20 text-foreground">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl text-primary font-bold  font-industry">
              Our{" "}
              <span className="text-primary">
                Services
              </span>
            </h1>
          </motion.div>
        </div>
      </section>
      
      <ServicesSection />
      <MembershipSection />
    </div>
  );
};

export default Services;