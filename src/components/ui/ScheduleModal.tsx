import React, { Fragment, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { lockScroll, unlockScroll } from '@/lib/overflowManager';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const scheduleData = {
     monday: {
      strength: ['7:00 AM', '8:00 AM', '9:00 AM', '5:00 PM', '6:00 PM', '7:00 PM'],
      kickboxing: ['6:00 PM']
    },
    tuesday: {
      strength: ['6:00 AM', '7:00 AM', '8:00 AM', '5:00 PM', '6:00 PM', '7:00 PM'],
      kickboxing: ['7:00 AM', '8:00 AM', '9:00 AM']
    },
    wednesday: {
      strength: ['5:00 PM', '6:00 PM', '7:00 PM'],
      kickboxing: ['6:00 PM']
    },
    thursday: {
      strength: ['6:00 AM', '7:00 AM', '8:00 AM', '5:00 PM', '6:00 PM', '7:00 PM'],
      kickboxing: ['7:00 AM', '8:00 AM', '9:00 AM']
    },
    friday: {
      strength: ['7:00 AM', '8:00 AM', '9:00 AM', '5:00 PM', '6:00 PM', '7:00 PM'],
      kickboxing: ['6:00 PM']
    },
    saturday: {
      strength: ['8:00 AM', '9:00 AM'],
      kickboxing: ['9:00 AM']
    }
  };

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getIcon = (time: string) => {
    const [hourStr, period] = time.split(' ');
    const hour = parseInt(hourStr.split(':')[0]);
    if (period === 'PM' && hour >= 6) {
      return Moon;
    }
    return Sun;
  };

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    // Cleanup function to ensure scroll is unlocked when component unmounts
    return () => {
      unlockScroll();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-background rounded-xl shadow-2xl w-full max-w-sm sm:max-w-2xl md:max-w-3xl max-h-[98vh] border border-primary/20 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-2 sm:p-4">
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <h2 className="text-base sm:text-xl font-bold text-primary font-industry uppercase tracking-wide">Group Classes Schedule</h2>
              <button
                onClick={onClose}
                className="text-foreground hover:text-primary text-xl font-bold transition-colors duration-200"
              >
                ×
              </button>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {days.map((day, index) => (
                <Fragment key={day}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="font-poppins bg-primary/5 rounded-lg p-2 sm:p-3 border border-primary/10"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 sm:mb-2 uppercase tracking-wide">
                      {dayNames[index]}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                      <div className="space-y-0.5 sm:space-y-1">
                        <h4 className="font-semibold text-primary text-[10px] sm:text-xs uppercase tracking-wide">Strength & Conditioning</h4>
                        <div className="flex flex-wrap gap-0.5 sm:gap-1">
                          {scheduleData[day as keyof typeof scheduleData].strength.map((time, timeIndex) => {
                            const Icon = getIcon(time);
                            return (
                              <motion.div
                                key={time}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  delay: index * 0.05 + timeIndex * 0.02
                                }}
                                className="flex items-center gap-1 ml-1 min-w-0"
                              >
                                <Icon className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-primary flex-shrink-0" size={8} />
                                <span className="text-[10px] sm:text-xs font-bold text-foreground whitespace-nowrap">
                                  {time}
                                </span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="space-y-0.5 sm:space-y-1">
                        <h4 className="font-semibold text-primary text-[10px] sm:text-xs uppercase tracking-wide">Kickboxing</h4>
                        <div className="flex flex-wrap gap-0.5 sm:gap-1">
                          {scheduleData[day as keyof typeof scheduleData].kickboxing.map((time, timeIndex) => {
                            const Icon = getIcon(time);
                            return (
                              <motion.div
                                key={time}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  delay: index * 0.05 + timeIndex * 0.02
                                }}
                                className="flex items-center gap-1 ml-1 min-w-0"
                              >
                                <Icon className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-primary flex-shrink-0" size={8} />
                                <span className="text-[10px] sm:text-xs font-bold text-foreground whitespace-nowrap">
                                  {time}
                                </span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Fragment>
              ))}
            </div>
            <div className="text-center text-xs text-muted-foreground bg-primary/5 p-1 sm:p-2 rounded mt-1 sm:mt-2 border border-primary/10">
              *Daily online booking required +2519044222
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ScheduleModal;