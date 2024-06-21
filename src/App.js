import React, { useReducer, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import BookingPage from "./BookingPage";
import Main from "./Main";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import OrderOnlinePage from "./OrderOnlinePage";
import LoginPage from "./LoginPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchAPI, submitAPI } from "./api"; // Import fetchAPI
import ConfirmedBooking from "./ConfirmedBooking";

// Reducer function for available times
export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Here you'll implement logic to filter times based on the date
      const selectedDate = action.payload;
      const available = fetchAPI(new Date(selectedDate));
      return { ...state, availableTimes: available };
    case "MAKE_BOOKING":
      return {
        ...state,
        // Make sure bookings is an array even if it's not in the initial state:
        bookings: [...(state.bookings || []), action.payload],
      };
    case "LOAD_BOOKINGS":
      // Update the bookings state with the loaded data
      return { ...state, bookings: action.payload };
    default:
      return state;
  }
};

const storedBookings = localStorage.getItem("bookings");
const initialBookings = storedBookings ? JSON.parse(storedBookings) : [];

const initialState = {
  availableTimes: [], // Start empty, fetch on component mount
  bookings: initialBookings,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const today = new Date();
    dispatch({ type: "UPDATE_TIMES", payload: today });
  }, []);

  // In your App component or a custom hook
  useEffect(() => {
    // Store bookings in local storage whenever they change
    localStorage.setItem("bookings", JSON.stringify(state.bookings));
  }, [state.bookings]);

  // Load bookings from local storage when the component mounts
  useEffect(() => {
    const storedBookings = localStorage.getItem("bookings");
    if (storedBookings) {
      dispatch({ type: "LOAD_BOOKINGS", payload: JSON.parse(storedBookings) });
    }
  }, [dispatch]);

  const submitForm = (formData) => {
    const success = submitAPI(formData); // Call the API function

    if (success) {
      console.log("API submission successful:", formData);
      dispatch({ type: "MAKE_BOOKING", payload: formData });
    } else {
      // Handle API error (e.g., display an error message)
      console.error("API submission failed!");
    }
  };

  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/reservation"
            element={
              <BookingPage
                availableTimes={state.availableTimes}
                dispatchTimes={dispatch}
                bookings={state.bookings}
                submitForm={submitForm} // Pass submitForm to BookingPage
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<OrderOnlinePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
