import React from 'react';

interface BootcampModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BootcampModal: React.FC<BootcampModalProps> = ({ isOpen, onClose }) => {
  const bootcampFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdzuXr-j4pimFbAFsm6zp1E0YJkR61DL6O-NQZ8_fo1xOruTA/viewform";

  React.useEffect(() => {
    if (isOpen) {
      window.open(bootcampFormUrl, '_blank', 'noopener,noreferrer');
      onClose();
    }
  }, [isOpen, onClose, bootcampFormUrl]);

  return null; // No content needed since it auto-opens
};

export default BootcampModal;