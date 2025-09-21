import { motion } from 'framer-motion';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import SignatureClassCard from '../ui/signature-class-card';
import GoogleRating from '../ui/GoogleRating';
import {
  IconShield,
  IconUsers,
  IconHeart,
  IconTarget,
  IconBrandInstagram
} from '@tabler/icons-react';
import { useState, useEffect } from 'react';

// Custom Hook: Counter Animation
const useCounter = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const incrementTime = (duration / end) * 0.1;
    
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
      description: "Building lasting friendships while celebrating African music, dance, and culture together."
    },
    {
      icon: <IconHeart className="h-8 w-8" aria-hidden="true" />,
      title: "Holistic Wellness",
      description: "Focusing on physical, mental, and cultural well-being for complete life transformation."
    },
    {
      icon: <IconTarget className="h-8 w-8" aria-hidden="true" />,
      title: "Africa-Inspired",
      description: "Fitness programs that honor and celebrate African heritage and movement traditions."
    }
  ];

  const memberCount = useCounter(200);
  const yearCount = useCounter(4);
  const classCount = useCounter(3);

  const stats = [
    { number: `${yearCount}+`, label: "Years Strong", target: 4 },
    { number: `${memberCount}+`, label: "Active Members", target: 200 },
    { number: `${classCount}`, label: "Class Types", target: 3 },
    { number: "2021", label: "Founded", target: null }
  ];

  const services = [
    {
      title: "Dance Fitness",
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
      description: "High-energy dance workouts inspired by African rhythms. Burn calories while celebrating culture in a fun, supportive environment.",
      ctaText: "Join Dance Class",
      ctaHref: "/services#dance"
    },
    {
      title: "Bootcamp",
      src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&h=400&fit=crop",
      description: "Intensive 2-month program combining strength, cardio, and mobility. Transform your fitness with expert guidance in a supportive group setting.",
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
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 font-industry">
            Where Women{" "}
            <span className="text-primary">
              Celebrate Culture
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 font-poppins">
            More than just a gym, AfroHeat Fitness is a community where African and Black women
            can celebrate their heritage while building strength, confidence, and wellness.
          </p>
        </motion.div>


        {/* Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-foreground">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group relative"
              >
                {/* Floating background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-2xl text-primary-foreground mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {value.icon}
                  </motion.div>
                  <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-foreground font-industry">
                    {value.title}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-poppins">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 text-primary font-industry"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm md:text-base text-muted-foreground group-hover:text-primary transition-colors font-poppins">
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
          transition={{ duration: 0.8, delay: 0.2 }}
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
          transition={{ duration: 0.8, delay: 0.6 }}
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
          transition={{ duration: 0.8, delay: 0.8 }}
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
              '/images/about us/event & activities/IMG_5760.JPG',
              '/images/about us/event & activities/IMG_5833.JPG',
              '/images/about us/event & activities/IMG_5837.JPG',
              '/images/about us/event & activities/IMG_5843.JPG'
            ].map((src, index) => (
              <motion.a
                key={index}
                href="https://www.instagram.com/afroheatfitness?igsh=NGpsc3F0YnpydjJu"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-lg aspect-square bg-muted block"
              >
                <img
                  src={src}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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