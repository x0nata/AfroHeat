import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import NewHomeSection from '../components/sections/new-home-section';
import { Boxes } from '../components/ui/background-boxes';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NewHomeSection />
      <AboutSection />
      {/* CTA Section */}
      <motion.section
        className="py-12 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg group mt-12"
        whileHover="hover"
        variants={{
          hover: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Boxes />
        </div>
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
            AfroHeat Community
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
              Experience fitness in a way that celebrates African culture, music, and dance.
              Join us in creating a healthier, more active lifestyle for Africans and the diaspora.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                onClick={() => navigate('/about')}
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg relative overflow-hidden group w-full sm:w-auto"
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
                <span className="relative z-10">Learn More</span>
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
              <motion.button
                onClick={() => navigate('/contact')}
                className="border border-border text-foreground px-5 py-2.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all font-poppins relative overflow-hidden w-full sm:w-auto"
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
                <span className="relative z-10">Contact Us</span>
                <motion.div
                  className="absolute inset-0 bg-primary/5"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;