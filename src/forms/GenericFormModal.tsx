import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX } from '@tabler/icons-react';
import { lockScroll, unlockScroll } from '@/lib/overflowManager';

interface GenericFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formUrl: string;
  title: string;
 description?: string;
  height?: string;
  scrolling?: 'yes' | 'no';
}

const GenericFormModal: React.FC<GenericFormModalProps> = ({
  isOpen,
  onClose,
  formUrl,
  title,
  description,
  height = '2000px',
  scrolling = 'yes'
}) => {
  const handleOpenInNewTab = () => {
    window.open(formUrl, '_blank', 'noopener,noreferrer');
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
            className="relative bg-background rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[95vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 bg-background border-b border-border p-6 rounded-t-2xl z-10">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground font-industry mb-1">
                    {title}
                  </h2>
                  {description && (
                    <p className="text-muted-foreground text-sm font-poppins mb-2">
                      {description}
                    </p>
                  )}
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
            <div className="flex-grow overflow-hidden">
              <iframe
                src={formUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full h-full min-h-[500px]"
                title={title}
                scrolling={scrolling}
                style={{ height: 'calc(95vh - 150px)' }}
                onLoad={() => console.log('Iframe loaded successfully for form:', formUrl)}
                onError={(e) => console.error('Iframe error for form:', formUrl, e)}
              >
                Loading…
              </iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GenericFormModal;