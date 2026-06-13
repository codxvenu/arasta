export interface Product {
  id: string;
  title: string;
  category: string;
  finish: string;
  material: string;
  dimensions: string;
  roomSuitability: string;
  availability: 'Available' | 'Reserved' | 'Acquired';
  images: string[];
  designInspiration: string;
  craftsmanshipDetails: string;
  stylingRecommendations: string;
  placementSuggestions: string;
  careInstructions: string;
  serialNo: string;
  curatorInspiration: string;
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
