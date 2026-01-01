import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav" aria-label="Main navigation">
      <img src="/logo.png" alt="Little Lemon Logo" className="nav-logo" />

      <ul className="nav-links">
        <li><Link to="/" aria-label="Navigate to Home">Home</Link></li>
        <li><Link to="/" aria-label="Navigate to Menu">Menu</Link></li>
        <li><Link to="/booking" aria-label="Navigate to Reservations">Reservations</Link></li>
        <li><Link to="/" aria-label="Navigate to Order Online">Order Online</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
