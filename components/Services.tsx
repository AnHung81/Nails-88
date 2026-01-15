import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="hinnasto" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-dark mb-4">Hinnasto & Palvelut</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tarjoamme laajan valikoiman kauneuspalveluita kilpailukykyisin hinnoin. 
            Tutustu kattavaan palveluvalikoimaamme alta.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-24">
              <div className="flex items-end gap-4 mb-6 border-b border-gray-200 pb-2">
                <h3 className="font-serif text-2xl md:text-3xl text-dark">{category.title}</h3>
              </div>
              
              <p className="text-gray-500 mb-6 italic">{category.description}</p>
              
              <div className="bg-light/50 rounded-2xl p-6 md:p-8 shadow-sm border border-rose-100">
                <ul className="space-y-4">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex justify-between items-center group hover:bg-white p-3 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="text-primary/50 group-hover:text-primary transition-colors">
                            <Check size={16} />
                        </span>
                        <span className="font-medium text-gray-800 text-lg">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="hidden md:block h-[1px] w-24 bg-gray-200"></div>
                         <span className="font-bold text-dark text-lg whitespace-nowrap">{item.price}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-gray-500 text-sm bg-gray-50 p-4 rounded-lg">
          <p>Hinnat sisältävät alv 24%. Oikeudet hinnanmuutoksiin pidätetään. Peruutukset viimeistään 24h ennen varattua aikaa.</p>
        </div>

      </div>
    </section>
  );
};

export default Services;