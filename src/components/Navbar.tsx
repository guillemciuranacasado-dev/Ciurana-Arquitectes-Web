import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, TranslationSet } from '../types';

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  translations: TranslationSet;
}

export default function Navbar({ currentLang, setLang, translations }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'projects', label: translations.navProjects },
    { id: 'story', label: translations.navStory },
    { id: 'philosophy', label: translations.navPhilosophy },
    { id: 'contact', label: translations.navContact },
  ];

  return (
    <>
      <motion.nav
        id="navbar-main"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group text-left focus:outline-none"
          >
            <span className="font-serif text-lg md:text-xl tracking-[0.2em] text-white uppercase font-medium transition-all duration-300 group-hover:text-[#C5A059]">
              Ciurana
            </span>
            <span className="block text-[8px] md:text-[9px] tracking-[0.35em] text-[#C5A059] uppercase mt-0.5 group-hover:text-white transition-all duration-300 font-semibold">
              Arquitectes & Constructors
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-sans text-xs tracking-widest text-gray-400 hover:text-[#C5A059] uppercase transition-colors duration-300 relative py-1 focus:outline-none group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Language Selector */}
            <div id="language-switcher" className="flex items-center space-x-2 border-l border-white/10 pl-8">
              <Globe className="w-3.5 h-3.5 text-gray-500" />
              <button
                id="lang-btn-ca"
                onClick={() => setLang('ca')}
                className={`text-xs tracking-widest uppercase transition-all duration-300 focus:outline-none ${
                  currentLang === 'ca' ? 'text-[#C5A059] font-semibold' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                CAT
              </button>
              <span className="text-gray-700 text-xs">/</span>
              <button
                id="lang-btn-es"
                onClick={() => setLang('es')}
                className={`text-xs tracking-widest uppercase transition-all duration-300 focus:outline-none ${
                  currentLang === 'es' ? 'text-[#C5A059] font-semibold' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                ESP
              </button>
            </div>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              id="mobile-lang-btn"
              onClick={() => setLang(currentLang === 'ca' ? 'es' : 'ca')}
              className="text-xs tracking-widest text-[#C5A059] uppercase px-2 py-1 border border-[#C5A059]/20 rounded bg-black/30"
            >
              {currentLang === 'ca' ? 'ESP' : 'CAT'}
            </button>
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(true)}
              className="text-white hover:text-[#C5A059] focus:outline-none p-1"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
              <div>
                <span className="font-serif text-lg tracking-[0.2em] text-white uppercase font-medium">
                  Ciurana
                </span>
                <span className="block text-[8px] tracking-[0.35em] text-[#C5A059] uppercase mt-0.5 font-semibold">
                  Arquitectes & Constructors
                </span>
              </div>
              <button
                id="mobile-menu-close"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#C5A059] focus:outline-none p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col items-center justify-center space-y-8 flex-grow">
              {navItems.map((item, index) => (
                <motion.button
                  id={`mobile-nav-item-${item.id}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-serif text-2xl tracking-[0.15em] text-gray-300 hover:text-[#C5A059] uppercase focus:outline-none"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Footer with languages */}
            <div className="py-12 border-t border-white/10 flex flex-col items-center space-y-4 bg-zinc-950">
              <div className="flex items-center space-x-6">
                <button
                  id="mobile-lang-ca"
                  onClick={() => {
                    setLang('ca');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm tracking-widest uppercase focus:outline-none ${
                    currentLang === 'ca' ? 'text-[#C5A059] font-bold' : 'text-gray-500'
                  }`}
                >
                  Català
                </button>
                <span className="text-gray-700">|</span>
                <button
                  id="mobile-lang-es"
                  onClick={() => {
                    setLang('es');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm tracking-widest uppercase focus:outline-none ${
                    currentLang === 'es' ? 'text-[#C5A059] font-bold' : 'text-gray-500'
                  }`}
                >
                  Castellano
                </button>
              </div>
              <span className="text-[10px] tracking-widest text-gray-600 uppercase">
                Valls · Móra la Nova · Tivissa
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
