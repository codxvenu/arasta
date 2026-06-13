import React from 'react';

export default function BrandStory() {
  return (
    <section
      id="about-section"
      className="bg-[#FAF8F3] py-24 border-b border-[#EAE6DF] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Sourcing and Conservation Image (Left side) */}
          <div className="lg:col-span-6 relative">
            <div className="border border-[#D8D2C8] p-4 bg-white transition-transform duration-500 hover:scale-[1.01]">
              <img
                id="brand-story-image"
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200"
                alt="Expert handcrafting detail of luxury travertine textures"
                className="w-full h-auto object-cover grayscale brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Elegant tiny caption in mono */}
            <div className="mt-3 flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-widest text-[#8B6F47] uppercase">
                Fig. A — Material Honing & Assembly Check
              </span>
              <span className="font-mono text-[11px] text-[#111111]/40">
                Design Studio
              </span>
            </div>
          </div>

          {/* Narrative Content (Right side) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#8B6F47] block mb-4">
              Design Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium text-[#111111] mb-8">
              Curating Timeless Pieces That <br />
              <span className="italic font-normal text-[#8B6F47]">Transform Houses</span>
            </h2>

            <div className="space-y-6 font-sans text-sm sm:text-base text-[#111111]/70 leading-relaxed font-light">
              <p>
                At Aarasta, we believe that an interior is not just a layout; it is an expressive extension of your individuality, refined taste, and lifestyle. We curate a collection of handcrafted timepieces, decorative objects, wall art, and interior accents designed for distinguished homes.
              </p>
              <p>
                Our absolute focus is not on compiling historical preservation reports or documenting antiquity provenance. Instead, we are dedicated to elevating living spaces and inspiring visual aspiration through natural materials, premium craftsmanship, and sophisticated design.
              </p>
              <p>
                Each object is styled to speak the vocabulary of premium contemporary interior spaces. We work closely with master ateliers and stone carvers to deliver custom finishes—from brushed bronze to honed Tuscan travertine—that create warm contrast, dynamic shadows, and structural character.
              </p>
            </div>

            {/* Signature detail */}
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="font-serif text-xl italic font-semibold text-[#111111]">
                  Evelyn Sen
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8B6F47] mt-0.5">
                  Principal Interior Director & Spaces Advisor
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
