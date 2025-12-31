/* global submitAPI */
import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_DATE", payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm({
      date,
      time,
      guests,
      occasion,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="20"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button
        type="submit"
        style={{
          backgroundColor: "#F4CE14",
          padding: "10px",
          border: "none",
          fontWeight: "bold",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Submit Reservation
      </button>
    </form>
  );
}

export default BookingForm;
