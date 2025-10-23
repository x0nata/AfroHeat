import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  IconCalendar
} from '@tabler/icons-react';
import EventCard from '@/components/ui/event-card';
import { DraggableCardContainer, DraggableCardBody } from '@/components/ui/draggable-card';
import StudioRentalForm from '@/forms/StudioRentalForm';

const Events: React.FC = () => {
  // Helper function to check if an event date is in the past
  const isEventInPast = (dateString: string): boolean => {
    if (dateString === 'Coming soon') return false; // "Coming soon" events are not in the past
    const eventDate = new Date(dateString);
    const today = new Date();
    // Set time to end of day for proper comparison (consider events as happening on the whole day)
    today.setHours(23, 59, 59, 999);
    return eventDate < today;
  };

  // All events data combined
  const allEvents = [
    {
      id: 1,
      title: "Velvet by AfroHeat",
      date: "2025-11-08",
      time: "",
      location: "AfroHeat wello sefer, Addis Ababa",
      description: "An evening to enjoy rich flavors and fine wines in a relaxed atmosphere. Come unwind, taste, and discover your new favorite pour.",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 23,
      category: "Social",
      image: "/images/about us/event & activities/sip.webp"
    },
    {
      id: 2,
      title: "Pitch your friend",
      date: "Coming soon",
      time: "",
      location: "Afroheat wello sefer, Addis Ababa",
      description: "Come and pitch your friend to join our community. Bring them along for a fun experience!",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 0,
      category: "Social"
    }
    
    
  ];

  // Past events data (these will be filtered based on date)
  const pastEventsData = [
    // Social and Networking Events
    {
      id: 1,
      title: "AfroHeat Escape",
      date: "2024-09-15",
      time: "",
      location: "AfroHeat wello sefer, Addis Ababa",
      description: "An event to connect with like-minded individuals in a relaxed atmosphere.",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 45,
      category: "Social",
      image: "",
      images: [
     
      ]
    },
    {
      id: 2,
      title: "Wine Tasting",
      date: "2024-08-20",
      time: "",
      location: "AfroHeat wello sefer, Addis Ababa",
      description: "An elegant wine tasting experience with carefully selected varieties.",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 38,
      category: "Social",
      image: "",
      images: [
      
      ]
    },
    {
      id: 3,
      title: "Annual Award Ceremony",
      date: "2024-06-10",
      time: "",
      location: "AfroHeat wello sefer, Addis Ababa",
      description: "Celebrating our community's achievements and recognizing outstanding members.",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 50,
      category: "Social",
      image: "",
      images: [
      
      ]
    },
    // Creative Wellness Events
    {
      id: 4,
      title: "Shape of me: a sculpting experience",
      date: "2024-07-22",
      time: "",
      location: "AfroHeat wello sefer, Addis Ababa",
      description: "A unique sculpting experience.",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 30,
      category: "Wellness",
      image: "",
      images: [
       
      ]
    },
    {
      id: 5,
      title: "Glow Painting in the Dark",
      date: "2024-05-18",
      time: "",
      location: "AfroHeat wello sefer, Addis Ababa",
      description: "Experience the fun of glow painting.",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 40,
      category: "Wellness",
      image: "",
      images: [

        
      ]
    },
    {
      id: 6,
      title: "Make your own Jebena",
      date: "2024-04-05",
      time: "",
      location: "AfroHeat wello sefer, Addis Ababa",
      description: "Learn to craft your own traditional Jebena coffee pot in this hands-on workshop.",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 35,
      category: "Wellness",
      image: "/images/events/jebena/1.webp",
      images: [
        "/images/events/jebena/pic1.webp"
      ]
    },
    {
      id: 7,
      title: "Puppy Therapy Day",
      date: "2024-03-12",
      time: "",
      location: "AfroHeat wello sefer, Addis Ababa",
      description: "A heartwarming day with therapy puppies to reduce stress and boost mood.",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 42,
      category: "Wellness",
      image: "/images/events/pup/pic1.webp",
      images: [
         "/images/events/pup/pic2.webp",
         "/images/events/pup/pic3.webp",
         "/images/events/pup/pic4.webp",
         "/images/events/pup/pic5.webp",
         "/images/events/pup/pic6.webp",
         "/images/events/pup/pic7.webp"
  
  
      ]
    },
    // Pop-up Markets
    {
      id: 8,
      title: "Bake Sale",
      date: "2024-02-14",
      time: "",
      location: "AfroHeat wello sefer, Addis Ababa",
      description: "Delicious homemade baked goods available for purchase to support our community.",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 48,
      category: "Market",
      image: "",
      images: [
     
      ]
    },
    {
      id: 9,
      title: "The Fitting Room",
      date: "2024-01-20",
      time: "",
      location: "AfroHeat wello sefer, Addis Ababa",
      description: "Pop-up fashion event where you can try on and purchase unique clothing items.",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 36,
      category: "Market",
      image: "",
      images: [
 
      ]
    },
    {
      id: 10,
      title: "Grand opening and pop-up",
      date: "2023-12-01",
      time: "",
      location: "AfroHeat wello sefer, Addis Ababa",
      description: "Celebrating our grand opening with a special pop-up event featuring various vendors.",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 50,
      category: "Market",
      image: "",
      images: [
     
      ]
    },
    {
      id: 11,
      title: "Homecoming Bazaar",
      date: "2023-11-15",
      time: "",
      location: "AfroHeat wello sefer, Addis Ababa",
      description: "A festive bazaar to welcome back community members with local crafts and goods.",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 44,
      category: "Market",
      image: "",
      images: [
      
      ]
    }
  ];
 
  // Combine all events and filter them based on date
  const allEventsCombined = [...allEvents, ...pastEventsData];
  const upcomingEvents = allEventsCombined.filter(event => !isEventInPast(event.date));
  const pastEvents = allEventsCombined.filter(event => isEventInPast(event.date));

  const [selectedPastEvent, setSelectedPastEvent] = useState<{
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    instructor: string;
    price: string;
    capacity: number;
    registered: number;
    category: string;
    image?: string;
    images?: string[];
  } | null>(null);
  const [isGalleryLoading, setIsGalleryLoading] = useState(true);
  const [isStudioRentalModalOpen, setIsStudioRentalModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Social',
    'Wellness',
    'Market'
  ];

  const filteredPastEvents = selectedCategory === 'All'
    ? pastEvents
    : pastEvents.filter(event => event.category === selectedCategory);

  const modalContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (selectedPastEvent && modalContainerRef.current) {
      // Existing logs...

      // New: Log actual card positions after render
      setTimeout(() => { // Delay for render
        cardRefs.current.forEach((card, i) => {
          if (card) {
            const rect = card.getBoundingClientRect();
            const viewportCenterX = window.innerWidth / 2;
            const centerOffset = rect.left + rect.width / 2 - viewportCenterX;
            console.log(`Actual Card ${i+1} position:`, {
              left: rect.left, right: rect.right, centerX: rect.left + rect.width / 2,
              distanceFromViewportCenter: centerOffset,
              isRightBiased: centerOffset > 0
            });
          }
        });
      }, 100);
    }
  }, [selectedPastEvent]);

  useEffect(() => {
    if (selectedPastEvent && modalContainerRef.current) {
      const rect = modalContainerRef.current.getBoundingClientRect();
      console.log('Modal container dimensions:', {
        width: rect.width,
        height: rect.height,
        left: rect.left,
        top: rect.top
      });

      // Simulate card positions
      const offsets = [
        { x: 0, y: 0 }, { x: -20, y: -10 }, { x: 20, y: -10 },
        { x: -30, y: 0 }, { x: 30, y: 0 }, { x: -10, y: 20 }, { x: 10, y: 20 }
      ];
      const cardSize = 256; // h-64 w-64
      offsets.forEach((offset, i) => {
        const cardLeft = rect.left + rect.width / 2 + offset.x - cardSize / 2;
        const cardRight = cardLeft + cardSize;
        const cardTop = rect.top + rect.height / 2 + offset.y - cardSize / 2;
        const cardBottom = cardTop + cardSize;
        console.log(`Card ${i+1} bounds:`, {
          left: cardLeft, right: cardRight, top: cardTop, bottom: cardBottom,
          offset,
          overflowsLeft: cardLeft < 0,
          overflowsRight: cardRight > window.innerWidth,
          overflowsTop: cardTop < 0,
          overflowsBottom: cardBottom > window.innerHeight
        });
      });
    }
  }, [selectedPastEvent]);
 
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Header */}
      <section className="py-20 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl text-primary font-bold mb-6 font-industry">
              AfroHeat{" "}
              <span className="text-primary">
                Events
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
              Join our special events, workshops, and community gatherings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-card">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center mb-8 font-industry">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-background">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 font-industry">Past Events</h2>
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPastEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isPast={true}
                  onViewDetails={() => setSelectedPastEvent(event)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

 
      {selectedPastEvent && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPastEvent(null)}
        >
          <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.24 }}
                        className="bg-card rounded-2xl p-6 max-w-full sm:max-w-4xl md:max-w-5xl w-full h-[95vh] relative mx-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
            <button
              onClick={() => setSelectedPastEvent(null)}
              className="absolute top-4 right-4 text-foreground hover:text-primary text-2xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2 font-industry">{selectedPastEvent.title}</h2>
              <p className="text-muted-foreground mb-1 font-poppins">
                <IconCalendar className="inline mr-2 h-4 w-4" />
                {selectedPastEvent.date === 'Coming soon'
                  ? 'Coming soon'
                  : new Date(selectedPastEvent.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            
              <p className="text-foreground font-poppins leading-relaxed">{selectedPastEvent.description}</p>
            </div>
            <DraggableCardContainer className="mx-auto max-w-4xl">
              {(selectedPastEvent.images || []).slice(0, 7).map((image: string, index: number) => {
                const positions = [
                                  "absolute top-5 left-[5%] sm:left-[20%] rotate-[-5deg]",
                                  "absolute top-20 left-[10%] sm:left-[25%] rotate-[-7deg]",
                                  "absolute top-2 left-[30%] sm:left-[40%] rotate-[8deg]",
                                  "absolute top-16 left-[40%] sm:left-[55%] rotate-[10deg]",
                                  "absolute top-10 right-[10%] sm:right-[35%] rotate-[2deg]",
                                  "absolute top-12 left-[25%] sm:left-[45%] rotate-[-7deg]",
                                  "absolute top-4 left-[15%] sm:left-[30%] rotate-[4deg]",
                                ];
                const zIndices = [10, 9, 8, 7, 6, 5, 4];
                return (
                                  <DraggableCardBody
                                    key={index}
                                    className={positions[index % positions.length]}
                                    baseZIndex={zIndices[index % zIndices.length]}
                                  >
                                    <div className="relative w-48 h-36 sm:w-64 sm:h-48 md:w-80 md:h-60 aspect-[4/3]">
                                      {isGalleryLoading && (
                                        <div className="absolute inset-0 bg-transparent animate-pulse rounded-lg" />
                                      )}
                                      <img
                                        src={image}
                                        alt="Event photo"
                                        className={`pointer-events-none relative z-10 w-full h-full object-cover transition-opacity duration-225 ${
                                          isGalleryLoading ? 'opacity-0' : 'opacity-100'
                                        }`}
                                        loading="eager"
                                        decoding="async"
                                        onLoad={() => setIsGalleryLoading(false)}
                                      />
                                    </div>
                                  </DraggableCardBody>
                                );
              })}
            </DraggableCardContainer>
          </motion.div>
        </div>
      )}
  
      
      {/* Studio Rental Promotion Section */}
      <section className="py-16 bg-background text-foreground">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-industry text-primary">
              Rent Our Studio Space
            </h2>
            <p className="text-lg md:text-xl mb-8 font-poppins max-w-2xl mx-auto text-muted-foreground">
              Looking for a premium space for your events? 
            </p>
            <button
              onClick={() => setIsStudioRentalModalOpen(true)}
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold font-poppins hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2"
            >
              Book Studio Space Now
            </button>
          </div>
        </div>
      </section>
      
      {/* Studio Rental Form Modal */}
      <StudioRentalForm
        isOpen={isStudioRentalModalOpen}
        onClose={() => setIsStudioRentalModalOpen(false)}
      />
      
     </div>
   );
 };
 
 export default Events;