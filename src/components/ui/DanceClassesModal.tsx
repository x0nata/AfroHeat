import SimpleModal from './SimpleModal';

interface DanceClassesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DanceClassesModal: React.FC<DanceClassesModalProps> = ({ isOpen, onClose }) => {
  return (
    <SimpleModal
      isOpen={isOpen}
      onClose={onClose}
      title="AfroHeat Studio"
      description="Our class schedules"
      className="max-w-lg"
    >
      <div className="flex justify-center -m-2 sm:-m-4">
        <img
          src="/images/new/danceclasses.webp"
          alt="AfroHeat Studio class schedules"
          className="w-full h-auto rounded-lg object-contain"
        />
      </div>
    </SimpleModal>
  );
};

export default DanceClassesModal;
