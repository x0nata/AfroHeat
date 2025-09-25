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
      dragPropagation={false}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 40, power: 0.2 }}
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
      style={{ zIndex: baseZIndex, touchAction: 'none' }}
      className={cn(
        "group bg-primary text-primary-foreground rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing relative flex flex-col",
        "hover:shadow-2xl",
        "before:absolute before:inset-0 before:rounded-2xl before:p-px before:bg-gradient-to-br before:from-secondary/50 before:via-accent/50 before:to-primary/50",
        "before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className
      )}
    >
      {/* Glow effect on drag */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 opacity-0 rounded-2xl"
        whileDrag={{ opacity: 0.6 }}
        whileHover={{ opacity: 0.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Logo Section - Top Center */}
      <div className="flex flex-col items-center justify-center pt-4 pb-2 flex-shrink-0 z-20">
        <img
          src="/images/logos/afroheat yellow.webp"
          alt="AFROHEAT Logo"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain mx-auto mb-1"
        />
      </div>

      {/* Content Section - Yellow/Orange Block */}
      <div className="relative flex-1 bg-secondary rounded-t-xl mx-2 mb-2 overflow-hidden z-10">
        {children}
      </div>

      {/* Bottom AFROHEAT if needed, but moved to top */}
    </motion.div>
  );
}

interface DraggableCardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function DraggableCardContainer({ children, className }: DraggableCardContainerProps) {
  return (
    <div className={cn("relative flex min-h-[400px] sm:min-h-[500px] md:min-h-[600px] w-full items-center justify-center overflow-clip", className)}>
      {children}
    </div>
  );
}