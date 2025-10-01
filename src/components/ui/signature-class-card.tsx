import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SignatureClassCardProps {
  classData: {
    title: string;
    src: string;
    description: string;
    ctaText: string;
    ctaHref?: string;
  };
  className?: string;
}

const SignatureClassCard: React.FC<SignatureClassCardProps> = ({ classData, className }) => {
  const handleCtaClick = () => {
    if (classData.ctaHref) {
      window.location.href = classData.ctaHref;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        "group bg-gradient-to-br from-card to-card/80 rounded-3xl border-2 border-border/20 overflow-hidden",
        "hover:shadow-2xl hover:border-primary/30 transition-all duration-500",
        "transform hover:scale-105 focus:scale-105 focus:outline-none",
        "w-full max-w-md mx-auto relative",
        className
      )}
      whileHover={{ scale: 1.03, y: -10 }}
      whileTap={{ scale: 1.02 }}
      tabIndex={0}
      role="article"
      aria-label={`${classData.title} - ${classData.description}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          src={classData.src}
          alt={classData.title}
          className="w-full h-full object-cover max-w-full max-h-full group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold mb-4 font-industry text-foreground group-hover:text-primary transition-colors duration-300">
          {classData.title}
        </h3>
        
        <p className="text-muted-foreground text-base mb-6 font-poppins leading-relaxed">
          {classData.description}
        </p>

        {/* CTA Button */}
        <motion.button
          onClick={handleCtaClick}
          className={cn(
            "w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-4 rounded-xl font-bold font-poppins",
            "hover:from-primary hover:to-primary/90 focus:from-primary focus:to-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2",
            "transition-all duration-300 transform hover:scale-105 focus:scale-105",
            "shadow-lg hover:shadow-xl relative overflow-hidden group"
          )}
          aria-label={`Learn more about ${classData.title}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">{classData.ctaText}</span>
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SignatureClassCard;