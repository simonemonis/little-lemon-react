import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section
      style={{
        padding: "60px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f9f9f9", // optional soft background
        minHeight: "calc(100vh - 120px)", // ensures it fills nicely
      }}
    >
      <h1
        style={{
          color: "#F4CE14",
          marginBottom: "30px",
          fontSize: "2.2rem",
          textAlign: "center",
        }}
      >
        Reserve a Table
      </h1>

      {/* Card wrapper */}
      <div
        style={{
          backgroundColor: "white",
          padding: "40px 30px",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          maxWidth: "400px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </div>
    </section>
  );
}

export default BookingPage;
