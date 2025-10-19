 "use client";
import { motion } from 'framer-motion';
import React, { useState, useMemo } from 'react';
import AboutTrainersSection from '@/components/sections/AboutTrainersSection';
import HamrawitMediaSection from '@/components/sections/HamrawitMediaSection';
import {
  IconHeart,
  IconTransform,
  IconUsers,
} from '@tabler/icons-react';


interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('outcommunity');
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  // Memoize categories to prevent unnecessary re-renders
  const categories = useMemo<Category[]>(() => [
    { id: 'outcommunity', name: 'Our Space', icon: <IconHeart className="h-5 w-5" /> },
    { id: 'transformation', name: 'Transformation', icon: <IconTransform className="h-5 w-5" /> },
    { id: 'community', name: 'Community Engagement', icon: <IconUsers className="h-5 w-5" /> }
  ], []);

  // Picture collections for each category (with labels) - converted to WebP for better performance
  const pictureCollections = useMemo(() => ({
    outcommunity: [
      { id: 1, image: "/images/about us/our space/IMG_4295.webp", title: "" }
    ],
    transformation: [
      { id: 1, image: "/images/about us/Transformation/IMG_0381.webp", title: "" },
      { id: 2, image: "/images/about us/Transformation/IMG_9104.webp", title: "" },
      { id: 3, image: "/images/about us/Transformation/IMG_20251002_114409_421.webp", title: "" },
      { id: 4, image: "/images/about us/Transformation/IMG_20251002_114431_613.webp", title: "" },
      { id: 5, image: "/images/about us/Transformation/c1.webp", title: "" },
      { id: 6, image: "/images/about us/Transformation/c2.webp", title: "" }
     
    ],
    community: [
      { id: 1, image: "/images/about us/community engagement/IMG_4898.webp", title: "" },
      { id: 2, image: "/images/about us/community engagement/IMG_4901.webp", title: "" },
      { id: 3, image: "/images/about us/community engagement/IMG_8788.webp", title: "" }
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
           transition={{ duration: 0.45 }}
           viewport={{ once: true }}
           className="text-center mb-2 md:mb-4"
         >
            {/* Founder Story - Remade Compact */}
            <motion.div
              className="w-full space-y-6 ml-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
                {/* Founder Image */}
                <div
                  className="w-full lg:w-2/5 flex-shrink-0 relative group mb-8 lg:mb-0 z-0"
                  style={{ minHeight: '256px' }} // min-h-64 equivalent
                >
                  {/* Container for square */}
                  <div
                    className="relative w-full max-w-sm aspect-square mx-auto shadow-lg border-4 border-primary/20 rounded-lg overflow-hidden"
                    style={{
                      backgroundImage: `url('/images/about us/founderpic.webp')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      minHeight: '256px' // min-h-64 equivalent
                    }}
                  >
                    {/* Optional overlay for hover effect */}
                    <div
                      className="absolute inset-0 rounded-lg transition-transform duration-225 scale-100 group-hover:scale-105"
                      style={{
                        backgroundImage: `url('/images/about us/founderpic.webp')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        transformOrigin: 'center'
                      }}
                    ></div>
                  </div>
                </div>

                {/* story */}
                <div className="w-full lg:w-3/5 space-y-4 z-10">
                  <div>
                    <h1 className="text-4xl font-bold text-foreground font-industry mb-1">
                      Hamrawit Gizaw
                      <span className="text-primary">.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-poppins">Founder & CEO of AfroHeat</p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-lg text-foreground leading-relaxed font-poppins">
                      Founded in 2021, AfroHeat was born from
                      Hamrawit Gizaw's passion after returning
                      to Ethiopia from the US and UK, where she
                      earned degrees in Computer Science and
                      Business Psychology.

                    
                    </p>
                    <p className="text-lg text-foreground leading-relaxed font-poppins">
                      Spotting a gap in women-only fitness
                      spaces, she became a certified trainer,
                      blending dance fitness to empower women.

                      More than workouts, AfroHeat builds a
                      vibrant community celebrating 
                      music, dance, and wellness for women
                      everywhere.
                    </p>
          
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
              </section>
       
              {/* Hear from Hamrawit - Media Features */}
              <HamrawitMediaSection />
       
               {/* Trainers Section */}
                     <AboutTrainersSection />

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
                transition={{ type: "tween", duration: 0.15 }}
                viewport={{ once: true }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                {category.icon}
                <span className="font-poppins text-sm">{category.name}</span>
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
                className="group relative w-full bg-card rounded-xl shadow-lg border border-border overflow-hidden transition-transform duration-225 hover:shadow-xl hover:scale-105"
                onClick={() => setExpandedImage(picture.image)}
              >
                <img
                  src={picture.image}
                  alt={`AfroHeat ${selectedCategory} image ${picture.id}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  {picture.title && picture.title.trim() !== '' && (
                    <h3 className="text-lg font-bold mb-2 text-foreground font-industry group-hover:text-primary transition-colors duration-225">
                      {picture.title}
                    </h3>
                  )}
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
                <img
                  src={expandedImage}
                  alt="Expanded view"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </section>     
      
      {/* Separator */}
      <div className="h-4"></div>
    </div>
  );
};

export default About;