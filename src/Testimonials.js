import React from "react";
import TestimonialItem from "./TestimonialItem"; // Assuming you create this component

const Testimonials = () => {
  const testimonialsData = [
    {
      rating: 5,
      name: "John Doe",
      quote:
        "Amazing food! The Greek salad was so fresh and the lemon cake was divine. Can't wait to come back!",
    },
    {
      rating: 4,
      name: "Jane Smith",
      quote:
        "The service was excellent and the atmosphere was cozy. Highly recommend the bruschetta!",
    },
    {
      rating: 5,
      name: "Peter Jones",
      quote:
        "Best Italian food I've had in a long time. The pasta was cooked to perfection!",
    },
  ];

  return (
    <section className="testimonials">
        <div className="container">
            <h2>Testimonials</h2>
            <div className="testimonials-grid">
                {testimonialsData.map((testimonial, index) => (
                <TestimonialItem key={index} {...testimonial} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
