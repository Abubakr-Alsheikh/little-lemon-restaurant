// MenuPage.js
import React from 'react';

const MenuPage = () => {
  const menuItems = [
    // Appetizers
    {
      category: 'Appetizers',
      items: [
        { name: 'Bruschetta', description: 'Grilled bread topped with fresh tomatoes, basil, and balsamic glaze', price: '$9.99' },
        { name: 'Calamari', description: 'Crispy fried calamari served with marinara sauce', price: '$12.99' },
        { name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic vinegar', price: '$10.99' },
      ],
    },
    // Main Courses
    {
      category: 'Main Courses',
      items: [
        { name: 'Spaghetti Carbonara', description: 'Classic pasta dish with pancetta, eggs, and Parmesan cheese', price: '$16.99' },
        { name: 'Grilled Salmon', description: 'Fresh salmon grilled to perfection, served with your choice of side', price: '$19.99' },
        { name: 'Chicken Parmesan', description: 'Breaded chicken breast topped with marinara sauce and mozzarella cheese', price: '$17.99' },
        { name: 'Steak Frites', description: 'Grilled sirloin steak served with crispy French fries', price: '$24.99' },
      ],
    },
    // Desserts
    {
      category: 'Desserts',
      items: [
        { name: 'Tiramisu', description: 'Layers of coffee-soaked ladyfingers and mascarpone cream', price: '$8.99' },
        { name: 'Chocolate Lava Cake', description: 'Molten chocolate cake with a gooey center, served with vanilla ice cream', price: '$9.99' },
        { name: 'Cheesecake', description: 'Classic New York-style cheesecake with a graham cracker crust', price: '$7.99' },
      ],
    },
  ];

  return (
    <section className="menu-page">
      <div className="container">
        <h2>Our Menu</h2>

        {menuItems.map((categoryItem, index) => (
          <div key={index} className='menu-category'>
            <h3>{categoryItem.category}</h3>
            <ul>
              {categoryItem.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <h4>{item.name} <span className="price">{item.price}</span></h4>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
};

export default MenuPage;