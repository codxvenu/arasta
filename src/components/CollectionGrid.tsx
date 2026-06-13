import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface CollectionGridProps {
  onSelectProduct: (productId: string) => void;
}

export default function CollectionGrid({ onSelectProduct }: CollectionGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Derive unique categories
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="collection-section"
      className="bg-[#FAF8F3] py-24 border-b border-[#EAE6DF]"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Heading & Category Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#8B6F47] block mb-3">
              The Curated Aarasta
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#111111]">
              The Featured Collection
            </h2>
          </div>

          {/* Luxury Text Category Filters with hairline divider layout */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-[#EAE6DF] pb-2">
            {categories.map((category) => (
              <button
                key={category}
                id={`filter-btn-${category.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`font-sans text-xs tracking-widest uppercase pb-1 transition-all duration-300 relative cursor-pointer ${
                  selectedCategory === category
                    ? 'text-[#8B6F47] font-semibold'
                    : 'text-[#111111]/50 hover:text-[#111111]'
                }`}
              >
                {category}
                {selectedCategory === category && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#8B6F47]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Masterpieces Staggered Grid (Museum Catalog Style) */}
        <div
          id="collection-products-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20"
        >
          {filteredProducts.map((product, idx) => {
            // Create nice slight structural asymmetry based on indexing to avoid boring template repetition
            const isStaggered = idx % 3 === 1; // Middle column hangs slightly lower

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                onClick={() => onSelectProduct(product.id)}
                className={`group cursor-pointer transition-all duration-500 flex flex-col ${
                  isStaggered ? 'lg:translate-y-8' : ''
                }`}
              >
                {/* Product Image Frame with crisp hairline borders, slow zoom interaction */}
                <div className="relative overflow-hidden aspect-[4/5] bg-[#EAE6DF] border border-[#EAE6DF] transition-transform duration-700">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Status Overlay Frame Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`font-mono text-[10px] tracking-widest uppercase py-1 px-3 border border-[#EAE6DF] bg-[#FAF8F3] ${
                        product.availability === 'Available'
                          ? 'text-[#3B7D4A]'
                          : product.availability === 'Reserved'
                          ? 'text-[#8B6F47]'
                          : 'text-[#111111]/40'
                      }`}
                    >
                      {product.availability}
                    </span>
                  </div>
                </div>

                {/* Narrative Details below Frame */}
                <div className="mt-6 flex flex-col items-start">
                  <span className="font-mono text-[11px] tracking-widest text-[#8B6F47] uppercase mb-1">
                    {product.category}
                  </span>
                  
                  <h3 className="font-serif text-2xl font-semibold text-[#111111] group-hover:text-[#8B6F47] transition-colors line-clamp-1 mb-2">
                    {product.title}
                  </h3>

                  {/* Provenance Metadata */}
                  <div className="flex items-center space-x-2 text-xs text-[#111111]/60 mb-6 font-sans">
                    <span>{product.material}</span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8B6F47]/40" />
                    <span>{product.finish}</span>
                  </div>

                  {/* Curated CTA - Hairline underline */}
                  <div className="w-full border-t border-[#EAE6DF] pt-4 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#111111]/40">
                      Ref: {product.serialNo}
                    </span>
                    <span className="font-sans text-xs tracking-widest uppercase font-medium text-[#8B6F47] group-hover:text-[#111111] transition-colors relative">
                      View Design Details & Styling
                      <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#8B6F47] scale-x-100 group-hover:scale-x-0 origin-left transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Empty indicator */}
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center border-t border-[#EAE6DF]">
            <p className="font-serif text-2xl italic text-[#111111]/50">
              No masterpieces matched your selection in our current preview inventory.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
