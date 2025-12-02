import React, { useLayoutEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "From Uncertain to Self-Aware and Focused",
    text: "The past weeks have been eye-opening. I came in wanting to become a product manager, and Shift Up Africa jumpstarted my growth with mindset training. Grateful for this opportunity and guidance.",
    name: "Damilola",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "From Self-Doubt to Discipline, Growth, and Responsibility",
    text: "Shift Up Africa has shaped my growth and mindset. The 30-day challenge taught me responsibility, perseverance, preparation and resilience, leaving me with lessons that strengthened my confidence and career journey.",
    name: "Franklin",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "From Waiting for Years to Two Job Offers in Three Months",
    text: "SHIFT UP AFRICA has been transformative. I've learned to believe in myself and eradicate self-sabotage, becoming agile and resilient. Three months into the program, I secured two job offers after years of waiting.",
    name: "Tito",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "From Confusion to Clarity and Courage",
    text: "The journey helped me explore my potential, choose a fitting career path, overcome fears and grow. I loved the interactive sessions and practical insights shared throughout the program.",
    name: "Temilade",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "From Shy and Unsure to Confident and Employable",
    text: "SHIFT UP AFRICA helped me shift my mindset, building confidence in public speaking, teamwork, critical thinking, and analytical skills, leading to paid employment.",
    name: "Ope",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "From Uncertainty to Academic and Professional Readiness",
    text: "The program helped me discover myself, clarify my career path and grow intentionally. It strengthened my understanding of academic and professional success. I'm grateful for the experience and recommend it to anyone ready to grow.",
    name: "Remi",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
  }
];

const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-20 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-16">
          <div className="relative inline-block mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-black relative z-10 pb-1">
              Testimonials
            </span>
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow z-0"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-black leading-tight tracking-tight">
            Success stories <br /> from our <br /> graduates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card flex flex-col border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300 rounded-sm bg-white">
              <div className="mb-6">
                <Quote size={40} className="text-gray-200 fill-gray-200" />
              </div>
              
              <h3 className="text-lg font-bold text-brand-black mb-4 leading-snug">
                {item.quote}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {item.text}
              </p>

              <div className="w-full h-[1px] bg-gray-100 mb-6"></div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-brand-black text-sm">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;