import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { MoveUpRight, ChevronsRight } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // The specific image requested (Couple) to be used across the static slots
  const sharedImage = "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=600&auto=format&fit=crop";

  // Images for the 3rd larger container (The Slider)
  // distinct images to make the sliding effect obvious
  const sliderImages = [
    sharedImage, // The couple
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop", // Group of students
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" // Professional woman
  ];

  // Auto-play for the 3rd image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Text and Button Animations
      tl.from(".hero-title-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      })
      .from(".hero-desc", {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5")
      .from(".hero-btn", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, "-=0.6")
      .from(".hero-icon", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.8");

      // Animate background bars and images entering from bottom
      tl.from(".hero-strip-bar", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1,
        stagger: 0.05,
        ease: "circ.out"
      }, "-=0.5")
      .from(".hero-image-block", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.8");

      // Bouncing animation for the icon (Slow bounce)
      gsap.to(".hero-icon-bounce", {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Background Squares Floating Animation (Restored & Enhanced)
      gsap.from(".bg-float-square", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.5)"
      });

      gsap.to(".bg-float-square", {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1.5,
          from: "random"
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="flex flex-col w-full relative overflow-hidden">
      
      {/* --- RESTORED & ENHANCED DECORATIVE BLOCKS --- */}
      
      {/* Top Left Cluster - Pixel Grid Style */}
      <div className="absolute top-10 -left-4 md:left-10 z-0 opacity-60 pointer-events-none">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFF7CD] rounded-sm bg-float-square"></div>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FEF08A] rounded-sm bg-float-square"></div>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FEF08A] rounded-sm bg-float-square"></div>
          {/* Empty cell for staggered look */}
          <div className="w-12 h-12 md:w-16 md:h-16"></div> 
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FACC15] rounded-sm bg-float-square opacity-80"></div>
        </div>
      </div>

      {/* Right Side Cluster - Falling Tetris Style */}
      <div className="absolute top-20 right-0 md:right-12 z-0 opacity-50 pointer-events-none hidden md:block">
        <div className="grid grid-cols-3 gap-1">
           <div className="w-14 h-14 bg-transparent"></div>
           <div className="w-14 h-14 bg-[#FEF08A] rounded-sm bg-float-square"></div>
           <div className="w-14 h-14 bg-[#FDE047] rounded-sm bg-float-square"></div>
           
           <div className="w-14 h-14 bg-[#FEF9C3] rounded-sm bg-float-square"></div>
           <div className="w-14 h-14 bg-[#FACC15] rounded-sm bg-float-square opacity-60"></div>
           <div className="w-14 h-14 bg-[#FEF08A] rounded-sm bg-float-square"></div>
           
           <div className="w-14 h-14 bg-transparent"></div>
           <div className="w-14 h-14 bg-[#FEF9C3] rounded-sm bg-float-square"></div>
        </div>
      </div>


      {/* --- Main Content --- */}
      <section 
        className="w-full max-w-7xl mx-auto px-6 pt-12 pb-12 md:pt-24 md:pb-16 flex flex-col items-center text-center relative z-20"
      >
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.1] md:leading-[1.1] font-bold text-brand-black tracking-tight mb-6 relative">
          <div className="overflow-hidden">
            <span className="block hero-title-line">Where Young Africans</span>
          </div>
          
          <div className="overflow-hidden flex items-center justify-center gap-2 md:gap-4 flex-wrap">
            <span className="block hero-title-line">Become</span>
            <div className="relative inline-flex items-center hero-title-line">
              {/* Serif Italic part */}
              <span className="font-serif italic font-normal text-brand-black">
                Unstoppable
              </span>
              
              {/* The Yellow Arrow Icon next to text */}
              {/* Rotated -135deg (North West) to point towards the text (Up-Left) */}
              <div className="hero-icon hero-icon-bounce ml-1 md:ml-3 inline-flex relative top-2 transform rotate-[-135deg]">
                 <ChevronsRight 
                   className="text-brand-yellow fill-brand-yellow" 
                   size={48} 
                   strokeWidth={4} 
                 />
              </div>
            </div>
          </div>
        </h1>

        {/* Subtext */}
        <p className="hero-desc text-brand-black/70 max-w-2xl text-base md:text-lg leading-relaxed mb-10 md:mb-12 font-medium relative z-10">
          We equip young Africans graduates with the mindset, tools, and access they 
          need to build successful careers, rise into leadership, and enjoy meaningful 
          lives ... in just 100 days
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto mb-8 relative z-10">
          <button className="hero-btn group w-full md:w-auto bg-black text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 font-medium hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg">
            Join the next cohort
            <MoveUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <button className="hero-btn w-full md:w-auto border border-brand-black/80 text-brand-black px-8 py-4 rounded-full font-medium hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
            Download Program guide
          </button>
        </div>
      </section>

      {/* Hero Image Section - Specific Layout */}
      <div className="relative w-full mt-4 md:mt-8 h-[350px] md:h-[500px] overflow-hidden">
        
        {/* 1. Geometric Grid of Vertical Rectangular Blocks (Abstract Background) */}
        {/* Using a flex container to create staggered vertical columns of varying widths and yellow shades */}
        <div className="absolute inset-0 flex w-full h-full z-0 items-end justify-between pointer-events-none">
           {/* Column 1 */}
           <div className="h-full w-[8%] bg-[#FEFCE8] hero-strip-bar"></div>
           {/* Column 2 */}
           <div className="h-full w-[12%] bg-[#FEF9C3] hero-strip-bar"></div>
           {/* Column 3 */}
           <div className="h-full w-[6%] bg-[#FEF08A] hero-strip-bar"></div>
           {/* Column 4 */}
           <div className="h-full w-[14%] bg-[#FDE047] hero-strip-bar"></div>
           {/* Column 5 */}
           <div className="h-full w-[10%] bg-[#FEF9C3] hero-strip-bar"></div>
           {/* Column 6 - Major Gold Block */}
           <div className="h-full w-[20%] bg-[#FACC15] hero-strip-bar"></div>
           {/* Column 7 */}
           <div className="h-full w-[10%] bg-[#EAB308] hero-strip-bar"></div>
           {/* Column 8 */}
           <div className="h-full w-[12%] bg-[#FEF08A] hero-strip-bar"></div>
           {/* Column 9 */}
           <div className="h-full w-[8%] bg-[#FEFCE8] hero-strip-bar"></div>
        </div>

        {/* 2. The Images Grid - Images aligned to top with no gap between first two */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto h-full px-4 md:px-8">
            <div className="flex w-full h-full items-start gap-0 overflow-x-auto md:overflow-hidden snap-x snap-mandatory scrollbar-hide pt-0">
                
                {/* Image 1: STATIC, Colored, Portrait (Uses shared couple image) */}
                <div className="hero-image-block flex-shrink-0 w-[85vw] md:w-[28%] h-[85%] md:h-[80%] relative mr-0 md:mr-0 snap-center self-start">
                    <img 
                        src={sharedImage}
                        alt="ShiftUp Couple Color" 
                        className="w-full h-full object-cover object-center rounded-t-lg md:rounded-t-none shadow-xl"
                    />
                </div>

                {/* Image 2: STATIC, Black & White, Portrait (Uses shared couple image) - NO MARGIN TO TOUCH IMAGE 1 */}
                <div className="hero-image-block flex-shrink-0 w-[85vw] md:w-[28%] h-[85%] md:h-[80%] relative mr-4 md:mr-6 snap-center self-start">
                    <img 
                        src={sharedImage}
                        alt="ShiftUp Couple BW" 
                        className="w-full h-full object-cover object-center grayscale rounded-t-lg md:rounded-t-none shadow-xl"
                    />
                </div>

                {/* Image 3: SLIDER, Colored, Landscape/Large */}
                <div className="hero-image-block flex-shrink-0 w-[85vw] md:flex-1 h-[95%] md:h-[90%] relative snap-center self-start overflow-hidden shadow-2xl rounded-t-lg md:rounded-t-none group">
                    {/* Sliding Container using TranslateX */}
                    <div 
                        className="flex h-full transition-transform duration-1000 ease-in-out will-change-transform"
                        style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
                    >
                        {sliderImages.map((src, index) => (
                            <div 
                                key={index} 
                                className="min-w-full h-full relative"
                            >
                                <img 
                                    src={src}
                                    alt={`ShiftUp Gallery ${index + 1}`}
                                    className="w-full h-full object-cover object-center"
                                />
                                {/* Gradient Overlay for style */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Optional Slider Indicators */}
                    <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                        {sliderImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlideIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    idx === currentSlideIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;