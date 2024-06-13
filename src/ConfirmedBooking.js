import React from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
  return (
    <section className="confirmed-booking">
      <div className="container">
        <h2>Thank You! Your Booking is Confirmed.</h2>
        <p>We look forward to seeing you soon!</p>
        <Link to="/">Back to Home</Link> {/* Link to return home */}
      </div>
    </section>
  );
};

export default ConfirmedBooking;
