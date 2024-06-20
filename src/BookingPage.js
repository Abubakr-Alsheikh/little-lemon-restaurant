import React, { useState } from "react";
import BookingForm from "./BookingForm";
import BookingSlot from "./BookingSlot";
import { useNavigate } from "react-router-dom";

const BookingPage = ({
  availableTimes,
  dispatchTimes,
  bookings,
  submitForm,
}) => {
  const [bookingData, setBookingData] = useState({
    date: "",
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
      const selectedDate = new Date(value);
      dispatchTimes({ type: "UPDATE_TIMES", payload: selectedDate });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const isBooked = bookings.some(
      (booking) =>
        booking.date === bookingData.date && booking.time === bookingData.time
    );

    if (isBooked) {
      alert("Sorry, this time slot is already booked.");
      return;
    }

    submitForm(bookingData);
    navigate("/confirmed");
  };

  // Filter availableTimes to remove booked slots
  const filteredTimes = availableTimes.filter(
    (time) =>
      !bookings.some(
        (booking) => booking.date === bookingData.date && booking.time === time
      )
  );

  return (
    <section className="booking-page">
      <div className="container">
        <BookingForm
          formData={bookingData}
          handleChange={handleBookingChange}
          handleSubmit={handleSubmit}
          availableTimes={filteredTimes} // Pass filtered times to the form
        />

        <div className="booking-info">
          <div className="available-slots">
            <h3>Available Time Slots for {bookingData.date}:</h3>
            <ul className="booking-slots">
              {filteredTimes.map((time) => ( // Use filteredTimes here
                <li key={time}>
                  <BookingSlot time={time} />
                </li>
              ))}
            </ul>
          </div>

          <div className="booked-times">
            <h3>Booked Times:</h3>
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
        </div>
      </div>
    </section>
  );
};

export default BookingPage;