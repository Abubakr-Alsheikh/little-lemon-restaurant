import React from 'react';

const Hero = () => {
  return (
    <section className="hero ">
      <div className="hero-content container">
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus magna nulla.
            Vestibulum mauris nisi, rutrum quis vestibulum non, aliquam eget sem.
            </p>
            <button>Reserve a table</button>
        </div>
        <img src="/hero.jpg" alt="Little Lemon Restaurant" className="hero-image" /> 
      </div>
      {/* Assuming you have a hero image named "hero.jpg" in your public folder */}
    </section>
  );
};

export default Hero;