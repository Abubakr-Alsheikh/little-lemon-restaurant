import React from "react";
import SpecialItem from "./SpecialItem"; // Assuming you create this component
import food1 from './assest/food-1.jpg'
import food2 from './assest/food-2.jpg'
import food3 from './assest/food-3.jpg'
import Button from "./Button";

const Specials = () => {
  const specialsData = [
    {
      image: food1,
      title: "Greek Salad",
      description:
        "Refreshing salad with feta cheese, olives, and a lemon vinaigrette.",
      price: "$12.99",
    },
    {
      image: food2,
      title: "Lemon Cake",
      description: "Tangy and sweet cake with a light and fluffy texture.",
      price: "$8.99",
    },
    {
      image: food3,
      title: "Bruschetta",
      description:
        "Toasted bread topped with fresh tomatoes, basil, and balsamic glaze.",
      price: "$9.99",
    },
  ];

  return (
    <section className="specials">
        <div className="container">
            <div>
                <h2>This Week's Specials!</h2>
                <Button text="Online Menu" />
            </div>
            <div className="specials-grid">
                {specialsData.map((special, index) => (
                <SpecialItem key={index} {...special} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Specials;
