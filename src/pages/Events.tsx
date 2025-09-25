import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import {
  IconCalendar,
  IconUsers
} from '@tabler/icons-react';
import EventCard from '@/components/ui/event-card';
import { DraggableCardContainer, DraggableCardBody } from '@/components/ui/draggable-card';
import { Boxes } from '@/components/ui/background-boxes';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Summercamp",
      date: "2025-07-15",
      time: "9:00 AM - 4:00 PM",
      location: "Main Studio, Addis Ababa",
      description: "Join our exciting summer camp featuring intensive fitness training, dance workshops, and cultural activities. Perfect for building strength, endurance, and community connections!",
      instructor: "All Instructors",
      price: "2,500 ETB",
      capacity: 30,
      registered: 8,
      category: "Camp"
    },
    {
      id: 2,
      title: "Women's Strength Challenge",
      date: "2025-02-22", 
      time: "9:00 AM - 11:00 AM",
      location: "Main Studio, Addis Ababa",
      description: "Join us for an empowering strength training challenge. Test your limits and celebrate your progress!",
      instructor: "Expert Trainer Team",
      price: "3000 ETB",
      capacity: 15,
      registered: 8,
      category: "Challenge"
    },
    {
      id: 3,
      title: "Cultural Fitness Festival",
      date: "2025-03-08",
      time: "2:00 PM - 6:00 PM", 
      location: "Main Studio, Addis Ababa",
      description: "Celebrate International Women's Day with African music, dance, fitness, and community building.",
      instructor: "All Instructors",
      price: "Free",
      capacity: 50,
      registered: 23,
      category: "Festival"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "New Year Kickboxing Bootcamp",
      date: "2025-01-15",
      time: "",
      location: "Main Studio, Addis Ababa",
      description: "High-energy kickboxing session to start the year strong with African rhythms and intense cardio workout",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 25,
      category: "Workshop",
      image: "/images/about us/event & activities/IMG_2467.webp",
      images: [
        "/images/about us/event & activities/IMG_2467.webp",
        "/images/about us/event & activities/IMG_5760.webp",
        "/images/about us/event & activities/IMG_5833.webp",
        "/images/about us/event & activities/IMG_5834.webp"
      ]
    },
    {
      id: 2,
      title: "Holiday Dance Party",
      date: "2024-12-20",
      time: "",
      location: "Main Studio, Addis Ababa",
      description: "Festive AfroHeat dance celebration featuring traditional African music and cultural dance styles",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 35,
      category: "Festival",
      image: "/images/about us/event & activities/IMG_5835.webp",
      images: [
        "/images/about us/event & activities/IMG_5835.webp",
        "/images/about us/event & activities/IMG_5837.webp",
        "/images/about us/event & activities/IMG_5838.webp",
        "/images/about us/event & activities/IMG_5839.webp"
      ]
    },
    {
      id: 3,
      title: "Summer Strength Festival",
      date: "2024-08-10",
      time: "",
      location: "Main Studio, Addis Ababa",
      description: "Outdoor strength training event with African drumming and community fitness challenges",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 42,
      category: "Festival",
      image: "/images/about us/event & activities/IMG_5840.webp",
      images: [
        "/images/about us/event & activities/IMG_5840.webp",
        "/images/about us/event & activities/IMG_5843.webp",
        "/images/about us/event & activities/IMG_6499.webp",
        "/images/about us/event & activities/IMG_6570.webp"
      ]
    },
    {
      id: 4,
      title: "Women's Empowerment Workshop",
      date: "2024-07-20",
      time: "",
      location: "Main Studio, Addis Ababa",
      description: "Special workshop focusing on strength, confidence, and cultural fitness for women",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 28,
      category: "Workshop",
      image: "/images/about us/event & activities/IMG_6649.webp",
      images: [
        "/images/about us/event & activities/IMG_6649.webp",
        "/images/about us/event & activities/IMG_7017.webp",
        "/images/about us/event & activities/IMG_7019.webp",
        "/images/about us/event & activities/IMG_7021.webp"
      ]
    },
    {
      id: 5,
      title: "AfroBeat Dance Marathon",
      date: "2024-06-15",
      time: "",
      location: "Main Studio, Addis Ababa",
      description: "Non-stop dance marathon featuring Afrobeat, Amapiano, and traditional African dance styles",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 50,
      category: "Challenge",
      image: "/images/about us/event & activities/IMG_7022.webp",
      images: [
        "/images/about us/event & activities/IMG_7022.webp",
        "/images/about us/event & activities/IMG_7023.webp",
        "/images/about us/event & activities/IMG_7025.webp",
        "/images/about us/event & activities/IMG_7027.webp"
      ]
    },
    {
      id: 6,
      title: "Cultural Fitness Symposium",
      date: "2024-05-05",
      time: "",
      location: "Main Studio, Addis Ababa",
      description: "Educational event exploring the intersection of African culture and modern fitness practices",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 18,
      category: "Conference",
      image: "/images/about us/event & activities/IMG_7029.webp",
      images: [
        "/images/about us/event & activities/IMG_7029.webp",
        "/images/about us/event & activities/IMG_7030.webp",
        "/images/about us/event & activities/IMG_7031.webp",
        "/images/about us/event & activities/IMG_7033.webp"
      ]
    },
    {
      id: 7,
      title: "Spring Fitness Challenge",
      date: "2024-04-12",
      time: "",
      location: "Main Studio, Addis Ababa",
      description: "Seasonal fitness challenge with African-inspired workouts and team competitions",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 32,
      category: "Challenge",
      image: "/images/about us/event & activities/IMG_9497.webp",
      images: [
        "/images/about us/event & activities/IMG_9497.webp",
        "/images/about us/event & activities/IMG_9498.webp",
        "/images/about us/event & activities/IMG_9503.webp"
      ]
    },
    {
      id: 8,
      title: "Traditional Dance Workshop",
      date: "2024-03-08",
      time: "",
      location: "Main Studio, Addis Ababa",
      description: "Learn traditional African dances from various regions with certified instructors",
      instructor: "All Instructors",
      price: "",
      capacity: 50,
      registered: 40,
      category: "Workshop",
      image: "/images/about us/event & activities/IMG_5833.webp",
      images: [
        "/images/about us/event & activities/IMG_5833.webp",
        "/images/about us/event & activities/IMG_5834.webp",
        "/images/about us/event & activities/IMG_5835.webp"
      ]
    }
  ];
 
  const [selectedPastEvent, setSelectedPastEvent] = useState<typeof pastEvents[0] | null>(null);
  const [isGalleryLoading, setIsGalleryLoading] = useState(true);

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
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-industry">
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
            transition={{ duration: 0.6 }}
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 font-industry">Past Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
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

      {/* Aceternity UI CTA Section */}
      <motion.section
        className="py-12 relative w-full overflow-hidden flex flex-col items-center justify-center rounded-lg group"
        whileHover="hover"
        variants={{
          hover: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Boxes />
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/20 rounded-lg p-6"
          >
            <motion.h2
              className="text-2xl font-bold mb-4 text-foreground font-industry"
              variants={{
                hover: {
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }
              }}
            >
              AfroHeat Community
            </motion.h2>
            <motion.p
              className="text-base text-muted-foreground mb-6 font-poppins"
              variants={{
                hover: {
                  y: -3,
                  transition: { duration: 0.3 }
                }
              }}
            >
              Experience fitness in a way that celebrates African culture, music, and dance.
              Join us in creating a healthier, more active lifestyle for Africans and the diaspora.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg relative overflow-hidden group w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hover: {
                    y: -3,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    transition: { duration: 0.3 }
                  }
                }}
              >
                <span className="relative z-10">Learn More</span>
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
              <motion.button
                className="border border-border text-foreground px-5 py-2.5 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all font-poppins relative overflow-hidden w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hover: {
                    y: -3,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    transition: { duration: 0.3 }
                  }
                }}
              >
                <span className="relative z-10">Contact Us</span>
                <motion.div
                  className="absolute inset-0 bg-primary/5"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
 
      {selectedPastEvent && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPastEvent(null)}
        >
          <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
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
                {new Date(selectedPastEvent.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              <p className="text-muted-foreground mb-4 font-poppins">
                <IconUsers className="inline mr-2 h-4 w-4" />
                {selectedPastEvent.registered} participants
              </p>
              <p className="text-foreground font-poppins leading-relaxed">{selectedPastEvent.description}</p>
            </div>
            <DraggableCardContainer className="mx-auto max-w-4xl">
              {selectedPastEvent.images.slice(0, 7).map((image, index) => {
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
                                        className={`pointer-events-none relative z-10 w-full h-full object-cover transition-opacity duration-300 ${
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
 
     
    </div>
  );
};

export default Events;