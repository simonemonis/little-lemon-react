function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week’s Specials</h2>
        <button className="menu-btn">Online Menu</button>
      </div>

      <div className="specials-cards">
        <div className="card">
          <img src="/greek-salad.jpg" alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>Fresh salad with feta cheese.</p>
          <button>Order Online</button>
        </div>

        <div className="card">
          <img src="/bruschetta.jpg" alt="Bruschetta" />
          <h3>Bruschetta</h3>
          <p>Grilled bread with garlic and tomatoes.</p>
          <button>Order Online</button>
        </div>

        <div className="card">
          <img src="/lemon-dessert.jpg" alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p>Classic lemon-flavored dessert.</p>
          <button>Order Online</button>
        </div>
      </div>
    </section>
  );
}

export default Specials;
