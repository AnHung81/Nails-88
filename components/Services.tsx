import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="hinnasto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-wider text-sm uppercase">Hinnasto</span>
          <h2 className="font-serif text-4xl md:text-5xl text-dark mt-3 mb-6">Palvelumme</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Tarjoamme laajan valikoiman kauneuspalveluita ammattitaidolla. 
            Tutustu hinnastoomme ja varaa aikasi hemmotteluun.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {SERVICES.map((category) => (
            <div 
              key={category.id} 
              id={category.id} 
              className="scroll-mt-32 bg-white rounded-3xl p-8 shadow-[0_5px_30px_-5px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-primary/30 transition-colors duration-300 flex flex-col"
            >
              <div className="mb-8 border-b border-gray-100 pb-4">
                <h3 className="font-serif text-2xl md:text-3xl text-dark mb-2">{category.title}</h3>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wide text-primary">{category.description}</p>
              </div>
              
              <ul className="space-y-4 flex-grow">
                {category.items.map((item, index) => (
                  <li key={index} className="flex justify-between items-start group py-1">
                    <div className="flex items-start gap-3 pr-4">
                      <span className="text-primary mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="font-medium text-gray-700 text-base md:text-lg group-hover:text-dark transition-colors">{item.name}</span>
                    </div>
                    <div className="flex flex-col items-end">
                       <span className="font-bold text-dark text-lg whitespace-nowrap bg-light px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300 min-w-[3.5rem] text-center">
                         {item.price.replace(' ', '')}
                       </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
           <div className="inline-block bg-gray-50 px-8 py-6 rounded-2xl border border-gray-100 max-w-3xl">
              <p className="text-gray-500 text-sm leading-relaxed">
                <strong className="text-dark">Huomioitavaa:</strong> Hinnat sisältävät alv 24%. Pidätämme oikeuden hinnanmuutoksiin. 
                Peruutukset on tehtävä viimeistään 24h ennen varattua aikaa. Peruuttamattomista ajoista veloitamme 50% palvelun hinnasta.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Services;