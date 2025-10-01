import { motion } from 'framer-motion';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import SignatureClassCard from '../ui/signature-class-card';
import GoogleRating from '../ui/GoogleRating';
import WhyChooseUsCards from '../ui/why-choose-us-cards';
import {
  IconShield,
  IconUsers,
  IconHeart,
  IconBrandInstagram
} from '@tabler/icons-react';
import { useState, useEffect } from 'react';

// Custom Hook: Counter Animation
const useCounter = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = (1500 / end) * 0.1;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

const AboutSection: React.FC = () => {
  const testimonials = [
    {
      quote: "I used to dance alone in my house and I don't know why but suddenly I stopped. This class brings out that side of me!",
      name: "Member",
      title: "AfroHeat Regular",
    },
    {
      quote: "Everybody was awesome and the instructor has Hella energy 🔥❤️",
      name: "Member",
      title: "Dance Fitness Enthusiast",
    },
    {
      quote: "This class was so fun and great for my body!",
      name: "Member",
      title: "Fitness Newcomer",
    },
    {
      quote: "Wonderful, wonderful women’s gym. The classes are fantastic, the community is great, and it’s just such a great space. Plus there’s a nice cafe for breakfast or lunch!",
      name: "Sara Linssen",
      title: "Community Enthusiast",
    },
    {
      quote: "It's a safe space and brave space for all women! We need more places like this! The yoga classes are great & fit all levels. The Kickboxing and Bootcamp sessions provide a great challenge to strengthen body & mind.",
      name: "heranheru hero",
      title: "Member",
    },
    {
      quote: "Afroheat is an amazing space and community. There are inspiring and wonderful women that motivate each other not just in workout. Most inspiring of them all head coach Hamrawit.",
      name: "Heran Tebeka",
      title: "Community Supporter",
    },
    {
      quote: "Not just a gym. This is a sanctuary for self care. Love going to AfroHeat.",
      name: "Mahlet Gizaw",
      title: "AfroHeat Regular",
    },
    {
      quote: "Afroheat is an amazing space and community. There are inspiring and wonderful women that motivate each other not just in workout. Most inspiring of them all head coach Hamrawit.",
      name: "Heran Tebeka",
      title: "Inspired Member",
    },
    {
      quote: "The perfect place to move your body and meet interesting people!",
      name: "AfroHeat Regular",
      title: "Member",
    },
    {
      quote: "AfroHeat is the best ladies-only gym in town!  Daily strength and kickboxing classes are intense, dynamic, and guaranteed to make you BURN and feel stronger and energised. But what truly sets AfroHeat apart is the incredible community, filled with strong, beautiful, and committed women who uplift and motivate each other every step of the way. Love it!",
      name: "Mari H",
      title: "Member",
    },
    {
      quote: "Professional and friendly Team.",
      name: "Awa Mbaye",
      title: "Satisfied Client",
    },
    {
      quote: "This place rocks with powerful women",
      name: "Heran Tadesse",
      title: "Empowered Member",
    },
    {
      quote: "If you’re looking for a place that will give you the instant feeling of home, a place that isn’t just a gym but a community for wellness, you’ve come to the right place. Wonderful management, clean and warm place to be yourself and feel your best. I highly recommend ❤️",
      name: "Barsenet Wondwossen",
      title: "AfroHeat Regular",
    }
  ];

  const values = [
    {
      icon: <IconShield className="h-8 w-8" aria-hidden="true" />,
      title: "Safe Space",
      description: "A judgement-free environment where women can feel comfortable and confident in their fitness journey."
    },
    {
      icon: <IconUsers className="h-8 w-8" aria-hidden="true" />,
      title: "Cultural Community",
      description: "Building lasting friendships while building your desired body."
    },
    {
      icon: <IconHeart className="h-8 w-8" aria-hidden="true" />,
      title: "Holistic Wellness",
      description: "Focusing on physical and mental well-being for complete life transformation."
    }
 ];

  const memberCount = useCounter(200);
  const yearCount = useCounter(4);
  const classCount = useCounter(30);

  const stats = [
    { number: `${yearCount}+`, label: "Years Strong", target: 4 },
    { number: `${memberCount}+`, label: "Active Members", target: 200 },
    { number: `${classCount}+`, label: "Classes per Week", target: 30 }
  ];

  const services = [
    {
      title: "Dance Fitness",
      src: "/images/new/dance.webp",
      description: "High-energy dance workouts. Burn calories while in a fun, supportive environment.",
      ctaText: "Join Dance Class",
      ctaHref: "/services#dance"
    },
    {
      title: "Bootcamp",
      src: "/images/new/boootcamp.webp",
      description: "Intensive program combining strength, cardio, and mobility. Transform your fitness with expert guidance in a supportive group setting.",
      ctaText: "Start Bootcamp",
      ctaHref: "/services#bootcamp"
    },
    {
      title: "Student Pass",
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=400&fit=crop",
      description: "Affordable and flexible access plans tailored for students. Balance fitness with your study schedule and join our vibrant community.",
      ctaText: "Get Student Pass",
      ctaHref: "/services#studentpass"
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-background text-foreground">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        

        {/* Why Choose Us Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-0">
            <div className="inline-flex items-center justify-center mb-0">
              <IconHeart className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
              <span className="text-sm uppercase font-bold text-primary tracking-wide">Why Choose Us</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-industry">
              Where Women{" "}
              <span className="text-primary">
                find strength & community
              </span>
            </h3>
          </div>

          {/* Main content container with modern collage layout */}
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="flex justify-center my-0">
              <WhyChooseUsCards
                leftImage="/images/why us/IMG_20251001_122529_701.webp"
                middleImage="/images/why us/IMG_20251001_122538_467.webp"
                rightImage="/images/why us/IMG_2523.webp"
              />
            </div>

            {/* Feature boxes with updated design - no background */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-xl p-4 overflow-hidden group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-3 mx-auto">
                    <div className="h-6 w-6 text-primary flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-base font-bold mb-2 font-industry text-foreground text-center">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed text-center font-poppins">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-foreground border border-border relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                  style={{ top: `${(i + 1) * 20}%` }}
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2.25 + i * 0.75,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.375
                  }}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group min-w-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 text-primary font-industry whitespace-nowrap"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs sm:text-sm md:text-base text-muted-foreground group-hover:text-primary transition-colors font-poppins whitespace-nowrap">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Signature Classes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 md:mb-12 text-foreground font-industry">
            Our Signature Classes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full px-4 md:px-8">
            {services.map((service) => (
              <SignatureClassCard
                key={service.title}
                classData={service}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 w-full"
        >
          <div className="flex justify-center mb-8">
            <GoogleRating />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground font-industry">
            What Our Members Say
          </h3>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            aria-label="Member testimonials carousel"
          />
        </motion.div>

        {/* Instagram Follow Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 w-full"
        >
          <div className="text-center mb-4 md:mb-12">
            <motion.a
              href="https://www.instagram.com/afroheatfitness?igsh=NGpsc3F0YnpydjJu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:text-primary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground font-industry">
                Follow us on instagram
              </h3>
            </motion.a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              '/images/about us/event & activities/IMG_7019.webp',
              '/images/about us/event & activities/IMG_5833.webp',
              '/images/about us/event & activities/IMG_5837.webp',
              '/images/about us/event & activities/IMG_5843.webp'
            ].map((src, index) => (
              <motion.a
                key={index}
                href="https://www.instagram.com/afroheatfitness?igsh=NGpsc3F0YnpydjJu"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg aspect-square bg-muted block"
              >
                <img
                  src={src}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-225"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <IconBrandInstagram className="h-12 w-12 text-white drop-shadow-2xl" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default AboutSection;