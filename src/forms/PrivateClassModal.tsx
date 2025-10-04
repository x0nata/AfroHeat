import React from 'react';
import GenericFormModal from './GenericFormModal';

interface PrivateClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivateClassModal: React.FC<PrivateClassModalProps> = ({ isOpen, onClose }) => {
  const privateClassFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdYumH-e7Y9kIVgkixZ2ucqo1s5bkIYj74Z1tysyij36I0K_Q/viewform";

  return (
    <GenericFormModal
      isOpen={isOpen}
      onClose={onClose}
      formUrl={privateClassFormUrl}
      title="Private Class Registration"
      description="Fill out the form below to register for our private class"
      scrolling="no"
    />
  );
};

export default PrivateClassModal;