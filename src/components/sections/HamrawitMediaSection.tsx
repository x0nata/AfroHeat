"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { IconExternalLink } from '@tabler/icons-react';

interface MediaItem {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

const HamrawitMediaSection: React.FC = () => {
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      title: "YOUTUBE INTERVIEW 1",
      description: "First interview with Hamrawit about AfroHeat's journey",
      link: "https://youtu.be/qnWB-m7Ybys?si=BrBHG8nbaEinTmIn",
      image: "https://i.ytimg.com/vi/qnWB-m7Ybys/hqdefault.jpg" // YouTube thumbnail
    },
    {
      id: 2,
      title: "YOUTUBE INTERVIEW 2",
      description: "Second interview highlighting AfroHeat's impact",
      link: "https://youtu.be/Q9uazzpnEps?si=NS3zX4p7NNJvA26c",
      image: "https://i.ytimg.com/vi/Q9uazzpnEps/hqdefault.jpg" // YouTube thumbnail
    },
    {
      id: 3,
      title: "YOUTUBE INTERVIEW 3",
      description: "Third interview about community impact",
      link: "https://youtu.be/tnZRtSHueyA?si=7tXo6lSqYfWGRqG0",
      image: "https://i.ytimg.com/vi/tnZRtSHueyA/hqdefault.jpg" // YouTube thumbnail
    },
    {
      id: 4,
      title: "YOUTUBE INTERVIEW 4",
      description: "Interview about AfroHeat's mission and impact",
      link: "https://youtu.be/3znXXXJCTD4",
      image: "https://i.ytimg.com/vi/3znXXXJCTD4/hqdefault.jpg" // YouTube thumbnail
    },
    {
      id: 5,
      title: "MERHA MAGAZINE ARTICLE",
      description: "Women Who Inspire: Celebrating the Women Transforming Addis Ababa",
      link: "https://merha.co/women-who-inspire-celebrating-the-women-transforming-addis-ababa/",
      image: "/images/logos/afroheat logo black.webp" // NOTE: Replace with actual Merha Magazine article screenshot
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground font-industry mb-4">
            Media Publications and Features:
          </h2>
        </motion.div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-start"
            >
              <div className="flex items-center mb-4 md:mb-0 md:mr-6">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col sm:flex-row gap-6 lg:gap-8">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group w-full lg:w-1/2"
                >
                  <div className="overflow-hidden rounded-xl shadow-lg border border-border aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover max-w-full max-h-full group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/images/logos/afroheat logo black.webp';
                      }}
                    />
                  </div>
                </a>
                
                <div className="flex-1">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h3 className="text-xl font-bold text-primary font-industry mb-2 uppercase group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-poppins mb-2">
                      {item.description}
                    </p>
                    <div className="flex items-center text-primary font-poppins text-sm">
                      Read More
                      <IconExternalLink className="ml-1 h-4 w-4" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
 );
};

export default HamrawitMediaSection;