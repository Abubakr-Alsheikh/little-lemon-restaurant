import React from 'react';
import SpecialItem from './SpecialItem'; // Assuming you create this component

const Specials = () => {
  const specialsData = [
    // ... Your specials data (image, title, description, price)
  ];

  return (
    <section className="specials">
      <h2>This Week's Specials!</h2>
      <div className="specials-grid">
        {specialsData.map((special, index) => (
          <SpecialItem key={index} {...special} />
        ))}
      </div>
      <button>Online Menu</button>
    </section>
  );
};

export default Specials;