import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
// import { initialTimes } from "./App";
const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

test("renders the BookingForm heading", () => {
  render(
    <BookingForm
      availableTimes={initialTimes}
      dispatchTimes={() => {}}
      // Provide initial form data
      formData={{
        date: "", // Or a default date if needed
        time: initialTimes[0],
        guests: 1,
        occasion: "Birthday",
      }}
      handleSubmit={() => {}} // Provide an empty function for onFormChange
    />
  );
  const headingElement = screen.getByText("Reserve Your Table");
  expect(headingElement).toBeInTheDocument();
});

test("submits the booking form with user input", () => {
  // Mock handleSubmit function
  const mockSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={initialTimes}
      dispatchTimes={() => {}}
      // Provide initial form data
      formData={{
        date: "", // Or a default date if needed
        time: initialTimes[0],
        guests: 1,
        occasion: "Birthday",
      }}
      handleSubmit={mockSubmit} // Pass the mock function as the onSubmit prop
    />
  );

  // Simulate user input for each field (example):
  const dateInput = screen.getByLabelText(/Choose date:/i);
  fireEvent.change(dateInput, { target: { value: "2023-12-24" } });

  const timeSelect = screen.getByLabelText(/Choose time:/i);
  fireEvent.change(timeSelect, { target: { value: "19:00" } });

  const guestsInput = screen.getByLabelText(/Number of guests:/i);
  fireEvent.change(guestsInput, { target: { value: "4" } });

  const occasionSelect = screen.getByLabelText(/Occasion:/i);
  fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

  // Find and submit the form
  const submitButton = screen.getByRole("button", {
    name: /Make Your reservation/i,
  });
  fireEvent.click(submitButton);

  // Assertions
  expect(mockSubmit).toHaveBeenCalled(); // Check if onSubmit was called
  // You can add more assertions to check if mockSubmit was called with specific data:
  // expect(mockSubmit).toHaveBeenCalledWith({ date: '2023-12-24', time: '19:00', guests: '4', occasion: 'Anniversary' });
});
