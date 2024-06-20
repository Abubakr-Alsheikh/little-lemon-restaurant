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
    setFormIsValid(event.target.form.checkValidity());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="booking-form"
      aria-label="Table Booking Form"
      noValidate
    >
      <h2>Reserve Your Table</h2>
      <p style={{margin:0}}>
        Welcome to our booking page! Please fill out the form below to make a
        reservation.
      </p>
      <div className="form-group">
        {" "}
        {/* Group for date input */}
        <label htmlFor="res-date">Choose date:</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
          aria-required="true"
          aria-invalid={!formData.date}
          aria-label="Choose Date"
        />
      </div>

      <div className="form-group">
        {" "}
        {/* Group for time select */}
        <label htmlFor="res-time">Choose time:</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
          aria-required="true"
          aria-invalid={!formData.time}
          aria-label="Choose Time"
        >
          <option value="">Select a Time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        {" "}
        {/* Group for guests input */}
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleInputChange}
          min="1"
          max="10"
          required
          aria-required="true"
          aria-invalid={formData.guests < 1 || formData.guests > 10}
          aria-label="Number of Guests"
        />
      </div>

      <div className="form-group">
        {" "}
        {/* Group for occasion select */}
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleInputChange}
          aria-label="Select an Occasion"
        >
          <option value="">Select an Occasion (optional)</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <button
        type="submit"
        disabled={!formIsValid}
        className="submit-button"
        aria-label="On Click"
      >
        Make Your reservation
      </button>
    </form>
  );
};

export default BookingForm;
