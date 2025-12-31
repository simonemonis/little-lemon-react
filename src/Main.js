import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer } from "react";

import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import { fetchAPI, submitAPI } from "./api";

/* Reducer helpers */
function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_DATE":
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
}

function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  /* ✅ SUBMIT FORM HANDLER */
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/booking"
        element={
          <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        }
      />

      <Route
        path="/confirmed"
        element={<ConfirmedBooking />}
      />
    </Routes>
  );
}

export default Main;
