import { reducer, initialState } from "./App"; // Adjust the path as needed

// Mock the fetchAPI function for testing
jest.mock("./api", () => ({
  fetchAPI: (date) => {
    // Return sample data, you can customize this based on your needs
    return ["17:00", "18:00", "19:00"];
  },
  // ... other mocked API functions if needed
}));

describe("timesReducer", () => {
  test("initializeTimes should return the initial state", () => {
    const result = reducer(undefined, {});
    expect(result).toEqual(initialState); // Should be the initial (empty) state
  });

  test("updateTimes should update availableTimes with fetched data", () => {
    const selectedDate = "2023-11-10";
    const action = { type: "UPDATE_TIMES", payload: selectedDate };

    const result = reducer(initialState, action);
    // Assertion is now synchronous:
    expect(result.availableTimes).toEqual(["17:00", "18:00", "19:00"]);
  });

  // ... add more tests for other reducer cases ...
});

// Mock localStorage
Object.defineProperty(window, "localStorage", {
  value: {
    getItem: jest.fn(() => null), // Initially no data
    setItem: jest.fn(() => null),
  },
  writable: true,
});

describe("timesReducer - Local Storage", () => {
  test("should save bookings to localStorage", () => {
    const newBooking = [
      { date: "2023-12-01", time: "18:00", guests: 2, occasion: "Birthday" },
    ];

    // 1. Create a state with an initial bookings array
    const initialBookingsState = { ...initialState, bookings: [] };

    // 2. Dispatch the action to update the state
    const updatedState = reducer(initialBookingsState, {
      type: "MAKE_BOOKING",
      payload: newBooking,
    });

    // 3. **Manually call localStorage.setItem** to simulate saving
    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedState.bookings) 
    );

    // 4. Check if localStorage.setItem was called with the correct key and data
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "bookings",
      JSON.stringify([newBooking]) 
    );
  });

  test("should load bookings from localStorage", () => {
    const storedBookings = [
      { date: "2023-12-05", time: "20:00", guests: 4, occasion: "Anniversary" },
    ];
    localStorage.getItem.mockReturnValueOnce(JSON.stringify(storedBookings)); 

    const result = reducer(initialState, { 
      type: "LOAD_BOOKINGS", 
      payload: storedBookings 
    });

    expect(result.bookings).toEqual(storedBookings);
  });
});