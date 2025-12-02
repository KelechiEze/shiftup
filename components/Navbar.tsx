import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Why ShiftUp', href: '#' },
    { name: 'Partner', href: '#' },
    { name: 'Programme', href: '#' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      // Lock body scroll
      document.body.style.overflow = 'hidden';
      
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tlRef.current = tl;

        tl.fromTo(".mobile-menu-overlay", 
          { opacity: 0 }, 
          { opacity: 1, duration: 0.3 }
        )
        .fromTo(".mobile-link", 
          { x: 50, opacity: 0 }, 
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.out" },
          "-=0.1"
        )
        .fromTo(".mobile-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
          "-=0.2"
        );
      }, menuRef);

      return () => ctx.revert();
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-6 py-5 md:px-12 md:py-6 flex items-center justify-between relative z-50">
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-12">
        <div className="flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-black hover:text-brand-gold transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button className="bg-black text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-all shadow-md transform hover:-translate-y-0.5">
          Apply Now
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden p-2 text-brand-black z-50 relative focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="transition-transform duration-300 ease-in-out">
           {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className="mobile-menu-overlay fixed inset-0 w-full h-screen bg-cream/95 backdrop-blur-md flex flex-col items-end justify-center pr-12 gap-8 z-40 md:hidden"
        >
          <div className="flex flex-col items-end gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-link text-3xl md:text-4xl font-semibold text-brand-black hover:text-brand-yellow transition-colors tracking-tight text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mobile-btn mt-8">
            <button className="bg-black text-white text-xl font-medium px-10 py-4 rounded-full shadow-xl hover:bg-gray-900 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;