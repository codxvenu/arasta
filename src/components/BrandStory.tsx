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
                src="https://images.unsplash.com/photo-1456086272160-b28b0645b729?auto=format&fit=crop&q=80&w=1200"
                alt="Antique Scholar Inspecting Antique Textures and Patterns"
                className="w-full h-auto object-cover grayscale brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Elegant tiny caption in mono */}
            <div className="mt-3 flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-widest text-[#8B6F47] uppercase">
                Fig. A — Forensic Examination (TL Testing)
              </span>
              <span className="font-mono text-[11px] text-[#111111]/40">
                Est. Archives 1928
              </span>
            </div>
          </div>

          {/* Narrative Content (Right side) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#8B6F47] block mb-4">
              Historical Stewardship
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium text-[#111111] mb-8">
              Preserving History Through <br />
              <span className="italic font-normal text-[#8B6F47]">Timeless Objects</span>
            </h2>

            <div className="space-y-6 font-sans text-sm sm:text-base text-[#111111]/70 leading-relaxed font-light">
              <p>
                The Heritage Pavilion was born from a singular conviction: that humanity’s finest artistic legacies should not fade into dust or reside solely behind modern glass vitrines. They should reside as living, breathing anchors of character in the world’s most exquisite physical spaces.
              </p>
              <p>
                Our sourcing network spans several generations of royal lineages, estate guardians, and registered scholarly curators across India. This enables us to unearth objects that have remained unlisted to the general public for nearly a century.
              </p>
              <p>
                Every sculpture, manuscript, and vintage tapestry we locate undergoes a rigorous conservation protocol. Our dedicated restoration studio in Jodhpur relies exclusively on organic pigments, age-specific wood materials, and reversible ancient binding methods, ensuring the profound patina of the era remains entirely uncompromised.
              </p>
            </div>

            {/* Signature detail */}
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="font-serif text-xl italic font-semibold text-[#111111]">
                  Devraj Singh Bundela
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8B6F47] mt-0.5">
                  Principal Curator & Restoration Scholar
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
