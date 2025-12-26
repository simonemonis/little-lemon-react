function Main() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <p>
            A family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>

        <img
          src="/dish.jpg"
          alt="Dish"
          className="hero-image"
        />
      </section>

      <section className="specials">
        <h2>This Week’s Specials</h2>

        <div className="specials-cards">
          <div className="card">
            <h3>Greek Salad</h3>
            <p>Fresh salad with feta cheese.</p>
            <button>Order Online</button>
          </div>

          <div className="card">
            <h3>Bruschetta</h3>
            <p>Grilled bread with garlic and tomatoes.</p>
            <button>Order Online</button>
          </div>

          <div className="card">
            <h3>Lemon Dessert</h3>
            <p>Classic lemon-flavored dessert.</p>
            <button>Order Online</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
