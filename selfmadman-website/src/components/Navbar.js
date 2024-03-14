import React, { useState } from 'react';
import './Navbar.css';
import './Root.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
    <div className={`nav-items ${isOpen && 'open'}`}>
        <div className='navbar-content'>
            <a href="#">Presentation</a>
            <a href="#">Gameplay</a>
            <a href="#">Newsletter</a>
        </div>  
        <button href="" className='cta-btn'>Get Notified</button>
    </div>

      
      
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? 'bi bi-x-lg' : 'bi bi-list'}></i>
      </button>
    </nav>
  );
};

export default Navbar;
