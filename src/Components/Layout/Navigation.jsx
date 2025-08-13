import { useState, useEffect } from 'react';
import MobileNavigation from './MobileNavigation';
import { CgMenuRight } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import BaseButton from '../ui/Buttons/BaseButton';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Set initial state on mount, then keep it updated on scroll
  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 10);
    update(); // 👈 handles refresh-at-offset and hash loads
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  // Close mobile menu when resizing up
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, [isOpen]);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Case Study', href: '#case-study' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-2 transition duration-300 ease-in-out ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent shadow-md shadow-gray-400'
      }`}
    >
      <div className="px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold font-serif">
            <button
              onClick={() => scrollToSection('#hero')}
              className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
            >
              <span className={`font-sans text-3xl ${isScrolled ? 'text-sky-800' : 'text-white'}`}>SORA</span>
            </button>
          </div>

          {/* Links */}
          <nav className="space-x-6 hidden md:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`border-b border-transparent hover:border-current cursor-pointer transition duration-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div>
            <BaseButton
              className="hidden md:flex py-2"
              func={() => scrollToSection('#contact')}
            >
              <span>Get Started</span>
            </BaseButton>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center rounded-md p-2 hover:bg-gray-100"
            >
              {isOpen ? (
                <VscChromeClose className="size-6 text-sky-900" />
              ) : (
                <CgMenuRight className="size-6 text-sky-900" />
              )}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <MobileNavigation
            navItems={navItems}
            scrollToSection={scrollToSection}
          />
        )}
      </div>
    </header>
  );
};

export default Navigation;
