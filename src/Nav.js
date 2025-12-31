import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <img src="/logo.png" alt="Little Lemon Logo" className="nav-logo" />

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/">Order Online</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
