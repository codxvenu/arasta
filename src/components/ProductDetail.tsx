import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ArrowLeft, Check, Compass, HelpCircle, Shield, Truck, Sparkles } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBackClick: () => void;
  onBookConsultation: (productTitle: string) => void;
}

export default function ProductDetail({ product, onBackClick, onBookConsultation }: ProductDetailProps) {
  // Always scroll to top when a product loads to ensure natural view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [product.id]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Generate beautiful labels suited to styling monographs
  const getImageLabel = (index: number) => {
    const labels = [
      'Plate I — Architectural Context',
      'Plate II — Detail of Surface Finish & Textures',
      'Plate III — Material Composition Zoom',
      'Plate IV — Soft Ambient Contrast',
      'Plate V — Base Geometry & Scale Support',
      'Plate VI — Side Profile Silhouette',
      'Plate VII — Dynamic Shadowing Under Accent Sconces',
      'Plate VIII — Gallery Exhibition Scale Reference',
      'Plate IX — Artisan Mark & Signature Check',
      'Plate X — Lateral Angle Setting'
    ];
    return labels[index] || `Plate ${index + 1} — Creative Aspect`;
  };

  // Ensure 10-aspect thumbnail carousel is always filled
  const filledImages = [...product.images];
  while (filledImages.length < 10) {
    const baseImage = product.images[filledImages.length % product.images.length];
    const macroModifiers = [
      '&fit=crop&crop=faces,center&q=80&w=800',
      '&fit=crop&crop=bottom,right&q=80&w=800',
      '&fit=crop&crop=top,left&q=80&w=800',
      '&blur=20&q=80&w=800',
      '&fit=crop&crop=center&q=80&w=800',
      '&fit=crop&crop=focalpoint&q=80&w=800',
      '&fit=crop&crop=entropy&q=80&w=800'
    ];
    const modifier = macroModifiers[filledImages.length % macroModifiers.length];
    filledImages.push(`${baseImage.split('?')[0]}?auto=format${modifier}`);
  }

  const handleInquiryClick = () => {
    const message = `Hello,

I came across "${product.title}" on your website and would like to know more about it.

Could you please share its availability, pricing, dimensions, delivery timelines, and any additional details that may help me evaluate it for my space?

Thank you. I look forward to your guidance.`;

    window.open(`https://wa.me/916283067083?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <article className="bg-[#FAF8F3] pt-32 pb-24 fade-in">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Back navigation button */}
        <button
          id="btn-back-to-collection"
          onClick={onBackClick}
          className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#111111]/60 hover:text-[#8B6F47] transition-colors mb-12 focus:outline-none cursor-pointer group"
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Collection</span>
        </button>

        {/* Top Segment: Interactive Gallery & Product Technical Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Column 1: Gallery (lg:span-7) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Main Stage Frame */}
            <div className="relative aspect-[4/5] bg-white border border-[#EAE6DF] overflow-hidden flex items-center justify-center">
              <img
                id="main-product-gallery-target"
                src={filledImages[activeImageIndex]}
                alt={`${product.title} (Plate ${activeImageIndex + 1})`}
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Label of the specific plate */}
              <div className="absolute bottom-4 left-4 bg-[#111111]/80 backdrop-blur-sm text-[#FAF8F3] px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-[#FAF8F3]/10">
                {getImageLabel(activeImageIndex)}
              </div>
            </div>

            {/* Custom 10-Image Grid Selector */}
            <div className="flex flex-col space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8B6F47]">
                Visual Plate Catalogue (10 Curated Aspects)
              </span>
              
              <div
                id="product-gallery-thumbs"
                className="grid grid-cols-5 sm:grid-cols-10 gap-2"
              >
                {filledImages.map((img, idx) => (
                  <button
                    key={idx}
                    id={`thumb-btn-${idx}`}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`aspect-square border focus:outline-none overflow-hidden cursor-pointer transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#8B6F47] ring-1 ring-[#8B6F47] scale-[0.98]'
                        : 'border-[#EAE6DF] hover:border-[#8B6F47]/50'
                    }`}
                  >
                    <img
                      src={img}
                      alt="Thumbnail Aspect"
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>
            
          </div>

          {/* Column 2: Technical Dossier & Overview (lg:span-5) */}
          <div className="lg:col-span-5 flex flex-col">
            
            {/* Header Identity */}
            <span className="font-mono text-xs tracking-[0.25em] text-[#8B6F47] uppercase font-semibold mb-3">
              {product.category}
            </span>
            
            <h1
              id="details-product-title"
              className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium text-[#111111] mb-6"
            >
              {product.title}
            </h1>

            {/* Availability pill inline */}
            <div className="flex items-center space-x-3 mb-8">
              <span
                className={`font-mono text-xs tracking-widest uppercase py-1 px-3 border ${
                  product.availability === 'Available'
                    ? 'border-[#3B7D4A] bg-[#3B7D4A]/5 text-[#3B7D4A]'
                    : product.availability === 'Reserved'
                    ? 'border-[#8B6F47] bg-[#8B6F47]/5 text-[#8B6F47]'
                    : 'border-[#111111]/30 bg-[#111111]/5 text-[#111111]/50'
                }`}
              >
                Status: {product.availability}
              </span>
              <span className="font-mono text-xs text-[#111111]/40">
                Register Ref: {product.serialNo}
              </span>
            </div>

            {/* Design Parameters Table */}
            <div id="technical-spec-block" className="border-t border-b border-[#EAE6DF] py-6 mb-8 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-xs tracking-widest uppercase text-[#111111]/50">Finish:</span>
                <span className="font-serif text-base text-[#111111] font-semibold text-right">{product.finish}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-xs tracking-widest uppercase text-[#111111]/50">Primary Material:</span>
                <span className="font-serif text-base text-[#111111] text-right">{product.material}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-xs tracking-widest uppercase text-[#111111]/50">Room Suitability:</span>
                <span className="font-serif text-base text-[#111111] text-right">{product.roomSuitability}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="font-sans text-xs tracking-widest uppercase text-[#111111]/50">Dimensions:</span>
                <span className="font-mono text-sm text-[#111111] text-right">{product.dimensions}</span>
              </div>
            </div>

            {/* Direct Micro Story CTA block */}
            <p className="font-sans text-[#111111]/70 leading-relaxed font-light text-sm mb-8">
              This handcrafted accent is part of our limited curation. Backed by dedicated material transparency and premium finishing reviews, we assist you in integrating this statement pieces securely into dynamic luxury interiors.
            </p>

            {/* Micro Conversion Hub */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch">
              <button
                id="details-btn-book-consult"
                onClick={handleInquiryClick}
                className="flex-1 bg-[#8B6F47] hover:bg-[#111111] text-[#FAF8F3] font-sans text-xs tracking-widest uppercase font-semibold py-4 px-8 rounded-full border border-transparent transition-all duration-300 text-center cursor-pointer"
              >
                Inquire For Styling
              </button>
              <button
                id="details-btn-whatsapp"
                onClick={handleInquiryClick}
                className="flex-1 bg-transparent hover:bg-[#111111]/5 text-[#111111] font-sans text-xs tracking-widest uppercase font-semibold py-4 px-8 rounded-full border border-[#111111]/30 transition-all duration-300 text-center cursor-pointer"
              >
                WhatsApp Inquiry
              </button>
            </div>
            
          </div>
        </div>

        {/* Middle Segment: Double-Col Story & Styling recommendations */}
        <div id="narrative-segment" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-[#EAE6DF] pt-16 mb-24">
          
          {/* Design Inspiration (lg:span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs tracking-[0.25em] text-[#8B6F47] uppercase block">
              1.0 Design Inspiration & Aesthetics
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111111] mb-6">
              The Art of Curated Spacing
            </h2>
            <div className="font-sans text-[#111111]/80 leading-relaxed text-base font-light space-y-6">
              <p>{product.designInspiration}</p>
            </div>

            {/* Craftsmanship Details Block */}
            <div className="mt-8 bg-[#EAE6DF]/30 border border-[#EAE6DF] p-6 lg:p-8">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#8B6F47] block mb-3 uppercase">
                Premium Atelier Craftsmanship Details
              </span>
              <p className="font-sans text-sm text-[#111111]/70 leading-relaxed font-light italic">
                "{product.craftsmanshipDetails}"
              </p>
            </div>
          </div>

          {/* Placement and Care Guidelines Section (lg:span-5) */}
          <div className="lg:col-span-5 bg-white border border-[#EAE6DF] p-8 space-y-6">
            <div className="flex items-center space-x-2 pb-4 border-b border-[#EAE6DF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47]" />
              <span className="font-mono text-xs tracking-[0.25em] text-[#8B6F47] uppercase font-semibold">
                2.0 Styling & Placement Strategy
              </span>
            </div>
            <h3 className="font-serif text-xl font-medium text-[#111111]">
              Recommended Installation Guidance
            </h3>
            <p className="font-sans text-sm text-[#111111]/70 leading-relaxed font-light">
              We design objects to interact organically with high-end architecture. Use these tailored parameters to harmoniously anchor your room:
            </p>
            <div className="bg-[#FAF8F3] border border-[#EAE6DF] p-5 font-mono text-xs text-[#111111]/85 space-y-4">
              <div className="flex justify-between border-b border-[#EAE6DF]/50 pb-2">
                <span>[Optimal Placement]</span>
                <span className="font-bold text-[#8B6F47] text-right">{product.placementSuggestions}</span>
              </div>
              <div className="flex justify-between border-b border-[#EAE6DF]/50 pb-2">
                <span>[Recommended Styling]</span>
                <span className="font-sans text-xs text-[#111111]/70 max-w-[200px] text-right">{product.stylingRecommendations}</span>
              </div>
              <div className="flex justify-between border-b border-[#EAE6DF]/50 pb-2">
                <span>[Aesthetic Suitability]</span>
                <span className="font-sans text-xs text-[#111111]/70 max-w-[200px] text-right">{product.roomSuitability}</span>
              </div>
              <div className="pt-2">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#8B6F47] block mb-1">[Atelier Care Advice]</span>
                <p className="font-sans text-xs italic text-[#111111]/60 leading-normal">
                  {product.careInstructions}
                </p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Segment: Selection Quality, Delivery & Trust Seals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-[#EAE6DF] pt-16">
          
          {/* Certificate Imagery Placeholder (Luxury Styled Framed Box) */}
          <div className="bg-[#111111] text-[#FAF8F3] p-10 relative overflow-hidden flex flex-col justify-between aspect-[5/3] border border-[#8B6F47]">
            {/* Fine border lines inside */}
            <div className="absolute inset-4 border border-[#8B6F47]/20 pointer-events-none" />
            
            {/* Header */}
            <div className="flex justify-between items-start z-10">
              <div className="flex flex-col">
                <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-[#C4B299]">
                  AARASTA
                </span>
                <span className="font-sans text-[8px] tracking-[0.1em] text-[#C4B299]/50">
                  DESIGN CURATION & INTERIORS OFFICE
                </span>
              </div>
              
              <div className="border border-[#8B6F47] px-2 py-1">
                <span className="font-mono text-[9px] text-[#C4B299]">
                  REF: {product.serialNo}
                </span>
              </div>
            </div>

            {/* Middle Seal Body */}
            <div className="text-center my-6 z-10 transition-transform duration-500 hover:scale-[1.02]">
              <span className="font-serif text-2xl italic tracking-wider font-extralight text-[#FAF8F3]">
                Certificate of Designer Authenticity
              </span>
              <p className="font-sans text-[10px] text-[#C4B299]/60 uppercase tracking-[0.2em] mt-3">
                This document certifies that {product.title} has passed raw mineral selection, surface treatment verification, and architectural review.
              </p>
            </div>

            {/* Footer Signatures */}
            <div className="flex justify-between items-end z-10">
              <div className="flex flex-col">
                <span className="font-mono text-[8px] text-[#C4B299]/40 uppercase">Curation Director:</span>
                <span className="font-serif text-[11px] italic text-[#C4B299]">Evelyn Sen</span>
              </div>
              
              {/* Seal stamp representation */}
              <div className="w-12 h-12 rounded-full border border-[#8B6F47] flex items-center justify-center bg-[#FAF8F3]/5">
                <span className="font-serif text-[8px] text-[#C4B299] font-bold tracking-widest text-center">APPROVED</span>
              </div>
            </div>
          </div>

          {/* Verification & Secure Fragile Logistics Column */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <span className="font-mono text-xs tracking-[0.25em] text-[#8B6F47] block mb-3 uppercase">
                3.0 Material & Service Guarantee
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#111111] mb-4">
                Transparent Execution, Elite Care
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#111111]/70 leading-relaxed font-light">
                {product.curatorInspiration} We detail every mineral grain, finish coating, and weight constraint openly so you are confident in your selection. On purchase, you receive physical styling dossiers outlining precise ceiling/pedestal load clearances and cleaning solutions.
              </p>
            </div>

            {/* Delivery Information Block */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-[#8B6F47]/10 p-2 text-[#8B6F47]">
                  <Truck size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#111111]">Insured White-Glove Transport</h4>
                  <p className="font-sans text-xs text-[#111111]/60 leading-relaxed mt-1">
                    Every piece travels in wooden crates with specialized internal suspension cushions, protecting delicate edges and dials. Transport is fully secure and mapped hour-by-hour until placement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#8B6F47]/10 p-2 text-[#8B6F47]">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#111111]">Home Integration Protection</h4>
                  <p className="font-sans text-xs text-[#111111]/60 leading-relaxed mt-1">
                    We cover direct transit insurance and offer structural installation guidelines to ensure zero damage to wall paint, fine wall paneling, or masonry consoles.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Home Styling Consultation Banner */}
        <div
          id="interested-cta-banner"
          className="mt-24 border border-[#8B6F47] bg-[#FAF8F3] p-8 sm:p-12 text-center flex flex-col items-center"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#8B6F47] mb-4">
            Interior Selection Guidance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#111111] mb-4 max-w-2xl">
            Interested In Adding <span className="italic font-normal">"{product.title}"</span> To Your Space?
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#111111]/70 leading-relaxed max-w-2xl mb-8 font-light">
            Coordinate directly with our interior styling advisors to check dimensional suitability, review spatial layouts, explore pairing options, or request additional physical display photos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-stretch justify-center w-full max-w-md">
            <button
              id="details-bottom-btn-book"
              onClick={handleInquiryClick}
              className="bg-[#8B6F47] hover:bg-[#111111] text-[#FAF8F3] font-sans text-xs tracking-widest uppercase font-semibold py-4 px-8 rounded-full border border-transparent transition-all duration-300 text-center cursor-pointer"
            >
              Request Styling Consultation
            </button>
            <button
              id="details-bottom-btn-whatsapp"
              onClick={handleInquiryClick}
              className="bg-white hover:bg-[#111111] hover:text-[#FAF8F3] text-[#111111] font-sans text-xs tracking-widest uppercase font-semibold py-4 px-8 rounded-full border border-[#111111] transition-all duration-300 text-center cursor-pointer"
            >
              Consult On WhatsApp
            </button>
          </div>
        </div>

      </div>
    </article>
  );
}
