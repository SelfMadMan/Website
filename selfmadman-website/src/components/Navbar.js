import React, { useState, useEffect } from 'react';
import './Navbar.css';
import './Root.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleTouchMove = (e) => {
      if (isOpen) {
        e.preventDefault();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
      window.removeEventListener('touchmove', handleTouchMove);
    }

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false); // Close the mobile menu

  // Ajouter une classe basée sur l'état isOpen
  const navbarClass = `navbar ${isOpen ? 'fixed' : 'sticky'} ${isOpen || isScrolled ? 'nav-bg-dark-blue' : ''}`;
  return (
    <nav className={`navbar ${isOpen || isScrolled ? 'nav-bg-dark-blue' : ''}`}>
      <div className={`nav-items ${isOpen && 'open'}`}>
        <div className='navbar-content'>
            <a href="#presentation" onClick={handleLinkClick}>Presentation</a>
            <a href="#gameplay" onClick={handleLinkClick}>Gameplay</a>
            <a href="#newsletter" onClick={handleLinkClick}>Newsletter</a>
        </div>  
        <button className='cta-btn'>Get Notified</button>
      </div>
      
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? 'bi bi-x-lg' : 'bi bi-list'}></i>
      </button>
    </nav>
  );
};

export default Navbar;
