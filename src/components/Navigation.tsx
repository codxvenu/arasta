import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, PhoneCall } from 'lucide-react';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
  onHomeClick: () => void;
  currentView: 'home' | 'detail';
}

export default function Navigation({ onNavigate, onHomeClick, currentView }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const isLightText = currentView === 'home' && !isScrolled;
  const textColor = isLightText 
    ? 'text-[#FAF8F3] hover:text-[#C4B299]' 
    : 'text-[#111111] hover:text-[#8B6F47]';
  const logoTitleColor = isLightText 
    ? 'text-[#FAF8F3] group-hover:text-[#C4B299]' 
    : 'text-[#111111] group-hover:text-[#8B6F47]';
  const logoSubColor = isLightText 
    ? 'text-[#C4B299]/85' 
    : 'text-[#8B6F47]';
  const mobileToggleColor = isLightText 
    ? 'text-[#FAF8F3] hover:text-[#C4B299]' 
    : 'text-[#111111] hover:text-[#8B6F47]';

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md border-[#EAE6DF] py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Gallery Title / Branding */}
        <button
          id="nav-logo"
          onClick={onHomeClick}
          className="group flex flex-col items-start focus:outline-none cursor-pointer text-left"
        >
          <span className={`font-serif text-xl lg:text-2xl font-bold tracking-widest uppercase transition-colors duration-300 ${logoTitleColor}`}>
            Aarasta
          </span>
          <span className={`font-sans text-[9px] tracking-[0.25em] uppercase font-semibold transition-colors duration-300 ${logoSubColor}`}>
            Curated Luxury & Interior Accents
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-8">
          <button
            id="nav-link-home"
            onClick={onHomeClick}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 cursor-pointer ${textColor}`}
          >
            Home
          </button>
          <button
            id="nav-link-collection"
            onClick={() => handleLinkClick('collection-section')}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 cursor-pointer ${textColor}`}
          >
            Collection
          </button>
          <button
            id="nav-link-about"
            onClick={() => handleLinkClick('about-section')}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 cursor-pointer ${textColor}`}
          >
            Design Philosophy
          </button>
          <button
            id="nav-link-authenticity"
            onClick={() => handleLinkClick('authenticity-section')}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 cursor-pointer ${textColor}`}
          >
            Craftsmanship
          </button>
          <button
            id="nav-link-consultation"
            onClick={() => {
              setMobileMenuOpen(false);
              window.open(`https://wa.me/916283067083?text=${encodeURIComponent("Hello i was looking forward to book a call")}`, '_blank');
            }}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 cursor-pointer ${textColor}`}
          >
            Styling Consultation
          </button>
          <button
            id="nav-link-contact"
            onClick={() => handleLinkClick('contact-section')}
            className={`font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-300 cursor-pointer ${textColor}`}
          >
            Contact
          </button>
        </nav>

        {/* Right side Book Consultation Pill */}
        <div className="hidden sm:flex items-center">
          <button
            id="nav-btn-book-consult"
            onClick={() => window.open(`https://wa.me/916283067083?text=${encodeURIComponent("Hello i was looking forward to book a call")}`, '_blank')}
            className="bg-[#8B6F47] hover:bg-[#111111] text-[#FAF8F3] font-sans text-xs tracking-widest uppercase font-medium py-2.5 px-6 rounded-full border border-transparent transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          id="nav-btn-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-1 focus:outline-none cursor-pointer transition-colors duration-300 ${mobileToggleColor}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`lg:hidden fixed top-[69px] left-0 w-full bg-[#FAF8F3] border-b border-[#EAE6DF] transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden pointer-events-none'
        }`}
      >
        <div className="px-6 space-y-4 flex flex-col items-stretch">
          <button
            id="mobile-link-home"
            onClick={() => {
              setMobileMenuOpen(false);
              onHomeClick();
            }}
            className="text-left font-sans text-xs tracking-widest text-[#111111] hover:text-[#8B6F47] uppercase font-medium py-2 border-b border-[#FAF8F3] cursor-pointer"
          >
            Home
          </button>
          <button
            id="mobile-link-collection"
            onClick={() => handleLinkClick('collection-section')}
            className="text-left font-sans text-xs tracking-widest text-[#111111] hover:text-[#8B6F47] uppercase font-medium py-2 border-b border-[#FAF8F3] cursor-pointer"
          >
            Collection
          </button>
          <button
            id="mobile-link-about"
            onClick={() => handleLinkClick('about-section')}
            className="text-left font-sans text-xs tracking-widest text-[#111111] hover:text-[#8B6F47] uppercase font-medium py-2 border-b border-[#FAF8F3] cursor-pointer"
          >
            Design Philosophy
          </button>
          <button
            id="mobile-link-authenticity"
            onClick={() => handleLinkClick('authenticity-section')}
            className="text-left font-sans text-xs tracking-widest text-[#111111] hover:text-[#8B6F47] uppercase font-medium py-2 border-b border-[#FAF8F3] cursor-pointer"
          >
            Craftsmanship
          </button>
          <button
            id="mobile-link-consultation"
            onClick={() => {
              setMobileMenuOpen(false);
              window.open(`https://wa.me/916283067083?text=${encodeURIComponent("Hello i was looking forward to book a call")}`, '_blank');
            }}
            className="text-left font-sans text-xs tracking-widest text-[#111111] hover:text-[#8B6F47] uppercase font-medium py-2 border-b border-[#FAF8F3] cursor-pointer"
          >
            Styling Consultation
          </button>
          <button
            id="mobile-link-contact"
            onClick={() => handleLinkClick('contact-section')}
            className="text-left font-sans text-xs tracking-widest text-[#111111] hover:text-[#8B6F47] uppercase font-medium py-2 border-b border-[#FAF8F3] cursor-pointer"
          >
            Contact
          </button>
          <button
            id="mobile-link-book"
            onClick={() => {
              setMobileMenuOpen(false);
              window.open(`https://wa.me/916283067083?text=${encodeURIComponent("Hello i was looking forward to book a call")}`, '_blank');
            }}
            className="w-full text-center bg-[#8B6F47] text-[#FAF8F3] py-3 rounded-full font-sans text-xs tracking-widest uppercase font-medium cursor-pointer"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
