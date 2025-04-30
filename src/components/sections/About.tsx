import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="section bg-amber-50 bg-opacity-70">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container-custom"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            whileInView={{ x: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 bg-white p-3 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="/lovable-uploads/acca5cb8-1794-429a-88a8-f104877c3450.png" 
                alt="Légumes frais" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-3/4 h-3/4 bg-ndugumi-orange rounded-lg opacity-20 z-0"></div>
          </motion.div>
          
          <div>
            <motion.h2 
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-title"
            >
              À propos de Ndugumi
            </motion.h2>
            <motion.p 
              whileInView={{ y: [30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-700 mb-6"
            >
              Ndugumi a été fondé avec une mission simple : connecter les agriculteurs locaux directement avec les consommateurs, en éliminant les intermédiaires et en s'assurant que les agriculteurs reçoivent une rémunération équitable pendant que les consommateurs profitent de produits frais et de haute qualité.
            </motion.p>
            <motion.p 
              whileInView={{ y: [30, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-700 mb-6"
            >
              Notre équipe est composée d'experts en agriculture, d'innovateurs technologiques et de défenseurs de la durabilité qui travaillent ensemble pour révolutionner l'écosystème de livraison alimentaire au Sénégal. Nous croyons en la transparence, la qualité et le soutien aux communautés locales.
            </motion.p>
            
            <motion.div 
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6 mt-8"
            >
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-ndugumi-green mb-2">25+</div>
                <p className="text-gray-600">Agriculteurs Locaux</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-ndugumi-green mb-2">150+</div>
                <p className="text-gray-600">Clients Satisfaits</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-ndugumi-green mb-2">5+</div>
                <p className="text-gray-600">Villes Desservies</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl font-bold text-ndugumi-green mb-2">12+</div>
                <p className="text-gray-600">Chauffeurs-Livreurs</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
