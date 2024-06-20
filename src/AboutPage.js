// AboutPage.js
import React from 'react';
import about from './assest/Mario and Adrian b.jpg'


const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="container">
        <h2>About Us</h2>
        <div className='about-content'>
          <img src={about} alt='about' />
          <div>
            <h3>Little Lemon</h3>
            <h4>Chicago</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              faucibus magna nulla. Vestibulum mauris nisi, rutrum quis
              vestibulum non, aliquam eget sem. Maecenas imperdiet lacinia velit,
              eget varius odio vestibulum a.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;