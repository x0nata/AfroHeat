import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';
import { 
  IconX, 
  IconCalendar, 
  IconClock, 
  IconUsers, 
  IconBarbell,
  IconCheck
} from '@tabler/icons-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: {
    id: string;
    name: string;
    instructor: string;
    duration: string;
    capacity: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    description: string;
  };
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, className }) => {
  const { addBooking, state } = useApp();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isBooking, setIsBooking] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  // Available time slots
  const timeSlots = [
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  // Generate next 7 days
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !className) return;

    setIsBooking(true);
    
    // Simulate booking API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    const booking = {
      id: Date.now().toString(),
      className: className.name,
      date: selectedDate,
      time: selectedTime,
      instructor: className.instructor
    };

    addBooking(booking);
    setIsBooking(false);
    setBookingComplete(true);

    // Reset and close after 2 seconds
    setTimeout(() => {
      setBookingComplete(false);
      setSelectedDate('');
      setSelectedTime('');
      onClose();
    }, 2000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (!className) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-background rounded-2xl shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-background border-b border-border p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground font-industry">
                  Book Class
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <IconX className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {!bookingComplete ? (
                <>
                  {/* Class Info */}
                  <div className="mb-6 p-4 bg-accent/20 rounded-xl">
                    <h3 className="text-xl font-bold text-foreground mb-2 font-industry">
                      {className.name}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground font-poppins">
                      <div className="flex items-center">
                        <IconUsers className="h-4 w-4 mr-2 text-primary" />
                        <span>{className.instructor}</span>
                      </div>
                      <div className="flex items-center">
                        <IconClock className="h-4 w-4 mr-2 text-primary" />
                        <span>{className.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <IconBarbell className="h-4 w-4 mr-2 text-primary" />
                        <span>{className.difficulty}</span>
                      </div>
                      <div className="flex items-center">
                        <IconUsers className="h-4 w-4 mr-2 text-primary" />
                        <span>{className.capacity} spots</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-3 text-sm font-poppins">
                      {className.description}
                    </p>
                  </div>

                  {/* Date Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3 font-poppins">
                      Select Date
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableDates.map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`p-3 rounded-lg border text-sm font-medium transition-all font-poppins ${
                            selectedDate === date
                              ? 'bg-primary text-primary-foreground border-transparent'
                              : 'border-border text-foreground hover:border-primary'
                          }`}
                        >
                          {formatDate(date)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3 font-poppins">
                      Select Time
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border text-sm font-medium transition-all font-poppins ${
                            selectedTime === time
                              ? 'bg-primary text-primary-foreground border-transparent'
                              : 'border-border text-foreground hover:border-primary'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Member Benefits */}
                  {state.isLoggedIn && (
                    <div className="mb-6 p-4 bg-accent/20 rounded-xl border border-border">
                      <div className="flex items-center text-foreground text-sm font-poppins">
                        <IconCheck className="h-4 w-4 mr-2" />
                        <span>As a member, this class is included in your plan!</span>
                      </div>
                    </div>
                  )}

                  {/* Book Button */}
                  <button
                    onClick={handleBooking}
                    disabled={!selectedDate || !selectedTime || isBooking}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 font-poppins"
                  >
                    {isBooking ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-foreground"></div>
                        <span className="font-poppins">Booking...</span>
                      </>
                    ) : (
                      <>
                        <IconCalendar className="h-5 w-5" />
                        <span className="font-poppins">Book Class</span>
                      </>
                    )}
                  </button>
                </>
              ) : (
                /* Booking Confirmation */
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconCheck className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-industry">
                    Booking Confirmed!
                  </h3>
                  <p className="text-muted-foreground mb-4 font-poppins">
                    You're all set for {className.name} on {formatDate(selectedDate)} at {selectedTime}
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground font-poppins">
                      A confirmation email has been sent to your registered email address.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;