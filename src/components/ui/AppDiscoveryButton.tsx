import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AppSelectionModal from './AppSelectionModal';

interface AppDiscoveryButtonProps {
  className?: string;
}

const AppDiscoveryButton: React.FC<AppDiscoveryButtonProps> = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsModalOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-ndugumi-orange hover:bg-ndugumi-orange-dark text-white py-3 px-6 text-base shadow-md hover:shadow-lg ${className || ''}`}
      >
        <span>Découvrir Nos Applications</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </motion.button>

      <AppSelectionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default AppDiscoveryButton;
