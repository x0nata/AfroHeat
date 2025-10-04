import React from 'react';
import GoogleFormModal from './GoogleFormModal';

interface InstructorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructorModal: React.FC<InstructorModalProps> = ({ isOpen, onClose }) => {
  const instructorFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSepedOfJ73sJBami1wnX_kzlhiLJDo1hPtrqPQErGeW-fpwzw/viewform";

  return (
    <GoogleFormModal
      isOpen={isOpen}
      onClose={onClose}
      formUrl={instructorFormUrl}
      title="Become an Instructor"
      description="Apply to join our team."
    />
  );
};

export default InstructorModal;