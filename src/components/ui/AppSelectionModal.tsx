import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AppSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppSelectionModal: React.FC<AppSelectionModalProps> = ({ isOpen, onClose }) => {
  // Liens des applications
  const appLinks = {
    client: 'https://apps.apple.com/sn/app/ndugumi/id6740814701?l=fr-FR',
    driver: 'https://apps.apple.com/sn/app/ndugumi-driver/id6740814740?l=fr-FR'
  };

  // Empêcher la propagation des clics à l'intérieur du modal
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden"
            onClick={handleModalClick}
          >
            {/* En-tête du modal */}
            <div className="relative bg-ndugumi-green-light p-6">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-700 hover:text-ndugumi-green transition-colors"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold text-ndugumi-green text-center">
                Choisissez votre application
              </h2>
            </div>

            {/* Contenu du modal */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Carte Ndugumi Client */}
              <a 
                href={appLinks.client} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white border-2 border-gray-100 rounded-xl p-6 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:shadow-xl group-hover:border-ndugumi-green-light">
                  <div className="w-24 h-24 bg-ndugumi-green-light rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ndugumi-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-ndugumi-green-dark mb-2">Ndugumi</h3>
                  <p className="text-gray-600 mb-6">Pour commander des produits frais</p>
                  <div className="mt-auto">
                    <img 
                      src="/assets/app-store-badge.svg" 
                      alt="Télécharger sur l'App Store" 
                      className="h-10 w-auto mx-auto"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
                      }}
                    />
                  </div>
                </div>
              </a>

              {/* Carte Ndugumi Driver */}
              <a 
                href={appLinks.driver} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-white border-2 border-gray-100 rounded-xl p-6 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:shadow-xl group-hover:border-ndugumi-green-light">
                  <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ndugumi-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-ndugumi-green-dark mb-2">Ndugumi Driver</h3>
                  <p className="text-gray-600 mb-6">Pour devenir livreur</p>
                  <div className="mt-auto">
                    <img 
                      src="/assets/app-store-badge.svg" 
                      alt="Télécharger sur l'App Store" 
                      className="h-10 w-auto mx-auto"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg";
                      }}
                    />
                  </div>
                </div>
              </a>
            </div>

            {/* Pied du modal */}
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-500">
                Applications disponibles uniquement sur l'App Store
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppSelectionModal;
