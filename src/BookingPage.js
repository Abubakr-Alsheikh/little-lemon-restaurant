import React, { useState } from "react";
import BookingForm from "./BookingForm"; // Assuming BookingForm is in the same directory
import BookingSlot from "./BookingSlot";
import { useNavigate } from "react-router-dom";

const BookingPage = ({ availableTimes, dispatchTimes, bookings, submitForm }) => {
  const [bookingData, setBookingData] = useState({
    date: '', // new Date().toISOString().slice(0, 10)
    time: availableTimes[0] || "17:00",
    guests: 1,
    occasion: "Birthday",
  });

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: value,
    });

    if (name === "date") {
      // Fetch and update available times when the date changes
      const selectedDate = new Date(value);
      dispatchTimes({ type: "UPDATE_TIMES", payload: selectedDate });
    }
  };

  const navigate = useNavigate(); // Now useNavigate is correctly used

  const handleSubmit = (e) => {
    e.preventDefault();

    const isBooked = bookings.some(
      (booking) => booking.date === bookingData.date && booking.time === bookingData.time
    );

    if (isBooked) {
      alert('Sorry, this time slot is already booked.');
      return;
    }

    submitForm(bookingData);
    navigate('/confirmed');
  };

  return (
    <section className="booking-page">
      <div className="container">
        {/* Add introductory text or content before the form here */}
        <BookingForm
          formData={bookingData} // Pass state as props
          handleChange={handleBookingChange} // Pass handler as props
          handleSubmit={handleSubmit}
          availableTimes={availableTimes}
        />
        {/* Add any content after the form here */}
        <h3>Available Time Slots for {bookingData.date}:</h3>
        <ul className="booking-slots">
          {availableTimes.map((time) => (
            <BookingSlot
              key={time}
              time={time}
              isBooked={bookings.some(
                (booking) => booking.date === bookingData.date && booking.time === time
              )}
            />
          ))}
        </ul>
        <h2>Booked Times:</h2> 
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Occasion</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.guests}</td>
                <td>{booking.occasion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BookingPage;
