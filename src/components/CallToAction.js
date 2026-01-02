import { useNavigate } from "react-router-dom";

function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          A family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>

        <button onClick={() => navigate("/booking")}>
          Reserve a Table
        </button>
      </div>

      <img src="/dish.jpg" alt="Dish" className="hero-image" />
    </section>
  );
}

export default CallToAction;
