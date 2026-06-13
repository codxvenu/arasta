import React, { useState, useEffect } from 'react';
import { CalendarClock, Mail, Phone, Bookmark, ScrollText, CheckCircle } from 'lucide-react';

interface ConsultationFormProps {
  prefilledProductTitle?: string;
  onBookingSuccess?: () => void;
}

export default function ConsultationForm({ prefilledProductTitle, onBookingSuccess }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    productOfInterest: prefilledProductTitle || '',
    preferredCallTime: 'Morning (09:00 AM - 12:00 PM)',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [historyCount, setHistoryCount] = useState(0);

  useEffect(() => {
    if (prefilledProductTitle) {
      setFormData((prev) => ({ ...prev, productOfInterest: prefilledProductTitle }));
    }
  }, [prefilledProductTitle]);

  useEffect(() => {
    // Read count of local bookings to display realistic trust
    const stored = localStorage.getItem('heritage_pavilion_bookings');
    if (stored) {
      try {
        const bookings = JSON.parse(stored);
        if (Array.isArray(bookings)) {
          setHistoryCount(bookings.length);
        }
      } catch (e) {}
    }
  }, [isSubmitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API handling
    setTimeout(() => {
      const stored = localStorage.getItem('heritage_pavilion_bookings') || '[]';
      let bookings = [];
      try {
        bookings = JSON.parse(stored);
      } catch (err) {}
      
      const newBooking = {
        id: `BOOK-${Date.now()}`,
        ...formData,
        timestamp: new Date().toLocaleString()
      };
      
      bookings.push(newBooking);
      localStorage.setItem('heritage_pavilion_bookings', JSON.stringify(bookings));
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      if (onBookingSuccess) {
        onBookingSuccess();
      }
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      productOfInterest: '',
      preferredCallTime: 'Morning (09:00 AM - 12:00 PM)',
      additionalNotes: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section
      id="consultation-section"
      className="bg-[#FAF8F3] py-24 border-b border-[#EAE6DF]"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Form Briefing / Scholarly intro (lg:5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#8B6F47] block mb-3">
                Private Advisory
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] leading-tight font-medium text-[#111111] mb-6">
                Request Private <br />
                <span className="italic font-normal text-[#8B6F47]">Scholarly Consultation</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#111111]/70 leading-relaxed font-light mb-8">
                Should you require further physical authentication chronicles, customized condition videos, scale renderings, or plan private viewing appointments inside our New Delhi or Bengaluru salons, our antiquary associates are available to respond.
              </p>

              <div id="contact-section" className="space-y-4 pt-4 border-t border-[#EAE6DF]">
                <div className="flex items-center space-x-3 text-sm text-[#111111]/80">
                  <Phone size={16} className="text-[#8B6F47]" />
                  <span className="font-mono">+91 11 4055 9300 (New Delhi Vaults)</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-[#111111]/80">
                  <Mail size={16} className="text-[#8B6F47]" />
                  <span className="font-mono">curator@heritagepavilion.in</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-[#111111]/80">
                  <ScrollText size={16} className="text-[#8B6F47]" />
                  <span className="font-sans font-light">Salon Hours: Mon – Sat (10:00 AM to 07:00 PM)</span>
                </div>
              </div>
            </div>

            {/* Micro Persistence Indicator */}
            {historyCount > 0 && (
              <div className="mt-12 p-4 bg-[#EAE6DF]/30 border border-[#EAE6DF] inline-flex items-center space-x-3 rounded-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B7D4A] animate-pulse" />
                <span className="font-mono text-[11px] tracking-wide text-[#111111]/60">
                  You have {historyCount} active registered advisory request(s).
                </span>
              </div>
            )}
          </div>

          {/* Form Core / State Card (lg:7) */}
          <div className="lg:col-span-7 bg-white border border-[#EAE6DF] p-8 sm:p-12 transition-all duration-300">
            {isSubmitted ? (
              <div id="booking-success-screen" className="flex flex-col justify-center items-center text-center py-12 fade-in">
                <div className="w-16 h-16 rounded-full bg-[#3B7D4A]/10 text-[#3B7D4A] flex items-center justify-center mb-6">
                  <CheckCircle size={32} />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                  Advisory Request Registered
                </h3>
                
                <p className="font-sans text-sm text-[#111111]/70 max-w-md leading-relaxed mb-8 font-light">
                  Our director level antiquary expert has received your dossier query. The gallery will establish direct telephone contact regarding state of authentication and delivery within <b className="font-semibold text-[#8B6F47]">24 hours</b>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <button
                    id="success-btn-reset"
                    onClick={handleReset}
                    className="bg-[#8B6F47] hover:bg-[#111111] text-[#FAF8F3] font-sans text-xs tracking-widest uppercase font-medium py-3 px-8 rounded-full border border-transparent transition-all cursor-pointer text-center"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form id="consultation-form" onSubmit={handleSubmit} className="space-y-6">
                <span className="font-mono text-[10px] tracking-widest text-[#8B6F47] uppercase block border-b border-[#EAE6DF] pb-2 mb-4">
                  SCHEDULING FORM
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col space-y-1">
                    <label id="lbl-name" className="font-sans text-xs tracking-widest uppercase text-[#111111]/60">
                      Full Name *
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Maharani Singhania"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-b border-[#D8D2C8] focus:border-[#8B6F47] py-3.5 px-1 font-sans text-sm text-[#111111] bg-transparent focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col space-y-1">
                    <label id="lbl-phone" className="font-sans text-xs tracking-widest uppercase text-[#111111]/60">
                      Phone Number *
                    </label>
                    <input
                      id="input-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-b border-[#D8D2C8] focus:border-[#8B6F47] py-3.5 px-1 font-sans text-sm text-[#111111] bg-transparent focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div className="flex flex-col space-y-1">
                    <label id="lbl-email" className="font-sans text-xs tracking-widest uppercase text-[#111111]/60">
                      Email Address *
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. collector@mahal.in"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-b border-[#D8D2C8] focus:border-[#8B6F47] py-3.5 px-1 font-sans text-sm text-[#111111] bg-transparent focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Preferred Call Time */}
                  <div className="flex flex-col space-y-1">
                    <label id="lbl-preferredCallTime" className="font-sans text-xs tracking-widest uppercase text-[#111111]/60">
                      Preferred Advisory Hour
                    </label>
                    <select
                      id="select-preferredCallTime"
                      name="preferredCallTime"
                      value={formData.preferredCallTime}
                      onChange={handleChange}
                      className="border-b border-[#D8D2C8] focus:border-[#8B6F47] py-3.5 px-1 font-sans text-sm text-[#111111] bg-transparent focus:outline-none transition-colors"
                    >
                      <option className="bg-[#FAF8F3]">Morning (09:00 AM - 12:00 PM)</option>
                      <option className="bg-[#FAF8F3]">Afternoon (12:00 PM - 04:00 PM)</option>
                      <option className="bg-[#FAF8F3]">Evening (04:00 PM - 07:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Product of Interest */}
                <div className="flex flex-col space-y-1">
                  <label id="lbl-productOfInterest" className="font-sans text-xs tracking-widest uppercase text-[#111111]/60">
                    Masterpiece of Interest
                  </label>
                  <input
                    id="input-productOfInterest"
                    type="text"
                    name="productOfInterest"
                    placeholder="e.g. The Great Chola Nataraja Bronze (Optional)"
                    value={formData.productOfInterest}
                    onChange={handleChange}
                    className="border-b border-[#D8D2C8] focus:border-[#8B6F47] py-3.5 px-1 font-sans text-sm text-[#111111] bg-transparent focus:outline-none transition-colors"
                  />
                </div>

                {/* Additional Notes */}
                <div className="flex flex-col space-y-1">
                  <label id="lbl-additionalNotes" className="font-sans text-xs tracking-widest uppercase text-[#111111]/60">
                    Additional Historical Portfolio Requests
                  </label>
                  <textarea
                    id="textarea-additionalNotes"
                    name="additionalNotes"
                    rows={3}
                    placeholder="Please specify if you want condition reporting videos, scale reference details, or specific provenance documentation..."
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className="border-b border-[#D8D2C8] focus:border-[#8B6F47] py-3.5 px-1 font-sans text-sm text-[#111111]/80 bg-transparent focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Button Container */}
                <div className="pt-4">
                  <button
                    id="form-btn-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#111111] hover:bg-[#8B6F47] text-[#FAF8F3] font-sans text-xs tracking-widest uppercase font-medium py-4 px-8 rounded-full border border-transparent transition-all duration-300 text-center cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Registering advisement...' : 'Request Private Advisement'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
