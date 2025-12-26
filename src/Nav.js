function Nav() {
  return (
    <nav className="nav">
      <img src="/logo.png" alt="Little Lemon Logo" className="nav-logo" />

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
