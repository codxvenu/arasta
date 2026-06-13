import React from 'react';
import { Award, Compass, HeartHandshake, ShieldAlert } from 'lucide-react';

export default function TrustSection() {
  return (
    <section
      id="authenticity-section"
      className="bg-[#FAF8F3] py-24 border-b border-[#EAE6DF]"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Editorial Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#8B6F47] block mb-3">
              Our Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium text-[#111111]">
              The Benchmarks of <span className="italic font-normal">Fine Curation</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-sans text-base lg:text-lg text-[#111111]/70 leading-relaxed font-light">
              We believe a distinguished residence is a canvas of artistic expression. Every piece in our Aarasta collection acts as an exquisite anchor of character, supported by complete material transparency, direct designer guidance, and secure white-glove delivery.
            </p>
          </div>
        </div>

        {/* 4 Premium Columns with elegant hairline layout instead of flashy cards */}
        <div
          id="trust-features-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#EAE6DF]"
        >
          {/* Feature 1 */}
          <div className="border-[#EAE6DF] border-b md:border-r p-8 md:p-10 flex flex-col justify-between hover:bg-[#EAE6DF]/20 transition-all duration-300">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#8B6F47] font-semibold block mb-8">
                01 / INTEGRITY
              </span>
              <h3 className="font-serif text-xl font-medium text-[#111111] mb-4">
                Premium Craftsmanship
              </h3>
              <p className="font-sans text-sm text-[#111111]/70 leading-relaxed font-light">
                Each timeless timepiece, travertine vessel, and textured gesso panel is hand-crafted and checked across rigorous stages, ensuring exceptional, long-lasting construction and premium material finishes.
              </p>
            </div>
            {/* Subtle photographic text reference */}
            <div className="mt-8 pt-4 border-t border-[#EAE6DF]/40">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B6F47]">
                [ Full Material Transparency ]
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="border-[#EAE6DF] border-b lg:border-r p-8 md:p-10 flex flex-col justify-between hover:bg-[#EAE6DF]/20 transition-all duration-300">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#8B6F47] font-semibold block mb-8">
                02 / EXPERTISE
              </span>
              <h3 className="font-serif text-xl font-medium text-[#111111] mb-4">
                Selection Guidance
              </h3>
              <p className="font-sans text-sm text-[#111111]/70 leading-relaxed font-light">
                Our interior specialists assist you in choosing objects that harmonize with your current spacing. Call on us for styling, sizing recommendations, placement formulas, and lighting advice.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#EAE6DF]/40">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B6F47]">
                [ Custom Styling Dialogue ]
              </span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="border-[#EAE6DF] border-b md:border-r p-8 md:p-10 flex flex-col justify-between hover:bg-[#EAE6DF]/20 transition-all duration-300">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#8B6F47] font-semibold block mb-8">
                03 / SECURE TRANSIT
              </span>
              <h3 className="font-serif text-xl font-medium text-[#111111] mb-4">
                Insured Safe Delivery
              </h3>
              <p className="font-sans text-sm text-[#111111]/70 leading-relaxed font-light">
                All delicate items travel in custom padded, shock-proof boxing. Backed by comprehensive marine-grade transit insurance, we verify every stage of shipping directly to your parlor.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#EAE6DF]/40">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B6F47]">
                [ Shock-Proof Packaging ]
              </span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="border-[#EAE6DF] border-b p-8 md:p-10 flex flex-col justify-between hover:bg-[#EAE6DF]/20 transition-all duration-300">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#8B6F47] font-semibold block mb-8">
                04 / THOUGHTFUL CURATION
              </span>
              <h3 className="font-serif text-xl font-medium text-[#111111] mb-4">
                Individualistic Accents
              </h3>
              <p className="font-sans text-sm text-[#111111]/70 leading-relaxed font-light">
                We design and select pieces that transcend fleeting seasonal trends, bringing organic textures, sculptural geometries, and beautiful function to distinguished estates.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#EAE6DF]/40">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B6F47]">
                [ Restrained Boutique Drops ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
