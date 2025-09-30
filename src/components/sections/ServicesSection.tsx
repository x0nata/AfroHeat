import ServiceCard from '../ui/service-card';
import { motion } from 'framer-motion';
const ServicesSection: React.FC = () => {
  const serviceOfferings = [
    {
      id: 1,
      title: "Bootcamp",
      description: "Whether you are just embarking on your fitness journey or need to spice up your existing routine, try our 2-month life-changing boot camp program!",
      image: "/images/new/boootcamp.webp",
      status: "Available" as const,
    },
    {
      id: 2,
      title: "Studentpass",
      description: "Affordable and flexible access plans tailored specifically for students to balance fitness with busy study schedules.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=400&fit=crop",
      status: "Available" as const,
    },
    {
      id: 3,
      title: "Dance Fitness",
      description: "Come sweat with us to some Afrobeats, Amapiano, Dancehall, and more in our women-only Dance Fitness classes. Be part of an amazing community with inspiring women, and learn some moves!",
      image: "/images/new/dance.webp",
      status: "Available" as const,
    },
    {
      id: 4,
      title: "Space/Studio Rental",
      description: "Rent our premium studio space for your events, workshops, or fitness classes. Fully equipped with professional sound system, mirrors, and fitness equipment.",
      image: "https://images.unsplash.com/photo-1542772146-e49c50ad6bcf?w=500&h=400&fit=crop",
      status: "Available" as const,
    },
    {
      id: 5,
      title: "Cafe and Meal Service",
      description: "Enjoy healthy, nutritious meals and refreshments at our on-site cafe. We provide accessible meal plans based on your personal health and fitness needs.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=400&fit=crop",
      status: "Available" as const,
    }
  ];

  const handleSignUp = () => {
    document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="classes" className="py-12 md:py-20">
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
              <ServiceCard
                key={service.id}
                service={service}
                onSignUp={handleSignUp}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default ServicesSection;