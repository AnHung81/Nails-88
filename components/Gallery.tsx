import React, { useState, useRef, useEffect } from 'react';
import { Instagram, ArrowRight, ChevronsLeftRight, ThumbsUp, ThumbsDown, Flag } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      url: "https://images.unsplash.com/photo-1632922267756-9b71242b1592?auto=format&fit=crop&q=80&w=800",
      category: "Rakennekynnet",
      title: "Elegantti Babyboomer"
    },
    {
      url: "https://images.unsplash.com/photo-1583001931096-959e9ad7b535?auto=format&fit=crop&q=80&w=800",
      category: "Ripsienpidennykset",
      title: "Volyymiripset"
    },
    {
      url: "https://images.unsplash.com/photo-1522337360705-8763d84a783a?auto=format&fit=crop&q=80&w=800",
      category: "Koristelut",
      title: "Glitter & Timantit"
    },
    {
      url: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800",
      category: "Manikyyri",
      title: "Klassinen Punainen"
    },
    {
      url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800",
      category: "Jalkahoidot",
      title: "SPA Jalkahoito"
    },
    {
      url: "https://images.unsplash.com/photo-1600924779159-e2aa70a417bd?auto=format&fit=crop&q=80&w=800",
      category: "Rakennekynnet",
      title: "Moderni Ranskalainen"
    }
  ];

  // Slider State
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Feedback State
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  
  // Flag State
  const [flagged, setFlagged] = useState(false);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      setSliderPosition(percentage);
    }
  };

  const onMouseDown = () => setIsDragging(true);
  const onTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  return (
    <section id="galleria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase">Portfolio</span>
          <h2 className="font-serif text-3xl md:text-5xl text-dark mt-2 mb-6">Työnäytteitämme</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Meille työn laatu on kunnia-asia. Alla näet esimerkkejä tekemistämme rakennekynsistä, 
            ripsienpidennyksistä ja jalkahoidoista.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md cursor-pointer">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.category}</span>
                <h3 className="text-white font-serif text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Before & After Feature */}
        <div className="mt-20 bg-light rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 space-y-6">
               <span className="inline-block py-1 px-3 rounded bg-white text-primary text-xs font-bold tracking-widest uppercase border border-primary/20">
                 Muodonmuutos
               </span>
               <h3 className="font-serif text-3xl md:text-4xl text-dark">Katseen Voima</h3>
               <p className="text-gray-600 text-lg leading-relaxed">
                 Ripsienpidennykset eivät ainoastaan pidennä ripsiäsi, vaan ne avaavat koko katseen ja tuovat kasvoille ryhtiä. 
                 Volyymiripsillä saamme aikaan näyttävän mutta luonnollisen lopputuloksen, joka säästää aikaa aamuisin.
               </p>
               <a href="#hinnasto" className="inline-flex items-center gap-2 font-bold text-dark hover:text-primary transition-colors">
                 Varaa aika ripsiin <ArrowRight size={20} />
               </a>
            </div>
            
            <div className="flex-1 w-full select-none">
               <div 
                 ref={containerRef}
                 className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden cursor-col-resize shadow-xl ring-4 ring-white"
                 onMouseDown={onMouseDown}
                 onTouchStart={onTouchStart}
               >
                 {/* Image 2: AFTER (Background) */}
                 <img 
                   src="https://images.unsplash.com/photo-1583001931096-959e9ad7b535?auto=format&fit=crop&q=80&w=800" 
                   alt="Jälkeen - Volyymiripset" 
                   className="absolute inset-0 w-full h-full object-cover"
                   draggable={false}
                 />
                 <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm z-10">
                    JÄLKEEN
                 </div>

                 {/* Image 1: BEFORE (Foreground - clipped) */}
                 <div 
                   className="absolute inset-0 overflow-hidden w-full h-full"
                   style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                 >
                   <img 
                     src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800" 
                     alt="Ennen - Luonnolliset ripset" 
                     className="absolute inset-0 w-full h-full object-cover"
                     draggable={false}
                   />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-dark text-xs font-bold px-3 py-1.5 rounded shadow-sm z-10">
                      ENNEN
                    </div>
                 </div>

                 {/* Slider Handle */}
                 <div 
                   className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                   style={{ left: `${sliderPosition}%` }}
                 >
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                     <ChevronsLeftRight size={16} className="text-primary" />
                   </div>
                 </div>

                 {/* Flag Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setFlagged(!flagged);
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    className={`absolute bottom-4 right-4 z-30 p-2 rounded-full shadow-sm backdrop-blur-sm transition-all duration-200 ${
                        flagged 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/70 text-gray-500 hover:bg-white hover:text-red-500'
                    }`}
                    aria-label="Ilmoita ongelmasta"
                    title="Ilmoita ongelmasta kuvassa"
                  >
                    <Flag size={16} fill={flagged ? "currentColor" : "none"} />
                  </button>
               </div>
               
               <p className="text-center text-gray-500 text-sm mt-4 font-medium flex items-center justify-center gap-2">
                 <ChevronsLeftRight size={16} className="text-primary" />
                 Vedä liukusäädintä sivusuunnassa nähdäksesi eron
               </p>

               {/* Feedback Mechanism */}
               <div className="mt-6 flex flex-col items-center justify-center space-y-3">
                 {!feedbackGiven ? (
                   <>
                     <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Oliko tämä vertailu hyödyllinen?</span>
                     <div className="flex gap-3">
                       <button 
                         onClick={() => setFeedbackGiven(true)}
                         className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-colors"
                       >
                         <ThumbsUp size={12} /> Kyllä
                       </button>
                       <button 
                         onClick={() => setFeedbackGiven(true)}
                         className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-gray-400 border border-gray-300 rounded-full hover:border-gray-500 hover:text-gray-600 transition-colors"
                       >
                         <ThumbsDown size={12} /> Ei
                       </button>
                     </div>
                   </>
                 ) : (
                   <span className="text-sm text-primary font-bold animate-pulse py-2">Kiitos palautteesta!</span>
                 )}
               </div>
            </div>
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-dark font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors"
          >
            <Instagram size={20} />
            Katso lisää kuvia Instagramissa @nails88lohja
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;