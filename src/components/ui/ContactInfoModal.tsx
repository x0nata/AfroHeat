
import SimpleModal from './SimpleModal';

interface ContactInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactInfoModal: React.FC<ContactInfoModalProps> = ({ isOpen, onClose }) => {
  return (
    <SimpleModal
      isOpen={isOpen}
      onClose={onClose}
      title="Contact Information"
      description="Get in touch with us for more information"
    >
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="bg-primary/10 p-4 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="font-medium">+251 90 424 2222</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="bg-primary/10 p-4 rounded-full flex items-center justify-center min-w-[48px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">afroheatfitness1@gmail.com</p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h3 className="font-medium mb-2">Opening Hours</h3>
          <p className="text-sm text-muted-foreground">Monday - Friday: 6:00 AM - 8:00 PM</p>
          <p className="text-sm text-muted-foreground">Saturday: 6:00 AM - 12:00 PM</p>
        </div>
      </div>
    </SimpleModal>
  );
};

export default ContactInfoModal;