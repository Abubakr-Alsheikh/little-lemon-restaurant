import React from 'react';
import Button from './Button';

const SpecialItem = ({ image, title, description, price }) => {
  return (
    <div className="special-item">
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
        <Button text="Order a delivery" />
      </div>
    </div>
  );
};

export default SpecialItem;