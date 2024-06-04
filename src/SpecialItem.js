import React from 'react';

const SpecialItem = ({ image, title, description, price }) => {
  return (
    <div className="special-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="price">{price}</span>
      <button>Order a delivery</button>
    </div>
  );
};

export default SpecialItem;