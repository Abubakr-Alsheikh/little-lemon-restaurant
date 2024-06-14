import React, { act } from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
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

// test("submits the booking form with user input", () => {
//   // Mock handleSubmit function
//   const mockSubmit = jest.fn();

//   render(
//     <BookingForm
//       availableTimes={initialTimes}
//       dispatchTimes={() => {}}
//       // Provide initial form data
//       formData={{
//         date: "", // Or a default date if needed
//         time: initialTimes[0],
//         guests: 1,
//         occasion: "Birthday",
//       }}
//       handleSubmit={mockSubmit} // Pass the mock function as the onSubmit prop
//     />
//   );

//   // Simulate user input for each field (example):
//   const dateInput = screen.getByLabelText(/Choose date:/i);
//   fireEvent.change(dateInput, { target: { value: "2023-12-24" } });

//   const timeSelect = screen.getByLabelText(/Choose time:/i);
//   fireEvent.change(timeSelect, { target: { value: "19:00" } });

//   const guestsInput = screen.getByLabelText(/Number of guests:/i);
//   fireEvent.change(guestsInput, { target: { value: "4" } });

//   const occasionSelect = screen.getByLabelText(/Occasion:/i);
//   fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });

//   // Find and submit the form
//   const submitButton = screen.getByRole("button", {
//     name: /Make Your reservation/i,
//   });
//   fireEvent.click(submitButton);

//   // Assertions
//   expect(mockSubmit).toHaveBeenCalled(); // Check if onSubmit was called
//   // You can add more assertions to check if mockSubmit was called with specific data:
//   // expect(mockSubmit).toHaveBeenCalledWith({ date: '2023-12-24', time: '19:00', guests: '4', occasion: 'Anniversary' });
// });

describe('BookingForm', () => {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

  const formData = {
    date: '',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday'
  };

  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  it('renders the form with correct initial values', () => {
    render(
        <BookingForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            availableTimes={availableTimes}
        />
    );

    expect(screen.getByRole('heading', { name: /Reserve Your Table/i })).toBeInTheDocument();

    expect(screen.getByLabelText(/Choose date:/i)).toHaveValue('');
    expect(screen.getByLabelText(/Choose time:/i)).toHaveValue('17:00');
    expect(screen.getByLabelText(/Number of guests:/i)).toHaveValue(1);
    expect(screen.getByLabelText(/Occasion:/i)).toHaveValue('Birthday');
  });

  it('disables submit button initially and enables when the form is valid', () => {
    render(
        <BookingForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            availableTimes={availableTimes}
        />
    );

    // Initially disabled because date is not filled
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeDisabled(); 

    // Simulate filling the form to make it valid
    fireEvent.change(screen.getByLabelText(/Choose date:/i), { target: { value: '2024-01-20' } });

    // Now the button should be enabled
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeEnabled();
  });

  describe('Input validation attributes', () => {
    it('should have required attribute for date input', () => {
      render(<BookingForm availableTimes={availableTimes} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />);
      const dateInput = screen.getByLabelText(/Choose date:/i);
      expect(dateInput).toBeRequired();
    });

    it('should have required attribute for time select', () => {
      render(<BookingForm availableTimes={availableTimes} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />);
      const timeSelect = screen.getByLabelText(/Choose time:/i);
      expect(timeSelect).toBeRequired();
    });

    it('should have required, min, and max attributes for guests input', () => {
      render(<BookingForm availableTimes={availableTimes} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />);
      const guestsInput = screen.getByLabelText(/Number of guests:/i);
      expect(guestsInput).toBeRequired();
      expect(guestsInput).toHaveAttribute('min', '1');
      expect(guestsInput).toHaveAttribute('max', '10');
    });
  });

  describe('JavaScript validation functions', () => {
    it('should update form data on change', () => {
      render(
          <BookingForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              availableTimes={availableTimes}
          />
      );
      const dateInput = screen.getByLabelText(/Choose date:/i);
      fireEvent.change(dateInput, { target: { value: '2024-01-20' } });
      expect(handleChange).toHaveBeenCalledWith(expect.any(Object)); // Check if handleChange is called with an event object
    });
  });

});