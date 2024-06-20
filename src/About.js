import React from 'react';
import about from './assest/Mario and Adrian b.jpg'

const About = () => {
  return (
    <section className="about">
      <div className="about-content container">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus magna nulla. 
            Vestibulum mauris nisi, rutrum quis vestibulum non, aliquam eget sem. 
          </p>
        </div>
        <img src={about} />
      </div>
      {/* Optional: Add an image here if desired */}
    </section>
  );
};

export default About;