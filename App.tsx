import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundBlocks from './components/BackgroundBlocks';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import GetInTouchSection from './components/GetInTouchSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-cream text-brand-black overflow-hidden font-sans selection:bg-brand-yellow selection:text-black">
      {/* Background decoration layer */}
      <BackgroundBlocks />
      
      {/* Content layer */}
      <div className="relative z-10 bg-cream">
        <Navbar />
        <Hero />
      </div>

      {/* New Sections Layer (White/Grey backgrounds that sit on top of main bg) */}
      <div className="relative z-20">
        <StatsSection />
        <AboutSection />
        <ProgramsSection />
        <TestimonialsSection />
        {/* Added Blog Section here */}
        <BlogSection />
        {/* Reordered: Get In Touch comes BEFORE FAQ */}
        <GetInTouchSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;