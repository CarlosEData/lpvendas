/**
 * Header/Navbar Component
 * Design: Minimalismo Corporativo Contemporâneo
 * - Navegação limpa e minimalista
 * - Responsiva para mobile
 * - CTA principal em destaque
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    // Atualizar altura do header
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const navLinks = [
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Processo', href: '#processo' },
    { label: 'Benefícios', href: '#precos' },
    { label: 'Depoimentos', href: '#clientes' },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCtaClick = () => {
    scrollToSection('#precos');
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 ${
        scrolled ? 'shadow-md' : ''
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo com padding adequado para mobile */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center focus:outline-none pl-3 lg:pl-0"
          >
            <img
              src="/img/logobx.png"
              alt="Logo BX - Planejamento Estratégico"
              className="h-10 w-auto scale-250 hover:opacity-80 transition-opacity"
            />
          </button>

          {/* Desktop Navigation - Estilo mais sutil */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="px-5 py-2.5 text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm rounded-lg hover:bg-gray-50 focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <button 
              onClick={handleCtaClick}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-none"
            >
              Adquirir Planejamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Estilo mais limpo */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 animate-slide-down">
            <nav className="px-4 py-6 space-y-1 h-[calc(100vh-4rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-colors border-b border-gray-100 last:border-0 focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
              
              <div className="pt-6 mt-6 border-t border-gray-200 space-y-4">
                <button 
                  onClick={() => {
                    handleCtaClick();
                    setIsOpen(false);
                  }}
                  className="block w-full px-4 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-600 transition-colors shadow-md focus:outline-none"
                >
                  Adquirir Planejamento
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}