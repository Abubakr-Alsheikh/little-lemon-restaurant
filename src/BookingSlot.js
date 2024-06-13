import React from 'react';

const BookingSlot = ({ time }) => {
  return (
    <li className="booking-slot">
      {time} - Available
    </li>
  );
};

export default BookingSlot;