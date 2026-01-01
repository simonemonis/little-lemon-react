import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";   // ✅ Add navigation
import { submitAPI } from "../api";               // ✅ Correct import

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate(); // ✅ Create navigate function

  // Update available times when date changes
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_DATE", payload: selectedDate });
  };

  // Validate form
  useEffect(() => {
    if (date && time && guests >= 1 && occasion) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [date, time, guests, occasion]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    if (submitAPI(formData)) {
      navigate("/confirmed");   // ✅ Redirect to confirmation page
    } else {
      alert("Reservation failed. Please try again.");
    }
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
        onChange={(e) => setGuests(Number(e.target.value))}
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
        disabled={!isFormValid}
        style={{
          backgroundColor: isFormValid ? "#F4CE14" : "#ccc",
          padding: "10px",
          border: "none",
          fontWeight: "bold",
          borderRadius: "6px",
          cursor: isFormValid ? "pointer" : "not-allowed",
        }}
      >
        Submit Reservation
      </button>
    </form>
  );
}

export default BookingForm;
