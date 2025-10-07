import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IconChevronLeft, IconChevronRight, IconStarFilled } from '@tabler/icons-react';

const SLIDE_DURATION = 6000;

const HeroSection = () => {
  const navigate = useNavigate();
  const slides = useMemo(
    () => [
      { src: '/images/hero/yoga.webp', alt: 'Women training at AfroHeat' },
      { src: '/images/hero/grouppic.webp', alt: 'AfroHeat class in action' },
      { src: '/images/about us/event & activities/IMG_6499.webp', alt: 'Strong women community' },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, [slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section
      className="relative min-h-[60vh] sm:min-h-screen lg:min-h-[70vh] w-full overflow-hidden bg-background -mb-20"
    >
      <div
      
        className="absolute inset-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 90%)' }}
      >
        <div className="absolute inset-0 bg-background">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={slides[index].src}
              src={slides[index].src}
              alt={slides[index].alt}
              className="absolute inset-0 w-full h-full object-cover max-w-full max-h-full"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.4, scale: 1.05 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 dark:from-black/85 dark:via-black/60 dark:to-black/30" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-[50vh] sm:min-h-screen lg:min-h-[70vh] grid">
        <div className="flex items-center">
          <div className="max-w-3xl scale-75 sm:scale-100 origin-top-left">
            <div className="text-secondary uppercase tracking-[0.25em] text-[20px] sm:text-sm font-poppins mb-4 mt-8 sm:mt-16">
              More than your average fitness center
            </div>

            <h1 className="text-white font-poppins font-medium font-black leading-[1.05] text-[20px] sm:text-2xl lg:text-3xl xl:text-4xl">
              <span className="relative inline-block pr-2">
                <span className="absolute -left-8 -top-2 w-10 h-1 bg-secondary rotate-12 rounded-full" />
                <span className="absolute  -left-5 top-2 w-10 h-1 bg-primary -rotate-12 rounded-full" />
                A Vibrant
              </span>
              <br className="hidden sm:block" />
              <span className="font-poppins font-medium">community and creative hub for wellness and meaningful connections</span>
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1 text-secondary">
                <IconStarFilled className="w-5 h-5" />
                <IconStarFilled className="w-5 h-5" />
                <IconStarFilled className="w-5 h-5" />
                <IconStarFilled className="w-5 h-5" />
                <IconStarFilled className="w-5 h-5" />
              </div>
              <span className="text-white/90 font-poppins text-sm">4.9</span>
              <span className="text-white/70 font-poppins text-sm">Trusted by hundreds of women</span>
            </div>

            <motion.button
              onClick={() => navigate('/about')}
              className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group mt-7 font-poppins"
              aria-label="Learn who we are"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Join us</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.45 }}
              />
            </motion.button>
          </div>
        </div>
      </div>

      <button
        aria-label="Previous slide"
        onClick={prev}
        className="group absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center size-12 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white/60 bg-black/20 hover:bg-black/30 transition"
      >
        <IconChevronLeft className="w-6 h-6" />
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="group absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center size-12 rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white/60 bg-black/20 hover:bg-black/30 transition"
      >
        <IconChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60 dark:to-background/70" />
    </section>
  );
};

export default HeroSection;