import React from 'react';
import { Scroll, MapPin, Mail, Phone, CalendarRange } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onHomeClick: () => void;
}

export default function Footer({ onNavigate, onHomeClick }: FooterProps) {
  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <footer id="footer-section" className="bg-[#111111] text-[#FAF8F3] pt-20 pb-12 border-t border-[#8B6F47]/30">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Top Segment: Asymmetric Double Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-16 border-b border-[#FAF8F3]/10">
          
          {/* Column 1: Brand Info & Identity (lg:span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <button
                onClick={onHomeClick}
                className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#FAF8F3] uppercase text-left group transition-colors hover:text-[#C4B299]"
              >
                AARASTA
              </button>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#8B6F47] mt-1 font-semibold">
                CURATED LUXURY & INTERIOR ACCENTS
              </p>
              
              <p className="font-sans text-xs text-[#FAF8F3]/60 leading-relaxed font-light mt-6 max-w-sm">
                A premium curation dedicated to sourcing and finishing handcrafted wall art, designer timepieces, natural stone objects, and statement accents designed to elevate distinguished homes.
              </p>
            </div>

            {/* Indian collector service marker */}
            <div className="flex items-center space-x-3 text-[#C4B299]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4B299] animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-medium">
                Serving Distinguished Homes Across India
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links Grid & Salon Details (lg:span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Nav Links Column */}
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B6F47] font-semibold">
                Aarasta Navigation
              </span>
              <div className="flex flex-col space-y-2.5 font-sans text-xs text-[#FAF8F3]/75 font-light">
                <button onClick={onHomeClick} className="text-left hover:text-[#C4B299] transition-colors cursor-pointer">Home Hub</button>
                <button onClick={() => handleLinkClick('collection-section')} className="text-left hover:text-[#C4B299] transition-colors cursor-pointer">Curated Collection</button>
                <button onClick={() => handleLinkClick('about-section')} className="text-left hover:text-[#C4B299] transition-colors cursor-pointer">Design Philosophy</button>
                <button onClick={() => handleLinkClick('authenticity-section')} className="text-left hover:text-[#C4B299] transition-colors cursor-pointer">Craftsmanship Standards</button>
                <button onClick={() => handleLinkClick('consultation-section')} className="text-left hover:text-[#C4B299] transition-colors cursor-pointer">Styling Inquiries</button>
              </div>
            </div>

            {/* Delhi Vaults Coordinates */}
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B6F47] font-semibold">
                Delhi Salon
              </span>
              <div className="flex flex-col space-y-2 font-sans text-xs text-[#FAF8F3]/75 font-light">
                <div className="flex items-start space-x-2">
                  <MapPin size={12} className="text-[#8B6F47] mt-0.5 shrink-0" />
                  <span>The Amaltas Court, Chanakyapuri, New Delhi - 110021</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={12} className="text-[#8B6F47] shrink-0" />
                  <span>+91 11 4055 9300</span>
                </div>
              </div>
            </div>

            {/* Talk To Us */}
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B6F47] font-semibold">
                Bengaluru Salon
              </span>
              <div className="flex flex-col space-y-2 font-sans text-xs text-[#FAF8F3]/75 font-light">
                <div className="flex items-start space-x-2">
                  <MapPin size={12} className="text-[#8B6F47] mt-0.5 shrink-0" />
                  <span>Aarasta Arcade, Lavelle Road, Richmond Town, Bengaluru - 560001</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={12} className="text-[#8B6F47] shrink-0" />
                  <span>+91 80 4122 8810</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Segment: Copyright & Trust Seals */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="font-mono text-[9px] text-[#FAF8F3]/40 tracking-wider">
            © {new Date().getFullYear()} Aarasta Ltd. All rights reserved. Designed for distinguished homes.
          </div>
          
          <div className="flex items-center space-x-4 border border-[#FAF8F3]/10 px-3 py-1 font-mono text-[9px] text-[#FAF8F3]/50">
            <span>[ INVENTORY DIRECTIVE: NON-TRANSACTABLE SHOWROOM ]</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
