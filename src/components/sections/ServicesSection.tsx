import { useState } from 'react';
import BookingModal from '../ui/booking-modal';
import ServiceCard from '../ui/service-card';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const serviceOfferings = [
    {
      id: 1,
      title: "Bootcamp",
      description: "Whether you are just embarking on your fitness journey or need to spice up your existing routine, try our 2-month life-changing boot camp program!",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=400&fit=crop",
      status: "Available" as const,
      price: "2,500 ETB"
    },
    {
      id: 2,
      title: "Studentpass",
      description: "Affordable and flexible access plans tailored specifically for students to balance fitness with busy study schedules.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=400&fit=crop",
      status: "Available" as const,
      price: "400 ETB"
    },
    {
      id: 3,
      title: "Dance Fitness",
      description: "Come sweat with us to some Afrobeats, Amapiano, Dancehall, and more in our women-only Dance Fitness classes. Be part of an amazing community with inspiring women, and learn some moves!",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
      status: "Available" as const,
      price: "800 ETB"
    },
    {
      id: 4,
      title: "Space/Studio Rental",
      description: "Rent our premium studio space for your events, workshops, or fitness classes. Fully equipped with professional sound system, mirrors, and fitness equipment.",
      image: "https://images.unsplash.com/photo-1542772146-e49c50ad6bcf?w=500&h=400&fit=crop",
      status: "Available" as const,
      price: "1,500 ETB/hour"
    },
    {
      id: 5,
      title: "Cafe and Meal Service",
      description: "Enjoy healthy, nutritious meals and refreshments at our on-site cafe. We provide accessible meal plans based on your personal health and fitness needs.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=400&fit=crop",
      status: "Available" as const,
      price: "200-500 ETB"
    }
  ];

  return (
    <section id="classes" className="py-12 md:py-20 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
      
    {/* All Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceOfferings.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.section
          className="py-12 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg mt-12 group"
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
                Join the AfroHeat Community
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
      
      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default ServicesSection;