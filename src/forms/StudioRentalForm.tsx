import React from 'react';
import GenericFormModal from './GenericFormModal';

interface StudioRentalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const StudioRentalForm: React.FC<StudioRentalFormProps> = ({ isOpen, onClose }) => {
  const studioRentalFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdZW-Nh_K2VvCS9VZWf6PzCSwFPyVGlOlB5ugKZbWqAKlHT4w/viewform?embedded=true";

  return (
    <GenericFormModal
      isOpen={isOpen}
      onClose={onClose}
      formUrl={studioRentalFormUrl}
      title="Studio Rental"
      description="Fill out the form below to inquire about studio rental"
    />
  );
};

export default StudioRentalForm;