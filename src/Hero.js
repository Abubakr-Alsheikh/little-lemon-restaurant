import React from 'react';
import hero from './assest/hero.jpg'
import Button from './Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content container">
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus magna nulla.
            Vestibulum mauris nisi, rutrum quis vestibulum non, aliquam eget sem.
            </p>
            <Link to="/reservation">
              <Button text="Reserve a table" />
            </Link>
        </div>
        <img src={hero} alt="Little Lemon Restaurant" className="hero-image" /> 
      </div>
      {/* Assuming you have a hero image named "hero.jpg" in your public folder */}
    </section>
  );
};

export default Hero;