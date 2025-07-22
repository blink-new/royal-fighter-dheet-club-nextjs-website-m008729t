import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Navbar animation
    gsap.fromTo('.navbar', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
    );
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-md py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold gradient-text">
          Royal Fighter
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-red-500 transition-colors magnetic"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-red-500 transition-colors magnetic"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('achievements')}
            className="text-white hover:text-red-500 transition-colors magnetic"
          >
            Achievements
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-white hover:text-red-500 transition-colors magnetic"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-red-500 transition-colors magnetic"
          >
            Contact
          </button>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block btn-primary px-6 py-2 rounded-full text-white font-semibold magnetic"
        >
          Join Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden fixed top-0 right-0 h-full w-64 glass backdrop-blur-md p-6 ${
        isMobileMenuOpen ? 'open' : ''
      }`}>
        <div className="flex flex-col space-y-6 mt-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-white hover:text-red-500 transition-colors text-left"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-red-500 transition-colors text-left"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('achievements')}
            className="text-white hover:text-red-500 transition-colors text-left"
          >
            Achievements
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-white hover:text-red-500 transition-colors text-left"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-red-500 transition-colors text-left"
          >
            Contact
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary px-6 py-2 rounded-full text-white font-semibold mt-4"
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;