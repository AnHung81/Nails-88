import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="etusivu" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=2070" 
          alt="Kaunis manikyyri ja rakennekynnet" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-800/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase mb-4 border border-white/30">
            Lohjan Keskusta
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Kauneutta <br/>
            <span className="text-primary italic">Sormenpäihin</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed">
            Etsitkö parasta kynsi- ja kauneuspalvelua Lohjan sydämessä? 
            Nails 88 tarjoaa ammattitaitoiset rakennekynnet, ripsienpidennykset ja rentouttavat jalkahoidot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#hinnasto"
              className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
            >
              Katso Hinnasto
            </a>
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="bg-white/10 backdrop-blur-md hover:bg-white hover:text-dark text-white border border-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Varaa Aika <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;