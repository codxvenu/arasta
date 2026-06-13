import React from 'react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section
      id="testimonials-section"
      className="bg-[#FAF8F3] py-24 border-b border-[#EAE6DF]"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#8B6F47] mb-3 block">
          Client Chronicles
        </span>
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#111111] mb-16">
          Words from Discerning <span className="italic font-normal">Connoisseurs</span>
        </h2>

        {/* Asymmetrical Masonry-style Layout for testimonials to avoid generic equal grids */}
        <div
          id="testimonials-flex-box"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {TESTIMONIALS.map((t, idx) => {
            // Apply varied vertical offset and distinct side padding to represent premium handbook printing
            const alignments = [
              'bg-white border border-[#EAE6DF] p-8 md:p-10 self-start lg:translate-y-4',
              'bg-white border border-[#8B6F47] p-8 md:p-10 self-start lg:-translate-y-4',
              'bg-[#EAE6DF]/40 border border-[#EAE6DF] p-8 md:p-10 self-start lg:translate-y-8'
            ];
            
            return (
              <div
                key={t.id}
                id={`testimonial-${t.id}`}
                className={`${alignments[idx % alignments.length]} transition-all duration-300 hover:scale-[1.01]`}
              >
                {/* Giant elegant serif quotation mark */}
                <span className="font-serif text-6xl text-[#8B6F47]/20 block h-6 -mt-4 mb-2 select-none">
                  “
                </span>
                
                {/* Large quote narrative */}
                <p className="font-serif text-lg leading-relaxed text-[#111111] mb-8 font-light italic">
                  {t.quote}
                </p>

                {/* Author Block */}
                <div className="border-t border-[#EAE6DF]/100 pt-6">
                  <h4 className="font-serif text-base font-semibold text-[#111111]">
                    {t.author}
                  </h4>
                  <p className="font-sans text-xs tracking-wide text-[#8B6F47] uppercase mt-1 font-medium">
                    {t.role}
                  </p>
                  <p className="font-sans text-[11px] text-[#111111]/40 uppercase tracking-widest mt-0.5">
                    {t.location}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
