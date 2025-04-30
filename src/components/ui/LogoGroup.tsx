
import { motion } from 'framer-motion';

interface LogoGroupProps {
  className?: string;
}

export const LogoGroup = ({ className }: LogoGroupProps) => {
  return (
    <motion.div 
      className={`flex flex-col md:flex-row items-center gap-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.img 
          src="/lovable-uploads/4b4ac2f3-5c87-4e4a-a3c3-64382b8bf7fd.png"
          alt="Ndugumi Logo" 
          className="h-16 md:h-20"
          initial={{ rotate: -5 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.img 
          src="/lovable-uploads/80768ded-2399-4b06-9067-80a43f9296e0.png"
          alt="Ndugumi Drive Logo" 
          className="h-16 md:h-20"
          initial={{ rotate: 5 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LogoGroup;
