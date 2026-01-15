import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { BUSINESS_INFO, SERVICES } from './constants';

const App: React.FC = () => {
  // Construct Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": BUSINESS_INFO.name,
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371", // Representative image
    "@id": "https://nails88.fi",
    "url": "https://nails88.fi",
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address,
      "addressLocality": BUSINESS_INFO.city,
      "postalCode": BUSINESS_INFO.postalCode,
      "addressCountry": "FI"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 60.2494, // Approx coords for Lohja
      "longitude": 24.0685
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Kauneuspalvelut",
      "itemListElement": SERVICES.map((service) => ({
        "@type": "OfferCatalog",
        "name": service.title,
        "itemListElement": service.items.map(item => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": item.name
          },
          "price": item.price.replace('€', '').replace('alk.', '').trim(),
          "priceCurrency": "EUR"
        }))
      }))
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Services />
          <Gallery />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;