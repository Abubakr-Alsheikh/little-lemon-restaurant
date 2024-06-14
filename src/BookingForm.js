import React, { useState } from "react";

const BookingForm = ({
  formData,
  handleChange,
  handleSubmit,
  availableTimes,
}) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const handleInputChange = (event) => {
    handleChange(event);

    // Basic form validation - you can enhance this
    setFormIsValid(event.target.form.checkValidity());
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
      aria-label="Table Booking Form"
      noValidate // Disable default browser validation for more control
    >
      <h2>Reserve Your Table</h2>

      <label htmlFor="res-date">Choose date:</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        required // HTML5 validation: Required field
        aria-required="true"
        aria-invalid={!formData.date}
        aria-label="Choose Date" // Added aria-label 
      />

      <label htmlFor="res-time">Choose time:</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleInputChange}
        required
        aria-required="true"
        aria-invalid={!formData.time}
        aria-label="Choose Time" // Added aria-label 
      >
        <option value="">Select a Time</option> {/* Default empty option */}
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests:</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleInputChange}
        min="1" // HTML5 validation: Minimum value
        max="10" // HTML5 validation: Maximum value
        required
        aria-required="true"
        aria-invalid={formData.guests < 1 || formData.guests > 10}
        aria-label="Number of Guests" // Added aria-label 
      />

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleInputChange}
        aria-label="Select an Occasion" // Added aria-label 
      >
        <option value="">Select an Occasion (optional)</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" disabled={!formIsValid} aria-label="On Click">
        Make Your reservation
      </button>
    </form>
  );
};

export default BookingForm;