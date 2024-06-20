// Header.js
import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import logo from './assest/logo.jpg';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Menu', url: '/menu' },
    { text: 'Reservation', url: '/reservation' },
    { text: 'Order Online', url: '/order' },
    { text: 'Login', url: '/login' },
  ];

  return (
    <header className="container">
      <Link to="/">
        <img src={logo} width={164} alt="Little Lemon Logo" />
      </Link>
      <nav className="nav">
        <a className="nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <ul className={isNavOpen ? 'nav-links show' : 'nav-links'}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.url} onClick={() => setIsNavOpen(false)}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;