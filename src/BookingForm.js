import React, { useState } from 'react';

const BookingForm = ({ formData, handleChange, handleSubmit, availableTimes }) => {

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'grid', maxWidth: '300px', gap: '20px' }}
      aria-label="Table Booking Form" // Overall form label
    >
      <h2>Reserve Your Table</h2>
      <label htmlFor="res-date">Choose date:</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        aria-required="true" // Indicate required field
        aria-invalid={!formData.date} // Indicate if invalid (add validation logic)
      />

      <label htmlFor="res-time">Choose time:</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        aria-required="true"
        aria-invalid={!formData.time}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests:</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        aria-required="true"
        aria-invalid={formData.guests < 1 || formData.guests > 10 }
      />

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your reservation</button>
    </form>
  );
};

export default BookingForm;