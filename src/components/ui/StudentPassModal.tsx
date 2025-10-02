import React from 'react';
import GoogleFormModal from './GoogleFormModal';

interface StudentPassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StudentPassModal: React.FC<StudentPassModalProps> = ({ isOpen, onClose }) => {
  const studentPassFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdYumH-e7Y9kIVgkixZ2ucqo1s5bkIYj74Z1tysyij36I0K_Q/viewform";

  return (
    <GoogleFormModal
      isOpen={isOpen}
      onClose={onClose}
      formUrl={studentPassFormUrl}
      title="Student Pass Registration"
      description="Fill out the form below to register for our Student Pass"
    />
  );
};

export default StudentPassModal;