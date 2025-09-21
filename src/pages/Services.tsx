import ServicesSection from '../components/sections/ServicesSection';
import MembershipSection from '../components/sections/MembershipSection';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-20 bg-background text-foreground">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-industry">
              Our{" "}
              <span className="text-primary">
                Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
              Discover our Africa-inspired fitness programs designed specifically for women.
              Build strength, celebrate culture, and join our empowering community.
            </p>
          </motion.div>
        </div>
      </section>
      
      <ServicesSection />
      <MembershipSection />
    </div>
  );
};

export default Services;