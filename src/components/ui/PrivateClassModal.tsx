import React, { useEffect } from 'react';
import GoogleFormModal from './GoogleFormModal';

interface PrivateClassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivateClassModal: React.FC<PrivateClassModalProps> = ({ isOpen, onClose }) => {
  const privateClassFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc9Lj8kH9qI1QUSmJfN7kgCRvUqCqawGPJTo09Y8YtFy731dA/viewform";

  return (
    <GoogleFormModal
      isOpen={isOpen}
      onClose={onClose}
      formUrl={privateClassFormUrl}
      title="Request Private Class"
      description="Fill out this form to request a private class session. We'll get back to you with available time slots and pricing."
    />
  );
};

export default PrivateClassModal;