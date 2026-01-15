export interface PriceItem {
  name: string;
  price: string;
  description?: string; // Optional description for SEO context
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string; // SEO rich description
  items: PriceItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  email?: string;
  mapEmbedUrl: string;
  bookingUrl: string; // Placeholder for actual booking system
}