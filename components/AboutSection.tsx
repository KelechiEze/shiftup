import React, { useLayoutEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-left", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.from(".animate-right", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-20 md:py-32 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Column */}
        <div className="animate-left flex flex-col items-start">
          <div className="relative inline-block mb-6 md:mb-8">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-black relative z-10 pb-1">
              About Us
            </span>
            {/* Yellow underline accent */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow z-0"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-brand-black leading-[1.15] tracking-tight">
            Africa’s greatest <br className="hidden md:block" />
            resource is her <br className="hidden md:block" />
            people.
          </h2>
        </div>

        {/* Right Column */}
        <div className="animate-right flex flex-col items-start md:pt-4">
          <p className="text-gray-500 leading-relaxed mb-6 text-base md:text-lg lg:text-xl font-light">
            Shift Up Africa is a movement committed to equipping young Africans with the mindset, tools, and access they need to build successful careers and meaningful lives.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10 text-base md:text-lg lg:text-xl font-light">
            We bridge the gap between education and real-world readiness; transforming young graduates into confident, competent, purpose-driven leaders.
          </p>
          
          <button className="group px-8 py-3 rounded-full border border-gray-300 text-sm font-medium text-gray-800 hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2">
            Read more 
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;