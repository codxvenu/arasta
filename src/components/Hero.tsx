import React from 'react';
import { ShieldCheck, Truck, Users } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export default function Hero({ onExploreClick, onBookClick }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full flex flex-col justify-end lg:justify-center items-start bg-[#111111] overflow-hidden"
    >
      {/* Cinematic Background Image of curated antique showroom with smooth ambient dimming */}
      <div className="absolute inset-0 z-0">
        <img
          id="hero-bg-image"
          src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1600"
          alt="Ancient Sculpture and Curated Antiques in Museum Light"
          className="w-full h-full object-cover object-center filter brightness-[0.4] transition-all duration-1000 transform scale-105 hover:scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Soft elegant gradient shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/30 z-10" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 lg:px-12 pt-32 pb-16 lg:py-24 text-[#FAF8F3]">
        <div className="max-w-3xl fade-in">
          {/* Subtle line indicator */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-8 h-[1px] bg-[#8B6F47]" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#C4B299]">
              The Pavilion Collection
            </span>
          </div>

          {/* Hero Display Heading 72px */}
          <h1
            id="hero-title"
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-medium leading-[1.15] tracking-tight mb-6 text-[#FAF8F3] filter drop-shadow-sm"
          >
            Curated Antiques & <br className="hidden md:inline" />
            <span className="italic font-normal text-[#C4B299]">Timeless Collectibles</span>
          </h1>

          {/* Subheading */}
          <p
            id="hero-subheading"
            className="font-sans text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[#FAF8F3]/90 mb-10 max-w-2xl"
          >
            Rare artifacts, paintings, and decorative pieces sourced and curated for collectors and luxury interiors across India. Established on absolute provenance and meticulous conservation.
          </p>

          {/* Buttons: Pill shape, no shadow */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16 lg:mb-20">
            <button
              id="hero-btn-explore"
              onClick={onExploreClick}
              className="bg-[#8B6F47] hover:bg-[#FAF8F3] text-[#FAF8F3] hover:text-[#111111] font-sans text-xs tracking-widest uppercase font-medium py-4 px-8 rounded-full border border-[#8B6F47] transition-all duration-300 cursor-pointer"
            >
              Explore Collection
            </button>
            <button
              id="hero-btn-book"
              onClick={onBookClick}
              className="bg-transparent hover:bg-[#FAF8F3]/10 text-[#FAF8F3] font-sans text-xs tracking-widest uppercase font-medium py-4 px-8 rounded-full border border-[#FAF8F3]/30 transition-all duration-300 cursor-pointer"
            >
              Book Consultation
            </button>
          </div>

          {/* Trust Indicators */}
          <div
            id="hero-trust-indicators"
            className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6 border-t border-[#FAF8F3]/20 pt-8"
          >
            <div className="flex items-center space-x-3">
              <span className="text-[#8B6F47] text-lg">✓</span>
              <span className="font-mono text-xs tracking-widest uppercase text-[#FAF8F3]/80">
                Authentic Pieces Only
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-[#8B6F47] text-lg">✓</span>
              <span className="font-mono text-xs tracking-widest uppercase text-[#FAF8F3]/80">
                Pan India Insured Delivery
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-[#8B6F47] text-lg">✓</span>
              <span className="font-mono text-xs tracking-widest uppercase text-[#FAF8F3]/80">
                Scholarly Consultations
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
