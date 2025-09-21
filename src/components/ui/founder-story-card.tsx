"use client";
import { motion } from 'framer-motion';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { cn } from '@/lib/utils';

interface FounderStoryCardProps {
  name: string;
  title: string;
  imageSrc: string;
  description: string[];
  className?: string;
}

const FounderStoryCard: React.FC<FounderStoryCardProps> = ({
  name,
  title,
  imageSrc,
  description,
  className
}) => {
  return (
    <CardSpotlight
      radius={400}
      color="#8c1e81"
      className={cn(
        "p-8 md:p-12 bg-card border-2 border-primary/20",
        "hover:border-primary/40 transition-all duration-300",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:w-2/5"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={imageSrc}
              alt={`${name}, ${title}`}
              className="relative rounded-2xl shadow-2xl w-full h-auto max-w-sm mx-auto transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold font-industry text-sm shadow-lg">
              Founder & CEO
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="lg:w-3/5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-industry mb-2">
              {name}
              <span className="text-primary">.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-poppins">{title}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {description.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-foreground leading-relaxed font-poppins"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center space-x-4 pt-4"
          >
            <div className="w-8 h-1 bg-primary rounded-full" />
            <div className="w-4 h-1 bg-secondary rounded-full" />
            <div className="w-2 h-1 bg-accent-4 rounded-full" />
          </motion.div>
        </div>
      </div>
    </CardSpotlight>
  );
};

export default FounderStoryCard;