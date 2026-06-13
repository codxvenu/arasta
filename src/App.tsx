import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import BrandStory from './components/BrandStory';
import CollectionGrid from './components/CollectionGrid';
import ProductDetail from './components/ProductDetail';
import ConsultationForm from './components/ConsultationForm';
import Testimonials from './components/Testimonials';
import InstagramGrid from './components/InstagramGrid';
import Footer from './components/Footer';
import { PRODUCTS } from './data';

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [prefilledProductTitle, setPrefilledProductTitle] = useState<string>('');

  const activeProduct = PRODUCTS.find((p) => p.id === selectedProductId);

  // Helper to scroll smoothly with offsets
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavigate = (sectionId: string) => {
    if (selectedProductId !== null) {
      // Exit detail view, return to home view, then trigger scroll
      setSelectedProductId(null);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleHomeClick = () => {
    setSelectedProductId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    // Find the product and seed advisory form pre-filing if client wants to inquire later
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      setPrefilledProductTitle(prod.title);
    }
  };

  const handleBookConsultation = (productTitle: string) => {
    setPrefilledProductTitle(productTitle);
    scrollToSection('consultation-section');
  };

  return (
    <div id="pavilion-root" className="min-h-screen bg-[#FAF8F3] selection:bg-[#8B6F47] selection:text-[#FAF8F3]">
      
      {/* Floating Transparent Headbar */}
      <Navigation
        onNavigate={handleNavigate}
        onHomeClick={handleHomeClick}
        currentView={selectedProductId ? 'detail' : 'home'}
      />

      {/* Main content body containing slow premium page transfers */}
      <main id="main-content-canvas">
        {activeProduct ? (
          /* Detailed Masterpiece Dossier Page */
          <div key={activeProduct.id} className="fade-in">
            <ProductDetail
              product={activeProduct}
              onBackClick={() => setSelectedProductId(null)}
              onBookConsultation={handleBookConsultation}
            />
          </div>
        ) : (
          /* Main Scholarly Showcase Stream */
          <div className="fade-in">
            {/* Cinematic Hero Segment */}
            <Hero
              onExploreClick={() => scrollToSection('collection-section')}
              onBookClick={() => handleBookConsultation('Curated Collection (Broad)')}
            />

            {/* Asymmetrical Trust Columns */}
            <TrustSection />

            {/* In-depth Museum Brand Story */}
            <BrandStory />

            {/* Staggered Masterpiece Grid Catalog */}
            <CollectionGrid onSelectProduct={handleSelectProduct} />

            {/* Collector Testimonials */}
            <Testimonials />

            {/* Clean Instagram media rows */}
            <InstagramGrid />
          </div>
        )}

        {/* Advisory Form Section (Always anchored before footer for maximum seamless conversions) */}
        <ConsultationForm
          prefilledProductTitle={prefilledProductTitle}
          onBookingSuccess={() => {
            // Small callback hook if needed
          }}
        />
      </main>

      {/* Corporate Museum Footer */}
      <Footer
        onNavigate={handleNavigate}
        onHomeClick={handleHomeClick}
      />
    </div>
  );
}
