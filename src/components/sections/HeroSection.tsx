import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IconChevronLeft, IconChevronRight, IconStarFilled } from '@tabler/icons-react';

const SLIDE_DURATION = 6000;

const HeroSection = () => {
  const navigate = useNavigate();
  const slides = useMemo(
    () => [
      { src: '/images/about us/our space/IMG_4295.webp', alt: 'Women training at AfroHeat' },
      { src: '/images/about us/community engagement/IMG_5841.webp', alt: 'AfroHeat class in action' },
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
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Pattern background with opacity at the bottom */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `url('/images/footer pattern.webp')`,
          backgroundSize: '500px 214px',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center'
        }}
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)' }}
      >
        <div className="absolute inset-0 bg-black">
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen grid">
        <div className="flex items-center">
          <div className="max-w-3xl">
            <div className="text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-poppins mb-4 mt-12 sm:mt-16">
              More than your average fitness center
            </div>

            <h1 className="text-white font-poppins font-medium font-black leading-[1.05] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
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