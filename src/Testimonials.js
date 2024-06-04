import React from 'react';
import TestimonialItem from './TestimonialItem'; // Assuming you create this component

const Testimonials = () => {
  const testimonialsData = [
    // ... Your testimonials data (rating, name, quote)
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialItem key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;