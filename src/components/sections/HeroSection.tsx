import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background hero-section-pc-margin">
      {/* Full screen background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/yoga.webp"
          alt="AfroHeat community in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />
      </div>

      {/* Text overlay at bottom center */}
      <div className="relative z-10 flex h-full items-end justify-center sm:mb-10 pb-[130px] px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-3 font-poppins leading-tight">
            MORE THAN YOUR AVARGE FITNESS CENTER
          </h1>
          <p className="text-white/90 text-lg sm:text-xl md:text-1xl mb-6 font-poppins max-w-2xl mx-auto leading-relaxed">
            A vibrant
community and creative hub for wellness and meaningful connections
          </p>
          <motion.button
            onClick={() => navigate('/services')}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl font-poppins"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join us
          </motion.button>
          
        </div>
      </div>

    </section>
  );
};

export default HeroSection;