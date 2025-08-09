import { useState, useEffect } from 'react';
import MobileNavigation from './MobileNavigation';
import blueLogo from '../../assets/SAMA-blue-text.png';
import whiteLogo from '../../assets/SAMA-white-text.png';
import { CgMenuRight } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import BaseButton from '../ui/Buttons/BaseButton';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if(element) {
      element.scrollIntoView({ behavior: 'smooth'});
      setIsOpen(false);
    }
    else {
      setIsOpen(false);
    }
  } 

   useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '#hero'},
    { name: 'About', href: '#about'},
    { name: 'Services', href: '#services'},
    { name: 'Case Study', href: '#case-study'},
    { name: 'Contact', href: '#contact'},
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-2 transition duration-500 ease-in-out ${
      isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-transparent shadow-md shadow-gray-400'
    }`}>
      <div className="px-4 max-w-7xl mx-auto z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold font-serif text-inherit">
            <button className="cursor-pointer hover:scale-105 translation duration-300 ease-in-out" onClick={() => scrollToSection('#hero')}>
              <img 
                src={isScrolled ? blueLogo : whiteLogo} 
                alt="SAMA Equity" 
                className="max-w-28 transition duration-100 ease-in-out"
              />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-x-6 hidden md:flex">
            {navItems.map((item) => (
              <button
                key={item.name} 
                onClick={() => scrollToSection(item.href)}
                className={`border-b border-transparent hover:border-black cursor-pointer translation duration-300 ease-in-out ${
                isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div>
            <BaseButton className="hidden md:flex py-2"  func={() => scrollToSection('#contact')}>
              <span>Get Started</span>
            </BaseButton>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-center items-center rounded-md p-2 hover:cursor-pointer hover:bg-gray-100">
                {isOpen ? <VscChromeClose className="size-6 text-sky-900 rounded-md scale-105" />  : <CgMenuRight className="size-6 text-sky-900" />}
                <span className="hidden">Menu</span>
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
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
