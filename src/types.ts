export interface Product {
  id: string;
  title: string;
  category: string;
  origin: string;
  era: string;
  period: string;
  material: string;
  dimensions: string;
  availability: 'Available' | 'Reserved' | 'Acquired';
  images: string[];
  historicalStory: string;
  provenance: string;
  conditionReport: string;
  authenticityDetails: {
    certificateNo: string;
    reviewedBy: string;
    documentation: string;
    verificationStatus: 'Verified' | 'Documented' | 'Expert Committee Reviewed';
  };
}

export interface ConsultationBooking {
  id: string;
  name: string;
  phone: string;
  email: string;
  productOfInterestId?: string; // Optional reference
  productTitle?: string;
  preferredCallTime: string;
  additionalNotes?: string;
  timestamp: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  date: string;
}
