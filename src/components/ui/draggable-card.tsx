import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DraggableCardBodyProps {
  children: React.ReactNode;
  className?: string;
  baseZIndex?: number;
}

export function DraggableCardBody({ children, className, baseZIndex = 1 }: DraggableCardBodyProps) {
  return (
    <motion.div
      drag
      dragElastic={0.8}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 30 }}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        zIndex: 20,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.95,
        zIndex: 20,
        transition: { duration: 0.15, ease: "easeOut" }
      }}
      style={{ zIndex: baseZIndex }}
      className={cn(
        "group bg-card rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing",
        "border border-transparent bg-clip-padding",
        "hover:shadow-2xl transition-all duration-300 relative",
        "before:absolute before:inset-0 before:rounded-2xl before:p-px before:bg-gradient-to-br before:from-primary/50 before:via-secondary/50 before:to-accent-2/50",
        "before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className
      )}
    >
      {/* Glow effect on drag */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 rounded-2xl"
        whileDrag={{ opacity: 0.6 }}
        whileHover={{ opacity: 0.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <div className="relative z-10 bg-card rounded-2xl p-4">
        {children}
      </div>
    </motion.div>
  );
}

interface DraggableCardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function DraggableCardContainer({ children, className }: DraggableCardContainerProps) {
  return (
    <div className={cn("relative flex min-h-[600px] w-full items-center justify-center overflow-clip", className)}>
      {children}
    </div>
  );
}