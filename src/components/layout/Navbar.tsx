import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <span className="flex items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-extrabold tracking-tight text-ndugumi-green font-sans drop-shadow-sm select-none focus:outline-none focus:ring-2 focus:ring-ndugumi-green focus:ring-offset-2 transition-shadow"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            aria-label="Remonter en haut de la page"
          >
            Ndugumi
          </button>
        </span>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md outline-none focus:ring-2 focus:ring-ndugumi-green focus:ring-offset-2 transition-shadow"
          onClick={toggleMobileMenu}
          aria-label="Ouvrir le menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ndugumi-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#features" className="text-gray-700 hover:text-ndugumi-green font-medium transition-colors duration-200 px-2 py-1 rounded-md focus:outline-none focus:bg-ndugumi-green-light focus:text-ndugumi-green">
            Fonctionnalités
          </a>
          <a href="#about" className="text-gray-700 hover:text-ndugumi-green font-medium transition-colors duration-200 px-2 py-1 rounded-md focus:outline-none focus:bg-ndugumi-green-light focus:text-ndugumi-green">
            À propos
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-ndugumi-green font-medium transition-colors duration-200 px-2 py-1 rounded-md focus:outline-none focus:bg-ndugumi-green-light focus:text-ndugumi-green">
            Fonctionnement
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-ndugumi-green font-medium transition-colors duration-200 px-2 py-1 rounded-md focus:outline-none focus:bg-ndugumi-green-light focus:text-ndugumi-green">
            Témoignages
          </a>
          <a href="#contact" className="text-gray-700 hover:text-ndugumi-green font-medium transition-colors duration-200 px-2 py-1 rounded-md focus:outline-none focus:bg-ndugumi-green-light focus:text-ndugumi-green">
            Contact
          </a>
        </nav>
      </div>
      {/* Mobile Navigation */}
      <nav className={`md:hidden absolute top-full left-0 w-full bg-white/95 border-b border-gray-200 shadow-md transform transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}>
        <div className="container py-4 flex flex-col space-y-2 animate-fade-in">
          <a href="#features" onClick={toggleMobileMenu} className="px-4 py-2 text-gray-700 hover:bg-ndugumi-green-light hover:text-ndugumi-green rounded-md transition-all duration-200 focus:outline-none focus:bg-ndugumi-green-light focus:text-ndugumi-green">
            Fonctionnalités
          </a>
          <a href="#about" onClick={toggleMobileMenu} className="px-4 py-2 text-gray-700 hover:bg-ndugumi-green-light hover:text-ndugumi-green rounded-md transition-all duration-200 focus:outline-none focus:bg-ndugumi-green-light focus:text-ndugumi-green">
            À propos
          </a>
          <a href="#how-it-works" onClick={toggleMobileMenu} className="px-4 py-2 text-gray-700 hover:bg-ndugumi-green-light hover:text-ndugumi-green rounded-md transition-all duration-200 focus:outline-none focus:bg-ndugumi-green-light focus:text-ndugumi-green">
            Fonctionnement
          </a>
          <a href="#testimonials" onClick={toggleMobileMenu} className="px-4 py-2 text-gray-700 hover:bg-ndugumi-green-light hover:text-ndugumi-green rounded-md transition-all duration-200 focus:outline-none focus:bg-ndugumi-green-light focus:text-ndugumi-green">
            Témoignages
          </a>
          <a href="#contact" onClick={toggleMobileMenu} className="px-4 py-2 text-gray-700 hover:bg-ndugumi-green-light hover:text-ndugumi-green rounded-md transition-all duration-200 focus:outline-none focus:bg-ndugumi-green-light focus:text-ndugumi-green">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
