import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import NewHomeSection from '../components/sections/new-home-section';
import { Boxes } from '../components/ui/background-boxes';
import ScheduleModal from '../components/ui/ScheduleModal';
import BootcampModal from '../components/ui/BootcampModal';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isBootcampModalOpen, setIsBootcampModalOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen">
      <HeroSection />
      <NewHomeSection onScheduleOpen={() => setIsScheduleOpen(true)} />
      <AboutSection />
    </div>
    <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
    <BootcampModal
      isOpen={isBootcampModalOpen}
      onClose={() => setIsBootcampModalOpen(false)}
    />
    </>
  );
};

export default Home;