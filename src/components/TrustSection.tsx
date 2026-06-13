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
              The Benchmarks of <span className="italic font-normal">Heritage Sourcing</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-sans text-base lg:text-lg text-[#111111]/70 leading-relaxed font-light">
              Acquiring a historical artifact is a commitment to preserving cultural luxury. We serve as the custodian of absolute transparency, supporting every single acquisition with authentic forensic, scholastic, and structural verification portfolios.
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
                Verified Authenticity
              </h3>
              <p className="font-sans text-sm text-[#111111]/70 leading-relaxed font-light">
                Every masterpiece is supported by chemical, radiocarbon, or scholastic dossiers vetted by prominent antiquity committees. Each piece arrives with a formal Certificate of Origin.
              </p>
            </div>
            {/* Subtle photographic text reference */}
            <div className="mt-8 pt-4 border-t border-[#EAE6DF]/40">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B6F47]">
                [ Rigorous Scholastic Dossier ]
              </span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="border-[#EAE6DF] border-b lg:border-r p-8 md:p-10 flex flex-col justify-between hover:bg-[#EAE6DF]/20 transition-all duration-300">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#8B6F47] font-semibold block mb-8">
                02 / SCHOLARSHIP
              </span>
              <h3 className="font-serif text-xl font-medium text-[#111111] mb-4">
                Expert Consultation
              </h3>
              <p className="font-sans text-sm text-[#111111]/70 leading-relaxed font-light">
                We believe in continuous education. Benefit from scheduled private walkthroughs, digital condition video reviews, or coordinate directly with specialized historians in Indian sculpture and textiles.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#EAE6DF]/40">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B6F47]">
                [ Direct Antiquary Access ]
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
                Insured Pan India Delivery
              </h3>
              <p className="font-sans text-sm text-[#111111]/70 leading-relaxed font-light">
                We employ specialized, museum-approved logistics. Fragile sculptures and precious paintings travel via custom-crated climate vehicles, fully secured and insured directly to your estate gates.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#EAE6DF]/40">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B6F47]">
                [ Climate-Managed Freight ]
              </span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="border-[#EAE6DF] border-b p-8 md:p-10 flex flex-col justify-between hover:bg-[#EAE6DF]/20 transition-all duration-300">
            <div>
              <span className="font-mono text-xs tracking-widest text-[#8B6F47] font-semibold block mb-8">
                04 / PROVENANCE
              </span>
              <h3 className="font-serif text-xl font-medium text-[#111111] mb-4">
                Curated Nobility
              </h3>
              <p className="font-sans text-sm text-[#111111]/70 leading-relaxed font-light">
                Our inventory remains meticulously restrained. We only source pieces of distinct artistic, noble, or lineage significance, avoiding generic antique reproductions.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#EAE6DF]/40">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8B6F47]">
                [ Rare Masterpiece Focus ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
