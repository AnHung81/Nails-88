import React from 'react';
import { Star, ShieldCheck, Heart, Clock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Hygienia Ensin",
      desc: "Käytämme steriloituja välineitä ja noudatamme korkeimpia hygieniastandardeja asiakkaidemme turvallisuuden takaamiseksi."
    },
    {
      icon: <Star size={40} />,
      title: "Ammattitaito",
      desc: "Kokenut henkilökuntamme kouluttautuu jatkuvasti tarjotakseen uusimpia tekniikoita ja trendejä."
    },
    {
      icon: <Heart size={40} />,
      title: "Laatutakuu",
      desc: "Käytämme vain korkealaatuisia tuotteita. Myönnämme työllemme viikon takuun (normaali kulutus)."
    },
    {
      icon: <Clock size={40} />,
      title: "Joustavat Ajat",
      desc: "Palvelemme joustavasti, myös iltaisin ja viikonloppuisin sopimuksen mukaan."
    }
  ];

  return (
    <section id="palvelut" className="py-20 bg-dark text-white relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Miksi valita Nails 88?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Haluamme, että jokainen käynti meillä on rentouttava kokemus, jonka lopputuloksena on itsevarma ja kaunis olo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 group">
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;