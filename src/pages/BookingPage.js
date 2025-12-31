import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section style={{ padding: "40px" }}>
      <h1>Reserve a Table</h1>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
