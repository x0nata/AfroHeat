import { useState, useEffect, useRef } from 'react';
import ServiceCard from '../ui/service-card';
import BootcampModal from '@/forms/BootcampModal';
import StudentPassModal from '@/forms/StudentPassModal';
import StudioRentalForm from '@/forms/StudioRentalForm';
import ContactInfoModal from '@/components/ui/ContactInfoModal';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  const [isBootcampModalOpen, setIsBootcampModalOpen] = useState(false);
  const [isStudentPassModalOpen, setIsStudentPassModalOpen] = useState(false);
  const [isStudioRentalModalOpen, setIsStudioRentalModalOpen] = useState(false);
  const [isContactInfoModalOpen, setIsContactInfoModalOpen] = useState(false);
  const highlightTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Function to handle the scroll and highlight
    const handleScrollToElement = (elementId: string) => {
      // Clear any existing timer to prevent conflicts
      if (highlightTimerRef.current) {
        clearTimeout(highlightTimerRef.current);
        highlightTimerRef.current = null;
      }
      
      // Use a timeout to ensure the DOM is fully loaded
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          // Add a temporary highlight class
          element.classList.add('ring-4', 'ring-secondary', 'ring-offset-2', 'ring-offset-background');
          element.classList.add('scale-105');
          element.classList.add('z-10'); // Ensure it's above other elements
          
          // Scroll to the element with smooth behavior
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Remove the highlight after 3 seconds
          highlightTimerRef.current = setTimeout(() => {
            element.classList.remove('ring-4', 'ring-secondary', 'ring-offset-2', 'ring-offset-background');
            element.classList.remove('scale-105');
            element.classList.remove('z-10');
            highlightTimerRef.current = null;
          }, 3000);
        }
      }, 10); // Small delay to ensure rendering is complete
    };
  
    // Check if there's a hash in the URL when the component mounts
    if (window.location.hash === '#studio-rental') {
      handleScrollToElement('studio-rental');
    } else if (window.location.hash === '#dance') {
      handleScrollToElement('dance');
    } else if (window.location.hash === '#studentpass') {
      handleScrollToElement('studentpass');
    }
  
    // Listen for hash changes (in case user navigates using links)
    const handleHashChange = () => {
      if (window.location.hash === '#studio-rental') {
        handleScrollToElement('studio-rental');
      } else if (window.location.hash === '#dance') {
        handleScrollToElement('dance');
      } else if (window.location.hash === '#studentpass') {
        handleScrollToElement('studentpass');
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Clean up the event listener and any pending timers
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      if (highlightTimerRef.current) {
        clearTimeout(highlightTimerRef.current);
      }
    };
  }, []);

  const serviceOfferings = [
    {
      id: 1,
      title: "Bootcamp",
      description: "Whether you are just embarking on your fitness journey or need to spice up your existing routine, try our 2-month life-changing boot camp program!",
      image: "/images/new/bootcampvid.webm",
      status: "Available" as const,
    },
    {
      id: 2,
      title: "Studentpass",
      description: "flexible access plans tailored specifically for students to balance fitness with busy study schedules, with budget-friendly pricing support.",
      image: "/images/new/student.webp",
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
      image: "/images/new/studio.webp",
      status: "Available" as const,
    },
    {
      id: 5,
      title: "Cafe and Meal Service",
      description: "Enjoy healthy, nutritious meals and refreshments at our on-site cafe. We provide accessible meal plans based on your personal health and fitness needs.",
      image: "/images/new/meal.webp",
      status: "Available" as const,
    }
  ];

  return (
    <section id="classes" className="py-12 md:py-20" >
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
                id={service.title === "Space/Studio Rental" ? "studio-rental" : service.title === "Dance Fitness" ? "dance" : service.title === "Studentpass" ? "studentpass" : undefined}
                onSignUp={() => {
                  if (service.title === "Bootcamp") {
                    setIsBootcampModalOpen(true);
                  } else if (service.title === "Studentpass" || service.title === "Dance Fitness" || service.title === "Cafe and Meal Service") {
                    setIsContactInfoModalOpen(true);
                  } else if (service.title === "Space/Studio Rental") {
                    setIsStudioRentalModalOpen(true);
                  }
                  // All other services do nothing for now
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Modals */}
      <BootcampModal
        isOpen={isBootcampModalOpen}
        onClose={() => setIsBootcampModalOpen(false)}
      />
      <StudentPassModal
        isOpen={isStudentPassModalOpen}
        onClose={() => setIsStudentPassModalOpen(false)}
      />
      <StudioRentalForm
        isOpen={isStudioRentalModalOpen}
        onClose={() => setIsStudioRentalModalOpen(false)}
      />
      <ContactInfoModal
        isOpen={isContactInfoModalOpen}
        onClose={() => setIsContactInfoModalOpen(false)}
      />
    </section>
  );
};

export default ServicesSection;