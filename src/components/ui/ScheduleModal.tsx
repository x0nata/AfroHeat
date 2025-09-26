import React, { ReactFragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const scheduleData = {
    monday: {
      strength: ['7am', '8am', '9am', '5pm', '6pm', '7pm'],
      kickboxing: ['6pm']
    },
    tuesday: {
      strength: ['6am', '7am', '8am', '5pm', '6pm', '7pm'],
      kickboxing: ['7am', '8am', '9am']
    },
    wednesday: {
      strength: ['5pm', '6pm', '7pm'],
      kickboxing: ['6pm']
    },
    thursday: {
      strength: ['6am', '7am', '8am', '5pm', '6pm', '7pm'],
      kickboxing: ['7am', '8am', '9am']
    },
    friday: {
      strength: ['7am', '8am', '9am', '5pm', '6pm', '7pm'],
      kickboxing: ['6pm']
    },
    saturday: {
      strength: ['8am', '9am'],
      kickboxing: ['9am']
    }
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-screen border border-primary/20"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-2 overflow-y-auto scrollbar-hide max-h-[80vh]">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-2xl font-bold text-primary font-industry uppercase">Group Classes Schedule</h2>
              <button
                onClick={onClose}
                className="text-foreground hover:text-primary text-xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="space-y-1 mb-2">
              {days.map((day, index) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-1.5 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-md p-2 shadow-sm border border-primary/10 hover:shadow-md transition-shadow duration-300 font-poppins"
                >
                  <div className="md:col-span-2">
                    <h3 className="text-base font-bold text-foreground mb-1 text-center md:text-left uppercase tracking-wide">
                      {dayNames[index]}
                    </h3>
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-semibold text-primary text-xs uppercase tracking-wide">Strength & Conditioning</h4>
                    <div className="flex flex-wrap gap-0.5">
                      {scheduleData[day as keyof typeof scheduleData].strength.map((time) => (
                        <motion.span
                          key={time}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="bg-primary/90 hover:bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200 cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {time}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-semibold text-secondary text-xs uppercase tracking-wide">Kickboxing</h4>
                    <div className="flex flex-wrap gap-0.5">
                      {scheduleData[day as keyof typeof scheduleData].kickboxing.map((time) => (
                        <motion.span
                          key={time}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="bg-secondary/90 hover:bg-secondary text-secondary-foreground px-1.5 py-0.5 rounded-full text-xs font-medium shadow-sm hover:shadow-md transition-all duration-200 cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {time}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center text-xs text-muted-foreground bg-accent/5 p-1 rounded mt-1">
              *Daily online booking required +2519044222
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScheduleModal;