import React from 'react';
import { IconBell } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const NewEventCard: React.FC = () => {
  return (
    <div className={cn(
      "bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
      "w-80 max-w-sm relative z-10"
    )}>
      <h3 className="text-lg font-bold mb-4 text-foreground font-industry">New Event</h3>
      <div className="space-y-3 mb-4">
        <input
          type="text"
          placeholder="Scheduled For"
          className="w-full p-3 border border-border rounded-lg text-sm font-poppins bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
        <input
          type="text"
          placeholder="Recipients"
          className="w-full p-3 border border-border rounded-lg text-sm font-poppins bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
      </div>
      <button className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200">
        <IconBell size={16} className="text-primary-foreground" />
      </button>
    </div>
  );
};

export default NewEventCard;