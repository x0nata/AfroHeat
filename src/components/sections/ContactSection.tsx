import { motion } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { useEffect, useState } from 'react';
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconClock,
  IconCalendar,
  IconUsers,
  IconMessageCircle,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandLinkedin
} from '@tabler/icons-react';
import InstructorModal from '@/forms/InstructorModal';
import ContactInfoModal from '@/components/ui/ContactInfoModal';

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  action: string;
  href?: string;
  onClick?: () => void;
}

interface ContactSectionProps {
  onScheduleOpen?: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onScheduleOpen }) => {
  const { state } = useApp();
  const [isInstructorModalOpen, setIsInstructorModalOpen] = useState(false);
  const [isContactInfoModalOpen, setIsContactInfoModalOpen] = useState(false);

  useEffect(() => {
    console.log('ContactSection theme:', state.isDarkMode ? 'dark' : 'light');
    // Log for Become an Instructor title
    setTimeout(() => {
      const title = document.querySelector('[data-title="become-instructor"]') as HTMLElement;
      if (title) {
        const styles = window.getComputedStyle(title);
        console.log('Become an Instructor title - color:', styles.color, 'bg:', styles.backgroundColor);
      }
    }, 100); // Delay to ensure render
  }, [state.isDarkMode]);

  const contactInfo: ContactInfo[] = [
    {
      icon: <IconMapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["Addis Ababa, Ethiopia"],
      action: "Get Directions",
      href: "https://maps.app.goo.gl/9swLxSUx5sKXpDKa6"
    },
    {
      icon: <IconPhone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+251 90 424 2222", "Available 7 days a week"],
      action: "Learn More",
      onClick: () => setIsContactInfoModalOpen(true)
    },
    {
      icon: <IconMail className="h-6 w-6" />,
      title: "Email Us",
      details: ["afroheatfitness1@gmail.com"],
      action: "Learn More",
      href: "mailto:afroheatfitness1@gmail.com"
    },
    {
      icon: <IconClock className="h-6 w-6" />,
      title: "Operating Hours",
      details: ["Monday - Friday: 6AM -8PM", "Saturday: 6AM - 12PM"],
      action: "View Schedule",
      onClick: onScheduleOpen
    }
  ];

  const quickActions = [
    {
      icon: <IconCalendar className="h-8 w-8" />,
      title: "Find a Group Class",
      description: "Join our scheduled group fitness sessions",
      action: "View Classes",
      onClick: onScheduleOpen
    },
    {
      icon: <IconUsers className="h-8 w-8" />,
      title: "Request Private Class",
      description: "Book personalized one-on-one training",
      action: "Request Session"
    },
    {
      icon: <IconMessageCircle className="h-8 w-8" />,
      title: "Become an Instructor",
      description: "Join our team of certified fitness instructors",
      action: "Learn More",
      onClick: () => setIsContactInfoModalOpen(true)
    }
  ];

  return (
    <>
      <section id="contact" className=" md:py-20 bg-background text-foreground">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          
 
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            
            {/* Contact Info & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
            >
              {/* Contact Information */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground font-industry">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-card rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-3 md:mb-4">
                        <div className="p-1.5 md:p-2 bg-primary rounded-md md:rounded-lg text-primary-foreground mr-2 md:mr-3">
                          {info.icon}
                        </div>
                        <h4 className="font-semibold text-foreground text-sm md:text-base font-industry">
                          {info.title}
                        </h4>
                      </div>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-xs md:text-sm mb-1 font-poppins">
                          {detail}
                        </p>
                      ))}
                      {info.href ? (
                        <motion.a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 text-xs md:text-sm font-medium mt-1 md:mt-2 font-poppins relative overflow-hidden group inline-block"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="relative z-10">{info.action} →</span>
                          <motion.div
                            className="absolute inset-0 bg-primary/10"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.4 }}
                          />
                        </motion.a>
                      ) : info.onClick ? (
                        <motion.button
                          onClick={info.onClick}
                          className="text-primary hover:text-primary/80 text-xs md:text-sm font-medium mt-1 md:mt-2 font-poppins relative overflow-hidden group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="relative z-10">{info.action} →</span>
                          <motion.div
                            className="absolute inset-0 bg-primary/10"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.4 }}
                          />
                        </motion.button>
                      ) : (
                        <span className="text-primary/70 text-xs md:text-sm font-medium mt-1 md:mt-2 font-poppins">
                          {info.action}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground font-industry">
                  Quick Actions
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {quickActions.map((action, index) => (
                    <div key={index} className="bg-card rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                      <div className="flex items-center">
                        <div className="p-2 md:p-3 bg-primary rounded-lg md:rounded-xl text-primary-foreground mr-3 md:mr-4">
                          {action.icon}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base font-industry">
                            {action.title}
                          </h4>
                          <p className="text-muted-foreground text-xs md:text-sm font-poppins">
                            {action.description}
                          </p>
                        </div>
                        {action.onClick ? (
                          <motion.button
                            onClick={action.onClick}
                            className="bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-md md:rounded-lg font-medium hover:bg-primary/90 transition-all text-xs md:text-sm font-poppins relative overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="relative z-10">{action.action}</span>
                            <motion.div
                              className="absolute inset-0 bg-white/20"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '100%' }}
                              transition={{ duration: 0.6 }}
                            />
                          </motion.button>
                        ) : (
                          <motion.button
                            className="bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-md md:rounded-lg font-medium hover:bg-primary/90 transition-all text-xs md:text-sm font-poppins relative overflow-hidden group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="relative z-10">{action.action}</span>
                            <motion.div
                              className="absolute inset-0 bg-white/20"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '100%' }}
                              transition={{ duration: 0.6 }}
                            />
                          </motion.button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-card rounded-lg md:rounded-xl p-4 md:p-6 shadow-lg">
                <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base font-industry">
                  Our Location
                </h4>
                <div className="rounded-md md:rounded-lg overflow-hidden border border-primary/20">
                  <iframe
                    src="https://maps.google.com/maps?q=8.9893132,38.7723297&hl=en&z=15&output=embed"
                    width="10%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-48 md:h-56"
                    title="AfroHeat Fitness Location in Addis Ababa"
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-muted-foreground text-xs md:text-sm font-poppins">
                    Addis Ababa, Ethiopia
                  </p>
                  <motion.a
                    href="https://maps.app.goo.gl/9swLxSUx5sKXpDKa6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-xs md:text-sm font-medium font-poppins relative overflow-hidden group inline-flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Get Directions →</span>
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.a>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="bg-card rounded-xl p-6 shadow-lg border mb-5 border-primary/10">
                <h4 className="font-semibold text-foreground mb-3 text-base font-industry tracking-wide">
                  Follow Us
                </h4>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 justify-items-center">
                  {/* Instagram Phone Mockup */}
                  <motion.a
                    href="https://www.instagram.com/afroheatfitness?igsh=NGpsc3F0YnpydjJu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="Follow AfroHeat on Instagram"
                    whileHover={{ y: -4, scale: 1.02, rotate: 1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative bg-black rounded-3xl p-3 sm:p-4 w-24 h-48 sm:w-32 sm:h-56 border-[0.5px] border-gray-800 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300">
                      {/* Phone notch */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 sm:w-12 h-1 bg-gray-700 rounded-full"></div>
                      {/* Screen */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <img
                          src="/images/mini phones/instagram.webp"
                          alt="AfroHeat Instagram frontpage"
                          className="w-full h-full object-cover blur-[2px]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <IconBrandInstagram className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-2xl" />
                        </div>
                      </div>
                    </div>
                  </motion.a>

                  {/* TikTok Phone Mockup */}
                  <motion.a
                    href="https://vm.tiktok.com/ZMHnKdc5qF2eT-RqFic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="Follow AfroHeat on TikTok"
                    whileHover={{ y: -4, scale: 1.02, rotate: 1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative bg-black rounded-3xl p-3 sm:p-4 w-24 h-48 sm:w-32 sm:h-56 border-[0.5px] border-gray-800 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300">
                      {/* Phone notch */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 sm:w-12 h-1 bg-gray-700 rounded-full"></div>
                      {/* Screen */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <img
                          src="/images/mini phones/tiktok.webp"
                          alt="AfroHeat TikTok frontpage"
                          className="w-full h-full object-cover blur-[2px]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <IconBrandTiktok className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-2xl" />
                        </div>
                      </div>
                    </div>
                  </motion.a>

                  {/* LinkedIn Phone Mockup */}
                  <motion.a
                    href="https://www.linkedin.com/company/afroheat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="Follow AfroHeat on LinkedIn"
                    whileHover={{ y: -4, scale: 1.02, rotate: 1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative bg-black rounded-3xl p-3 sm:p-4 w-24 h-48 sm:w-32 sm:h-56 border-[0.5px] border-gray-800 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300">
                      {/* Phone notch */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 sm:w-12 h-1 bg-gray-700 rounded-full"></div>
                      {/* Screen */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <img
                          src="/images/mini phones/linkedin.webp"
                          alt="AfroHeat LinkedIn frontpage"
                          className="w-full h-full object-cover blur-[2px]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <IconBrandLinkedin className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-2xl" />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <InstructorModal
        isOpen={isInstructorModalOpen}
        onClose={() => setIsInstructorModalOpen(false)}
      />
      <ContactInfoModal
        isOpen={isContactInfoModalOpen}
        onClose={() => setIsContactInfoModalOpen(false)}
      />
    </>
  );
};

export default ContactSection;