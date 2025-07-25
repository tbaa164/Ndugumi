import React from 'react';
import { motion } from 'framer-motion';
import CallToAction from '@/components/ui/CallToAction';
import LogoGroup from '@/components/ui/LogoGroup';
import FoodCarousel from '@/components/ui/FoodCarousel';

export const Hero = () => {
  // Liens des applications
  const appLinks = {
    client: 'https://apps.apple.com/sn/app/ndugumi/id6740814701?l=fr-FR',
    driver: 'https://apps.apple.com/sn/app/ndugumi-driver/id6740814740?l=fr-FR'
  };

  // Fonction pour ouvrir un lien dans un nouvel onglet
  const openAppLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Formes organiques en arrière-plan */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute right-0 top-0 h-full w-1/2 text-amber-100 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M45.3,-76.2C60.9,-69.2,77.3,-60.6,83.9,-47.3C90.6,-33.9,87.5,-16.9,85.5,-1.1C83.6,14.7,82.8,29.4,76.3,42.1C69.7,54.8,57.3,65.5,43.5,72.2C29.7,78.9,14.8,81.5,-0.4,82.2C-15.6,82.9,-31.2,81.6,-45.4,75.4C-59.6,69.2,-72.4,58.1,-79.8,44.1C-87.2,30.1,-89.2,13.1,-87.1,-2.1C-85,-17.3,-78.9,-30.6,-70.6,-42.8C-62.3,-55,-51.8,-66.2,-39.2,-74.6C-26.6,-83,-13.3,-88.7,0.8,-90.1C14.9,-91.5,29.8,-88.6,45.3,-76.2Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute left-0 bottom-0 h-full w-1/2 text-amber-100 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.7,-73.2C62.1,-66.3,74.5,-54.2,79.8,-39.8C85.1,-25.4,83.2,-8.6,79.8,7.2C76.3,23,71.2,37.9,62.3,51.3C53.4,64.7,40.6,76.8,25.8,81.2C11,85.7,-5.8,82.6,-20.9,76.9C-36,71.2,-49.5,62.9,-60.3,51.2C-71.1,39.5,-79.3,24.4,-83.1,7.9C-86.9,-8.7,-86.4,-26.6,-78.5,-40.2C-70.7,-53.8,-55.5,-63.1,-40.5,-69.5C-25.5,-75.9,-10.7,-79.5,3.2,-84.5C17.2,-89.5,34.3,-95.9,47.7,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Version Desktop */}
        <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="animate-fade-in"
          >
            <LogoGroup className="mb-8" />
            <h1 className="text-5xl font-bold mb-6 text-ndugumi-green-dark leading-tight">
              Le Meilleur du<br/> 
              <motion.span 
                className="text-ndugumi-orange inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Marché Local
              </motion.span> 
              <br/>Livré Chez Vous
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              NDUGUMi connecte les agriculteurs locaux avec les consommateurs urbains, pendant que NDUGUMi Drive assure des livraisons rapides et fiables dans tout le Sénégal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <CallToAction variant="contact" href="#contact" withIcon={true}>
                Nous Contacter
              </CallToAction>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FoodCarousel className="w-full h-auto rounded-2xl shadow-xl" />
          </motion.div>
        </div>

        {/* Version Mobile */}
        <div className="lg:hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="animate-fade-in text-center"
          >
            <LogoGroup className="mb-8 mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-ndugumi-green-dark leading-tight">
              Le Meilleur du<br/> 
              <motion.span 
                className="text-ndugumi-orange inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Marché Local
              </motion.span> 
              <br/>Livré Chez Vous
            </h1>
            <p className="text-gray-700 text-lg mb-8">
              Ndugumi connecte les agriculteurs locaux avec les consommateurs urbains, pendant que Ndugumi Drive assure des livraisons rapides et fiables dans tout le Sénégal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <CallToAction variant="contact" href="#contact" withIcon={true}>
                Nous Contacter
              </CallToAction>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FoodCarousel className="w-full h-auto rounded-2xl shadow-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
