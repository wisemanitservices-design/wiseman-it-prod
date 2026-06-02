/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Shield, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onScrollToSection, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', id: 'hero' },
    { label: 'Solutions', id: 'services' },
    { label: 'Audit Tool', id: 'audit' },
    { label: 'Intel Blog', id: 'blog' },
    { label: 'Get in Touch', id: 'contact' },
  ];

  return (
    <header
      id="wiseman-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-mars-black/95 backdrop-blur-md border-mars-border py-3 shadow-lg shadow-black/40'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Header */}
          <button
            id="brand-logo-btn"
            onClick={() => onScrollToSection('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="text-left">
              <span className="block font-sans font-bold text-lg text-white leading-none tracking-tight group-hover:text-mars-red transition-colors">
                WISEMAN
              </span>
              <span className="block font-mono text-[10px] text-mars-gold tracking-widest uppercase mt-0.5 font-bold">
                IT SERVICES
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onScrollToSection(item.id)}
                className={`font-sans text-sm font-semibold transition-colors duration-200 cursor-pointer relative py-1 ${
                  activeSection === item.id || (activeSection === '' && item.id === 'hero')
                    ? 'text-mars-gold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                {(activeSection === item.id || (activeSection === '' && item.id === 'hero')) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-mars-red rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action CTA Header - High Visibility Mars Red */}
          <div className="hidden md:flex items-center">
            <button
              id="header-cta-btn"
              onClick={() => onScrollToSection('contact')}
              className="group flex items-center gap-2 bg-gradient-to-r from-mars-red to-orange-600 hover:from-mars-red/90 hover:to-orange-500 text-white font-sans text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md shadow-mars-red/20 cursor-pointer hover:scale-102 border border-mars-red/30"
            >
              Book Audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div id="mobile-drawer" className="md:hidden bg-mars-black border-b border-mars-border px-4 pt-2 pb-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onScrollToSection(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left font-sans text-base font-bold py-2.5 px-3 rounded-lg cursor-pointer ${
                activeSection === item.id
                  ? 'bg-mars-dark text-mars-gold border-l-2 border-mars-red'
                  : 'text-slate-400 hover:bg-mars-dark hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 px-3">
            <button
              id="mobile-header-cta-btn"
              onClick={() => {
                onScrollToSection('contact');
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-mars-red to-orange-600 text-white font-sans font-bold py-3 px-4 rounded-lg cursor-pointer hover:from-mars-red/90 hover:to-orange-500 transition-all duration-300 border border-mars-red/30 shadow-md shadow-mars-red/20"
            >
              Schedule Free 15-Min Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
