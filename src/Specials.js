import React from "react";
import SpecialItem from "./SpecialItem"; // Assuming you create this component

const Specials = () => {
  const specialsData = [
    {
      image: "/greek-salad.jpg",
      title: "Greek Salad",
      description:
        "Refreshing salad with feta cheese, olives, and a lemon vinaigrette.",
      price: "$12.99",
    },
    {
      image: "/lemon-cake.jpg",
      title: "Lemon Cake",
      description: "Tangy and sweet cake with a light and fluffy texture.",
      price: "$8.99",
    },
    {
      image: "bruschetta.jpg",
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
                <button>Online Menu</button>
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
