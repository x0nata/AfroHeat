import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    image: string;
    status: 'Available' | 'Coming Soon';
    price?: string;
  };
  className?: string;
  onSignUp?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, className, onSignUp }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className={cn(
        "group bg-gradient-to-br from-card to-card/80 rounded-3xl border-2 border-border/20 overflow-hidden",
        "hover:shadow-2xl hover:border-primary/30 transition-all duration-375",
        "transform hover:scale-105 focus:scale-105 focus:outline-none",
        "relative backdrop-blur-sm",
        className
      )}
      whileHover={{ scale: 1.05, rotateY: 2 }}
      whileTap={{ scale: 1.02 }}
      tabIndex={0}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-375 rounded-3xl" />
      
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover max-w-full max-h-full group-hover:scale-110 transition-transform duration-375"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={cn(
            "inline-block px-4 py-2 rounded-full text-sm font-bold font-poppins backdrop-blur-sm",
            "border-2 border-white/20 shadow-lg",
            service.status === 'Coming Soon'
              ? 'bg-secondary/30 text-secondary border-secondary/30'
              : 'bg-accent-4/30 text-accent-4 border-accent-4/30'
          )}>
            {service.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold mb-4 font-industry text-foreground group-hover:text-primary transition-colors duration-225">
          {service.title}
        </h3>
        
        <p className="text-muted-foreground text-base mb-6 font-poppins line-clamp-3 leading-relaxed">
          {service.description}
        </p>

        {/* Price (if available) */}
        {service.price && (
          <div className="mb-6">
            <span className="text-xl font-bold text-primary font-poppins bg-primary/10 px-4 py-2 rounded-full">
              {service.price}
            </span>
          </div>
        )}

        {/* CTA Button or Coming Soon */}
        {service.status === 'Available' ? (
          <motion.button
            className={cn(
              "w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-4 rounded-xl font-bold font-poppins",
              "hover:from-primary hover:to-primary/90 focus:from-primary focus:to-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2",
              "transition-all duration-300 transform hover:scale-105 focus:scale-105",
              "shadow-lg hover:shadow-xl relative overflow-hidden group"
            )}
            aria-label={`Sign up for ${service.title}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSignUp}
          >
            <span className="relative z-10">Sign Up Now</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.45 }}
            />
          </motion.button>
        ) : (
          <div className="w-full bg-muted/50 text-muted-foreground py-4 rounded-xl text-center font-bold font-poppins border-2 border-border/20">
            Coming Soon
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;