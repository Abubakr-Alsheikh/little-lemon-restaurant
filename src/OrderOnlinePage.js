// OrderOnlinePage.js
import React, { useState } from 'react';

const OrderOnlinePage = () => {
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

  const [order, setOrder] = useState([]);

  const handleAddItem = (newItem) => {
    setOrder((prevOrder) => [...prevOrder, newItem]);
  };

  const handleRemoveItem = (index) => {
    setOrder((prevOrder) => prevOrder.filter((_, i) => i !== index));
  };

  const calculateTotalPrice = () => {
    return order.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0);
  };

  return (
    <section className="order-online-page">
      <div className="container">
        <h2>Order Online</h2>

        <div className="menu-and-order">
          <div className="menu-section">
            <h3>Menu</h3>
            {menuItems.map((categoryItem, index) => (
              <div key={index} className="menu-category">
                <h4>{categoryItem.category}</h4>
                <ul>
                  {categoryItem.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <button onClick={() => handleAddItem(item)}>
                        {item.name} - {item.price}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h3>Your Order</h3>
            {order.length === 0 ? (
              <p>Your order is empty.</p>
            ) : (
              <ul>
                {order.map((orderItem, index) => (
                  <li key={index}>
                    {orderItem.name} - {orderItem.price}
                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                  </li>
                ))}
              </ul>
            )}
            <strong>Total: ${calculateTotalPrice().toFixed(2)}</strong>
          </div>
        </div>

        {/* Add a checkout form or button here */}
      </div>
    </section>
  );
};

export default OrderOnlinePage;