import React from 'react';
import GenericFormModal from './GenericFormModal';

interface PrivateClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivateClassModal: React.FC<PrivateClassModalProps> = ({ isOpen, onClose }) => {
  const privateClassFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSetuiI54Wl7PPxQ3v0a3IZFK90_Un-gmravR-N8NMyLsfQVAQ/viewform?embedded=true";

  return (
    <GenericFormModal
      isOpen={isOpen}
      onClose={onClose}
      formUrl={privateClassFormUrl}
      title="Private Class Registration"
      description="Fill out the form below to register for our private class"
      scrolling="yes"
    />
  );
};

export default PrivateClassModal;