import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX } from '@tabler/icons-react';
import { lockScroll, unlockScroll } from '@/lib/overflowManager';

interface BootcampModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BootcampModal: React.FC<BootcampModalProps> = ({ isOpen, onClose }) => {
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

  const handleOpenInNewTab = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdYumH-e7Y9kIVgkixZ2ucqo1s5bkIYj74Z1tysyij36I0K_Q/viewform', '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.24 }}
            className="relative bg-background rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[95vh] overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 bg-background border-b border-border p-6 rounded-t-2xl z-10">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground font-industry mb-1">
                    Bootcamp Registration
                  </h2>
                  <p className="text-muted-foreground text-sm font-poppins mb-2">
                    Fill out the form below to register for our bootcamp
                  </p>
                  <button
                    onClick={handleOpenInNewTab}
                    className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium font-poppins transition-colors"
                  >
                    Open in new tab →
                  </button>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors ml-4"
                >
                  <IconX className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Google Form Embed */}
            <div className="p-6 overflow-y-auto max-h-[calc(95vh-150px)]">
              <div className="w-full h-[2762px] rounded-lg border border-border bg-muted/20 overflow-hidden">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdYumH-e7Y9kIVgkixZ2ucqo1s5bkIYj74Z1tysyij36I0K_Q/viewform?embedded=true"
                  width="100%"
                  height="2762"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full h-[2762px] rounded-lg"
                  title="Bootcamp Registration Form"
                  scrolling="no"
                  style={{ border: 'none' }}
                  onLoad={() => console.log('Bootcamp form iframe loaded successfully')}
                  onError={(e) => console.error('Bootcamp form iframe error', e)}
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BootcampModal;