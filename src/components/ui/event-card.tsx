import { motion } from 'framer-motion';
import { 
  IconCalendar, 
  IconMapPin, 
  IconClock, 
  IconUsers,
  IconStar
} from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    instructor: string;
    price: string;
    capacity: number;
    registered: number;
    category: string;
    image?: string;
    images?: string[];
  };
  isPast?: boolean;
  onViewDetails?: (event: EventCardProps['event']) => void;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, className, isPast, onViewDetails }) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'workshop':
        return { bg: 'bg-accent-4/20', text: 'text-accent-4' };
      case 'challenge':
        return { bg: 'bg-secondary/20', text: 'text-secondary' };
      case 'festival':
        return { bg: 'bg-accent-2/20', text: 'text-accent-2' };
      case 'conference':
        return { bg: 'bg-accent-3/20', text: 'text-accent-3' };
      default:
        return { bg: 'bg-primary/20', text: 'text-primary' };
    }
  };

  const categoryColors = getCategoryColor(event.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        "group bg-card rounded-2xl border border-border overflow-hidden",
        "hover:shadow-xl hover:border-primary/50 transition-all duration-300",
        "transform hover:scale-105 focus:scale-105 focus:outline-none",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.02 }}
      tabIndex={0}
    >
      {/* Image Container with 16:9 Aspect Ratio */}
      <div className="relative w-full aspect-video overflow-hidden">
        {event.image ? (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-56 object-cover"
          />
        ) : (
          <div className="w-full h-56 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <IconStar className="h-12 w-12 text-primary/30" />
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={cn(
            "inline-block px-3 py-1 rounded-full text-xs font-medium font-poppins",
            categoryColors.bg,
            categoryColors.text
          )}>
            {event.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 font-industry text-foreground group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 font-poppins line-clamp-2">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground font-poppins">
            <IconCalendar className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
            <span>
              {new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground font-poppins">
            <IconClock className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground font-poppins">
            <IconMapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground font-poppins">
            <IconUsers className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
            <span>{event.registered}/{event.capacity} registered</span>
          </div>
        </div>

        {/* Price and Register Button */}
        <div className="flex items-center justify-between">
          {event.price && (
            <span className="text-lg font-bold text-primary font-poppins">
              {event.price}
            </span>
          )}
          
          <button
            onClick={isPast ? () => onViewDetails?.(event) : undefined}
            className={cn(
              "bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium font-poppins",
              "hover:bg-primary/90 focus:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              "transition-all duration-200 transform hover:scale-105 focus:scale-105",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
            aria-label={isPast ? `View details for ${event.title}` : `Register for ${event.title}`}
          >
            {isPast ? 'View Details' : 'Register Now'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;