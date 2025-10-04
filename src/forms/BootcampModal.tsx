import React from 'react';
import GenericFormModal from './GenericFormModal';

interface BootcampModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BootcampModal: React.FC<BootcampModalProps> = ({ isOpen, onClose }) => {
  const bootcampFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdYumH-e7Y9kIVgkixZ2ucqo1s5bkIYj74Z1tysyij36I0K_Q/viewform?embedded=true";

  return (
    <GenericFormModal
      isOpen={isOpen}
      onClose={onClose}
      formUrl={bootcampFormUrl}
      title="Bootcamp Registration"
      description="Fill out the form below to register for our bootcamp"
    />
  );
};

export default BootcampModal;