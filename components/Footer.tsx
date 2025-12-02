import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white w-full border-t border-gray-900 pt-16 md:pt-24 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 md:mb-32">
          
          {/* Column 1: Brand (Span 4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="text-white mb-2">
              <Logo />
            </div>
            <p className="text-gray-400 text-xs italic mb-8 ml-1">
              A life of great possibilities
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-sm flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-sm flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-sm flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-sm flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Programmes (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-6 md:mb-8">
              Programmes
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "RMSC", 
                "100 Days to Your Dream Job", 
                "Agile and project management foundations", 
                "Book study and mindset mastery",
                "Work ethic, excellence, and workplace readiness",
                "Community, mentoring, and accountability"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-brand-yellow text-xs md:text-sm transition-colors duration-200 block leading-relaxed">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company (Span 2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-6 md:mb-8">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "About Us", 
                "Our People", 
                "Our Instructors", 
                "Volunteer",
                "Our Partners",
                "Impact",
                "Join Our Community",
                "Careers"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-brand-yellow text-xs md:text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources (Span 1 col) */}
          <div className="lg:col-span-1.5">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-6 md:mb-8">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Blog", 
                "Discord Community", 
                "FAQ", 
                "Support"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-brand-yellow text-xs md:text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Legal (Span 1.5 col) */}
          <div className="lg:col-span-1.5">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-6 md:mb-8">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Privacy Policy", 
                "Terms of Service", 
                "Code of Conduct"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-brand-yellow text-xs md:text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 Top Universe NGO. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
