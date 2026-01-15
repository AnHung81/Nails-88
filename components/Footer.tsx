import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="yhteystiedot" className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold tracking-tighter">NAILS 88</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lohjan johtava kynsi- ja kauneusstudio. Olemme omistautuneet tuomaan esiin parhaat puolesi rentouttavassa ja hygieenisessä ympäristössä.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={24} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-primary">Yhteystiedot</h4>
            <div className="flex items-start gap-3 text-gray-300">
              <MapPin className="flex-shrink-0 mt-1" size={18} />
              <p>{BUSINESS_INFO.address}, {BUSINESS_INFO.postalCode} {BUSINESS_INFO.city}</p>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone size={18} />
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-primary">Aukioloajat</h4>
            <div className="flex items-start gap-3 text-gray-300">
              <Clock className="flex-shrink-0 mt-1" size={18} />
              <div className="text-sm space-y-1">
                <p><span className="w-16 inline-block font-bold">Ma - Pe:</span> 10:00 - 18:00</p>
                <p><span className="w-16 inline-block font-bold">La:</span> 10:00 - 15:00</p>
                <p><span className="w-16 inline-block font-bold">Su:</span> Suljettu</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden h-48 bg-gray-800">
            <iframe 
              src={BUSINESS_INFO.mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Nails 88 Location"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} {BUSINESS_INFO.name}. Kaikki oikeudet pidätetään.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Tietosuoja</a>
            <a href="#" className="hover:text-white">Käyttöehdot</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;