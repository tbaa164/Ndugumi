import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showAppOptions, setShowAppOptions] = useState(false);

  const customerSteps = [
    {
      title: 'Télécharger & S\'inscrire',
      description: 'Téléchargez notre application et créez un compte pour commencer à commander des légumes frais.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Parcourir les Produits',
      description: 'Explorez notre large sélection de légumes frais et produits d\'origine locale.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: 'Passer Votre Commande',
      description: 'Sélectionnez vos articles, choisissez votre heure de livraison et passez votre commande en toute sécurité.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Recevoir votre Livraison',
      description: 'Notre chauffeur livrera vos produits frais directement à votre porte.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
  ];

  const driverSteps = [
    {
      title: 'Postuler comme Livreur',
      description: 'Remplissez notre formulaire de candidature et soumettez les documents requis pour rejoindre notre réseau de chauffeurs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Inspection de votre Moto',
      description: 'Complétez une inspection rapide de votre véhicule pour assurer des capacités de livraison fiables.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: 'Commencez à Gagner de L\'argent',
      description: 'Acceptez des demandes de livraison via notre application et commencez à gagner avec des horaires flexibles.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">Comment Ça Marche</h2>
          <p className="section-subtitle">
            Notre processus simple assure une expérience fluide pour les clients et les chauffeurs.
          </p>
        </motion.div>

        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Tab.List className="flex flex-wrap rounded-xl bg-amber-100 bg-opacity-70 p-1 mb-12 max-w-md mx-auto">
              <Tab
                className={({ selected }) =>
                  cn(
                    'w-full rounded-lg py-3 px-6 text-base font-medium leading-5 text-ndugumi-green',
                    'focus:outline-none transition-all duration-300',
                    selected
                      ? 'bg-white shadow'
                      : 'text-ndugumi-green-dark hover:bg-white/[0.12]'
                  )
                }
              >
                Pour les Clients
              </Tab>
              <Tab
                className={({ selected }) =>
                  cn(
                    'w-full rounded-lg py-3 px-6 text-base font-medium leading-5 text-ndugumi-green',
                    'focus:outline-none transition-all duration-300',
                    selected
                      ? 'bg-white shadow'
                      : 'text-ndugumi-green-dark hover:bg-white/[0.12]'
                  )
                }
              >
                Pour les Chauffeurs
              </Tab>
            </Tab.List>
          </motion.div>
          <Tab.Panels>
            <Tab.Panel>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {customerSteps.map((step, index) => (
                  <motion.div key={index} className="relative" variants={fadeInUp}>
                    <div className="card p-8 h-full flex flex-col hover:shadow-xl transition-all duration-300">
                      <div className="relative z-10 mb-6">
                        <div className="flex justify-center items-center w-16 h-16 rounded-full bg-amber-100 text-ndugumi-green">
                          {step.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-ndugumi-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-ndugumi-green-dark">{step.title}</h3>
                      <p className="text-gray-600 flex-grow">{step.description}</p>
                      
                      {index < customerSteps.length - 1 && (
                        <div className="hidden md:block absolute top-14 left-full w-full h-0.5 bg-amber-200 transform -translate-x-8">
                          <div className="absolute right-0 -top-1.5 w-3 h-3 rounded-full bg-ndugumi-green"></div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Tab.Panel>
            
            <Tab.Panel>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto"
              >
                {driverSteps.map((step, index) => (
                  <motion.div key={index} className="relative" variants={fadeInUp}>
                    <div className="card p-8 h-full flex flex-col hover:shadow-xl transition-all duration-300">
                      <div className="relative z-10 mb-6">
                        <div className="flex justify-center items-center w-16 h-16 rounded-full bg-amber-100 text-ndugumi-green">
                          {step.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-ndugumi-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-ndugumi-green-dark">{step.title}</h3>
                      <p className="text-gray-600 flex-grow">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <button 
              onClick={() => setShowAppOptions(!showAppOptions)}
              className="btn-primary inline-flex items-center justify-center"
            >
              Découvrir nos applications
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showAppOptions && (
              <>
                {/* Overlay pour fermer le popover en cliquant ailleurs */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowAppOptions(false)}
                ></div>
                
                {/* Popover avec les options d'applications */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-lg z-50 overflow-hidden transition-all duration-200 ease-in-out">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900">Choisissez une application</h3>
                    <p className="text-sm text-gray-500">Téléchargez l'application qui correspond à vos besoins</p>
                  </div>
                  
                  <div className="p-2">
                    <a 
                      href="https://apps.apple.com/sn/app/ndugumi/id6740814701?l=fr-FR" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg hover:bg-amber-50 transition-colors"
                      onClick={() => setShowAppOptions(false)}
                    >
                      <div className="bg-ndugumi-orange bg-opacity-10 p-3 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ndugumi-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">Ndugumi Client</h4>
                        <p className="text-sm text-gray-500">Pour commander des produits frais</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    
                    <a 
                      href="https://apps.apple.com/sn/app/ndugumi-driver/id6740814740?l=fr-FR" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg hover:bg-green-50 transition-colors"
                      onClick={() => setShowAppOptions(false)}
                    >
                      <div className="bg-ndugumi-green bg-opacity-10 p-3 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ndugumi-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12v-2a2 2 0 00-2-2h-2.5c-.3 0-.6.1-.8.4l-1.8 2.2c-.2.3-.6.4-.9.4H9.5c-.3 0-.6.1-.8.4L7 14.5" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 15a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15h2l1.5-5h9.5l1 5" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">Ndugumi Driver</h4>
                        <p className="text-sm text-gray-500">Pour livrer des commandes</p>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
