import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ShoppingBasket } from 'lucide-react';

// Import des images
// Légumes
import legume1 from '../sections/assets/images/legumes/legume 1.jpg';
import legume4 from '../sections/assets/images/legumes/legume 4.webp';
import legume3 from '../sections/assets/images/legumes/legume3.jpg';

// Plats
import thiebouDieune from '../sections/assets/images/plats/Thiebou-dieune.jpg';
import pouletYassa from '../sections/assets/images/plats/poulet-yassa.avif';
import cestBonDiola from '../sections/assets/images/plats/Cest-bon-diola.jpg';
import mafe from '../sections/assets/images/plats/mafé.jpg';
import soupouKandia from '../sections/assets/images/plats/soupou kandia.webp';
import thieb from '../sections/assets/images/plats/Thieb.jpeg';

// Types
interface CarouselItem {
  id: number;
  type: 'legume' | 'plat';
  name: string;
  image: string;
  description?: string;
}

interface FoodCarouselProps {
  className?: string;
}

export const FoodCarousel: React.FC<FoodCarouselProps> = ({ className }) => {
  // Données du carrousel
  const carouselItems: CarouselItem[] = [
    // Légumes
    { 
      id: 1, 
      type: 'legume', 
      name: 'Légumes frais', 
      image: legume1,
      description: 'Légumes frais du jour'
    },
    { 
      id: 2, 
      type: 'legume', 
      name: 'Assortiment coloré', 
      image: legume4,
      description: 'Variété de légumes de saison'
    },
    { 
      id: 3, 
      type: 'legume', 
      name: 'Légumes bio', 
      image: legume3,
      description: 'Cultivés sans pesticides'
    },
    
    // Plats
    { 
      id: 4, 
      type: 'plat', 
      name: 'Thiébou Dieune', 
      image: thiebouDieune,
      description: 'Tous les ingrédients pour ce plat traditionnel'
    },
    { 
      id: 5, 
      type: 'plat', 
      name: 'Poulet Yassa', 
      image: pouletYassa,
      description: 'Kit complet pour préparer ce délice'
    },
    { 
      id: 6, 
      type: 'plat', 
      name: 'C\'est Bon Diola', 
      image: cestBonDiola,
      description: 'Tous les ingrédients en un clic'
    },
    { 
      id: 7, 
      type: 'plat', 
      name: 'Mafé', 
      image: mafe,
      description: 'Sauce à base d\'arachide et viande'
    },
    { 
      id: 8, 
      type: 'plat', 
      name: 'Soupou Kandia', 
      image: soupouKandia,
      description: 'Délicieuse soupe traditionnelle'
    },
    { 
      id: 9, 
      type: 'plat', 
      name: 'Thieb', 
      image: thieb,
      description: 'Riz blanc accompagné de poisson'
    },
  ];

  // Configuration du carrousel
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    
    // Auto-play
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000);
    
    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

  const currentItem = carouselItems[selectedIndex % carouselItems.length];

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-xl ${className}`}>
      {/* Indicateur du type d'article (légume ou plat) */}
      <motion.div 
        className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-sm font-medium ${
          currentItem?.type === 'legume' 
            ? 'bg-ndugumi-green text-white' 
            : 'bg-ndugumi-orange text-white'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        key={currentItem?.id}
        transition={{ duration: 0.3 }}
      >
        {currentItem?.type === 'legume' ? 'Légume' : 'Plat complet'}
      </motion.div>


      {/* Carrousel principal */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselItems.map((item) => (
            <div 
              key={item.id} 
              className="relative flex-[0_0_100%] min-w-0 overflow-hidden h-[400px]"
            >
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Overlay avec le nom et la description */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
                <p className="text-white/90">{item.description}</p>
                
          
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Boutons de navigation */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-ndugumi-green-dark p-2 rounded-full shadow-md z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-ndugumi-green-dark p-2 rounded-full shadow-md z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicateurs de position */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodCarousel;
