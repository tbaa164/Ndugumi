import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, MessageCircle } from 'lucide-react';
import AppSelectionModal from './AppSelectionModal';

interface CallToActionProps {
  variant?: 'primary' | 'secondary' | 'contact';
  href: string;
  children: React.ReactNode;
  className?: string;
  withIcon?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({
  variant = 'primary',
  href,
  children,
  className,
  withIcon = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === '#') {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variant === 'primary'
            ? 'bg-ndugumi-orange hover:bg-ndugumi-orange-dark text-white'
            : variant === 'contact'
            ? 'bg-gradient-to-r from-ndugumi-green to-ndugumi-green-dark text-white hover:shadow-lg hover:translate-y-[-2px]'
            : 'bg-white hover:bg-gray-100 text-ndugumi-green-dark border border-ndugumi-green hover:border-ndugumi-green-dark',
          'py-3 px-6 text-base shadow-md',
          className
        )}
      >
        {variant === 'contact' && (
          <MessageCircle className={`mr-2 h-5 w-5 transition-transform duration-300 ${isHovered ? 'animate-pulse' : ''}`} />
        )}
        <span className={variant === 'contact' ? 'font-semibold' : ''}>{children}</span>
        {withIcon && <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />}
      </a>

      <AppSelectionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CallToAction;
