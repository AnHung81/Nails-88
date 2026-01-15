import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Etusivu', href: '#etusivu' },
    { name: 'Galleria', href: '#galleria' },
    { name: 'Hinnasto', href: '#hinnasto' },
    { name: 'Palvelut', href: '#palvelut' },
    { name: 'UKK', href: '#ukk' },
    { name: 'Yhteystiedot', href: '#yhteystiedot' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#etusivu" className={`font-serif text-3xl font-bold tracking-tighter ${scrolled ? 'text-dark' : 'text-dark md:text-white'}`}>
              NAILS 88
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium text-sm uppercase tracking-widest hover:text-primary transition-colors ${scrolled ? 'text-gray-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="bg-primary hover:bg-white hover:text-primary text-white px-6 py-2 rounded-full font-bold transition-all duration-300 flex items-center gap-2"
            >
              <Phone size={16} />
              Varaa Aika
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-dark'} hover:text-primary focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-gray-800 hover:text-primary hover:bg-gray-50 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
             <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="w-full bg-primary text-white py-3 rounded-lg font-bold flex justify-center items-center gap-2"
            >
              <Phone size={18} />
              Soita: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;