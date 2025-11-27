'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary-blue focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      <header className="bg-navy bg-[#0D1B2A] h-[80px] flex items-center w-full sticky top-0 z-40 shadow-lg">
        <div className="container max-w-[1100px] mx-auto flex items-center justify-between px-6 md:px-5">
          <a href="#home" className="font-semibold text-lg text-white whitespace-nowrap hover:opacity-80 transition">
            Complete International Tax & Accounting Advisory
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8" aria-label="Main navigation">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className={`text-white font-medium hover:opacity-80 transition text-base ${
                activeSection === 'home' ? 'underline decoration-2 underline-offset-4' : ''
              }`}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, '#services')}
              className={`text-white font-medium hover:opacity-80 transition text-base ${
                activeSection === 'services' ? 'underline decoration-2 underline-offset-4' : ''
              }`}
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, '#about')}
              className={`text-white font-medium hover:opacity-80 transition text-base ${
                activeSection === 'about' ? 'underline decoration-2 underline-offset-4' : ''
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className={`text-white font-medium hover:opacity-80 transition text-base ${
                activeSection === 'contact' ? 'underline decoration-2 underline-offset-4' : ''
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 focus:ring-offset-navy rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden absolute top-[80px] left-0 right-0 bg-navy bg-[#0D1B2A] shadow-lg"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, '#home')}
                className="text-white font-medium hover:opacity-80 transition text-base py-2"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, '#services')}
                className="text-white font-medium hover:opacity-80 transition text-base py-2"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, '#about')}
                className="text-white font-medium hover:opacity-80 transition text-base py-2"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="text-white font-medium hover:opacity-80 transition text-base py-2"
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

