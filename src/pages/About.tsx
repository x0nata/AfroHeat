 "use client";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import React, { useState, useMemo } from 'react';
import { Boxes } from '@/components/ui/background-boxes';
import AnimatedTrainersSection from '@/components/sections/AnimatedTrainersSection';
import {
  IconHeart,
  IconCalendar,
  IconTransform,
  IconUsers,
  IconBrandYoutube,
  IconFileText
} from '@tabler/icons-react';


// Simplified Image Component with lazy loading
const OptimizedImage = React.memo(({
  src,
  alt,
  className,
  fallbackSrc = "/images/logos/afroheat logo black.webp",
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  [key: string]: any;
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={`relative ${className || ''}`}>
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        onError={handleError}
        className={className}
        loading="lazy"
        decoding="async"
        {...props}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-md">
          <span className="text-muted-foreground text-sm font-poppins">Image not available</span>
        </div>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';


interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('fitness');
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  // Memoize categories to prevent unnecessary re-renders
  const categories = useMemo<Category[]>(() => [
    { id: 'fitness', name: 'Fitness', icon: <IconHeart className="h-5 w-5" /> },
    { id: 'events', name: 'Events & Activities', icon: <IconCalendar className="h-5 w-5" /> },
    { id: 'transformation', name: 'Transformation', icon: <IconTransform className="h-5 w-5" /> },
    { id: 'community', name: 'Community Engagement', icon: <IconUsers className="h-5 w-5" /> }
  ], []);

  // Picture collections for each category (with labels) - converted to WebP for better performance
  const pictureCollections = useMemo(() => ({
    fitness: [
      { id: 1, image: "/images/about us/fitness/IMG_2472.webp", title: "Fitness Class 1" },
      { id: 2, image: "/images/about us/fitness/IMG_2473.webp", title: "Fitness Class 2" },
      { id: 3, image: "/images/about us/fitness/IMG_7751.webp", title: "Fitness Class 3" }
    ],
    events: [
      { id: 1, image: "/images/about us/event & activities/IMG_2467.webp", title: "Event 1" },
      { id: 2, image: "/images/about us/event & activities/IMG_2475.webp", title: "Event 2" },
      { id: 3, image: "/images/about us/event & activities/IMG_2487.webp", title: "Event 3" },
      { id: 4, image: "/images/about us/event & activities/IMG_2489.webp", title: "Event 4" },
      { id: 5, image: "/images/about us/event & activities/IMG_2494.webp", title: "Event 5" }
    ],
    transformation: [
      { id: 1, image: "/images/about us/Transformation/IMG_0381.webp", title: "Transformation 1" },
      { id: 2, image: "/images/about us/Transformation/IMG_9101.webp", title: "Transformation 2" },
      { id: 3, image: "/images/about us/Transformation/IMG_9104.webp", title: "Transformation 3" }
    ],
    community: [
      { id: 1, image: "/images/about us/community engagement/IMG_4537.webp", title: "Community 1" },
      { id: 2, image: "/images/about us/community engagement/IMG_4898.webp", title: "Community 2" },
      { id: 3, image: "/images/about us/community engagement/IMG_4901.webp", title: "Community 3" },
      { id: 4, image: "/images/about us/community engagement/IMG_5832.webp", title: "Community 4" }
    ],
  }), []);

  const filteredPictures = useMemo(() =>
    pictureCollections[selectedCategory as keyof typeof pictureCollections] || [],
    [pictureCollections, selectedCategory]
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <section className="py-8 md:py-10 bg-background pb-4 md:pb-6">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className="text-center mb-2 md:mb-4"
         >
            {/* Founder Story - Remade Compact */}
            <motion.div
              className="w-full space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Circular Founder Image */}
                <div className="w-full lg:w-2/5 h-64 lg:h-auto flex-shrink-0 relative group mb-8 lg:mb-0">
                  {/* Container for square */}
                  <div
                    className="relative w-full max-w-sm aspect-square min-h-48 max-h-96 mx-auto shadow-lg border-4 border-primary/20 overflow-hidden"
                  >
                    {/* Blurred pattern background layer */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url('/images/logos/pattern.webp')`,
                        backgroundSize: '400px 200px',
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'center',
                        filter: 'blur(0.6px)'
                      }}
                    />
                    {/* Circular image on top */}
                    <div
                      className="absolute inset-0 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300 flex items-center justify-center"
                    >
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <OptimizedImage
                          src="/images/about us/aboutuspic.webp"
                          alt="Hamrawit Gizaw, Founder of AfroHeat"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Subtle accent ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
                    </div>
                  </div>
                </div>

                {/* Content & Links */}
                <div className="lg:w-3/5 space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold text-foreground font-industry mb-1">
                      Hamrawit Gizaw
                      <span className="text-primary">.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-poppins">Founder & CEO of AfroHeat</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-lg text-foreground leading-relaxed font-poppins">
                      Founded in 2021, AfroHeat was born from Hamrawit Gizaw's passion after returning to Ethiopia from the US and UK, where she earned degrees in Computer Science and Business Psychology.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed font-poppins">
                      Spotting a gap in women-only fitness spaces, she became a certified trainer, blending dance fitness with African culture to empower women.
                    </p>
                    <p className="text-lg text-foreground leading-relaxed font-poppins">
                      More than workouts, AfroHeat builds a vibrant community celebrating African music, dance, and wellness for women everywhere.
                    </p>
                  </div>

                  {/* Hear from Hamrawit - Small Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center gap-2 pt-4 border-t border-border"
                  >
                    <span className="text-sm font-medium text-muted-foreground font-poppins mr-4 whitespace-nowrap">Hear from Hamrawit:</span>
                    {[
                      { href: "https://youtu.be/qnWB-m7Ybys?si=BrBHG8nbaEinTmIn", icon: <IconBrandYoutube className="h-4 w-4" />, aria: "First interview" },
                      { href: "https://youtu.be/Q9uazzpnEps?si=NS3zX4p7NNJvA26c", icon: <IconBrandYoutube className="h-4 w-4" />, aria: "Second interview" },
                      { href: "https://youtu.be/tnZRtSHueyA?si=7tXo6lSqYfWGRqG0", icon: <IconBrandYoutube className="h-4 w-4" />, aria: "Third interview" },
                      { href: "https://merha.co/women-who-inspire-celebrating-the-women-transforming-addis-ababa/", icon: <IconFileText className="h-4 w-4" />, aria: "Featured article" }
                    ].map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded-md text-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 border border-border hover:border-primary/50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={link.aria}
                      >
                        {link.icon}
                        <span className="sr-only">{index < 3 ? `Interview ${index + 1}` : 'Article'}</span>
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

       {/* Trainers Section */}
      <AnimatedTrainersSection />

      {/* Category Filter */}
      <section className="py-8 bg-card">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", duration: 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                {category.icon}
                <span className="font-poppins">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Picture Collections Grid */}
      <section className="py-16 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {filteredPictures.map((picture) => (
              <div
                key={picture.id}
                className="group relative w-full bg-card rounded-xl shadow-lg border border-border overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105"
                onClick={() => setExpandedImage(picture.image)}
              >
                <OptimizedImage
                  src={picture.image}
                  alt={`AfroHeat ${selectedCategory} image ${picture.id}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-foreground font-industry group-hover:text-primary transition-colors">
                    {picture.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Image Expansion Modal */}
          {expandedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              onClick={() => setExpandedImage(null)}
            >
              <div
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-primary-foreground bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
                  onClick={() => setExpandedImage(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <OptimizedImage
                  src={expandedImage}
                  alt="Expanded view"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </section>     
      
      <motion.section
        className="py-6 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg group"
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
              className="text-base text-muted-foreground mb-4 font-poppins"
              variants={{
                hover: {
                  y: -3,
                  transition: { duration: 0.3 }
                }
              }}
            >
              Fitness in a way that feels right.
              Join us in creating a healthier, more active lifestyle for Women.
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
      {/* Separator */}
      <div className="h-4"></div>
    </div>
  );
};

export default About;