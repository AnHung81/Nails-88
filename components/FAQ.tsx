import React from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="ukk" className="py-24 bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider text-sm uppercase">Usein Kysyttyä</span>
          <h2 className="font-serif text-3xl md:text-4xl text-dark mt-2">Tietoa Palveluistamme</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-rose-50 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-bold text-dark text-lg">{faq.question}</span>
                <span className={`text-primary transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;