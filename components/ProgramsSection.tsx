import React, { useLayoutEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProgramsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Header
      gsap.from(".prog-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Animate Columns
      gsap.from(".prog-col", {
        scrollTrigger: {
          trigger: ".prog-grid",
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream py-20 md:py-24 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-20">
          <div className="prog-header flex flex-col items-start max-w-xl">
            <div className="relative inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-black relative z-10 pb-1">
                SU Africa Programmes
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow z-0"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-brand-black leading-tight tracking-tight">
              Most Popular <br /> Programs
            </h2>
          </div>

          {/* Left aligned text and button as requested */}
          <div className="prog-header flex flex-col items-start gap-8 max-w-md">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed text-left font-light">
              Shift Up Africa empowers young graduates with the mindset, skills, and practical exposure needed to thrive in today’s workplace.
            </p>
            <button className="group px-8 py-3 rounded-full border border-gray-400 text-sm font-medium text-brand-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 flex items-center gap-2">
              View more 
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="prog-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Column 1: Image Top, Yellow Card Bottom */}
          <div className="prog-col flex flex-col gap-6 h-full">
            <div className="relative w-full h-[300px] md:h-[320px] overflow-hidden rounded-xl shadow-sm">
               <img 
                 src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop" 
                 alt="Notebook and Laptop" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
            <div className="flex-1 bg-brand-yellow p-8 rounded-xl shadow-sm flex flex-col justify-center items-start min-h-[220px]">
              <h3 className="text-2xl font-bold text-brand-black mb-3">RMSC</h3>
              <p className="text-brand-black/80 font-medium leading-relaxed">
                (Identity, mindset, purpose, planning, execution)
              </p>
            </div>
          </div>

          {/* Column 2: Black Card Top, Image Bottom */}
          <div className="prog-col flex flex-col-reverse md:flex-col gap-6 h-full">
            <div className="flex-1 bg-black p-8 rounded-xl shadow-sm flex flex-col justify-center items-start min-h-[220px]">
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                100 Days to <br /> your Dream Job
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed">
                (career clarity and roadmap)
              </p>
            </div>
            <div className="relative w-full h-[300px] md:h-[320px] overflow-hidden rounded-xl shadow-sm">
               <img 
                 src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=800&auto=format&fit=crop" 
                 alt="Man holding paper plane" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
          </div>

          {/* Column 3: Image Top, Yellow Card Bottom */}
          <div className="prog-col flex flex-col gap-6 h-full">
            <div className="relative w-full h-[300px] md:h-[320px] overflow-hidden rounded-xl shadow-sm">
               <img 
                 src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" 
                 alt="Agile Presentation" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
            <div className="flex-1 bg-brand-yellow p-8 rounded-xl shadow-sm flex flex-col justify-center items-start min-h-[220px]">
              <h3 className="text-2xl font-bold text-brand-black leading-tight">
                Agile and project management foundations
              </h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;