import React from 'react';
import { INSTAGRAM_POSTS } from '../data';
import { Instagram, Heart } from 'lucide-react';

export default function InstagramGrid() {
  const handleInstagramClick = (postId: string) => {
    // Elegant simulation of outbound social connection
    window.open(`https://instagram.com/aarasta`, '_blank');
  };

  return (
    <section
      id="instagram-section"
      className="bg-[#FAF8F3] py-24 border-b border-[#EAE6DF]"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Title row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#8B6F47] mb-3 block">
              Curated Feeds
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#111111]">
              Styling Inspiration
            </h2>
          </div>
          <button
            id="btn-follow-instagram"
            onClick={() => window.open('https://instagram.com/aarasta', '_blank')}
            className="inline-flex items-center space-x-2 border-b border-[#111111] pb-1 font-sans text-xs tracking-widest uppercase text-[#111111] hover:text-[#8B6F47] hover:border-[#8B6F47] transition-all cursor-pointer font-medium"
          >
            <Instagram size={14} />
            <span>@aarasta</span>
          </button>
        </div>

        {/* Quiet Editorial Instagram Grid */}
        <div
          id="instagram-posts-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              id={`ig-card-${post.id}`}
              onClick={() => handleInstagramClick(post.id)}
              className="group cursor-pointer bg-white border border-[#EAE6DF] overflow-hidden flex flex-col justify-between hover:scale-[1.01] transition-transform duration-500"
            >
              <div className="relative aspect-square overflow-hidden bg-[#EAE6DF]">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Hover Shade */}
                <div className="absolute inset-0 bg-[#111111]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <Instagram className="text-[#C4B299] mb-4" size={28} />
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#FAF8F3] font-medium mb-1">
                    Curated Living
                  </span>
                  <span className="font-sans text-xs text-[#FAF8F3]/60 italic font-light">
                    Click to view spaces & galleries
                  </span>
                </div>
              </div>

              {/* Aesthetic caption strip */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="font-sans text-xs text-[#111111]/75 leading-relaxed font-light line-clamp-3 mb-4">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between border-t border-[#EAE6DF]/60 pt-3">
                  <div className="flex items-center space-x-1.5 text-xs text-[#8B6F47]">
                    <Heart size={12} className="fill-[#8B6F47]" />
                    <span className="font-mono text-[11px]">{post.likes}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#111111]/45 uppercase">
                    {post.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
