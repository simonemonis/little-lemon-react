import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1: LOGO */}
        <div className="footer-column">
          <img
            src="/logo2.png"
            alt="Little Lemon Logo"
            className="footer-logo"
          />
        </div>

        {/* COLUMN 2: NAVIGATION */}
        <div className="footer-column">
          <h4 className="footer-heading">Navigation</h4>
          <nav className="footer-nav" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/">Menu</Link>
            <Link to="/booking">Reservations</Link>
            <Link to="/about">About</Link>
            <Link to="/">Order Online</Link>
          </nav>
        </div>

        {/* COLUMN 3: CONTACT */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact</h4>
          <p>69 Vico Araratiano</p>
          <p>(709) 879-4459</p>
          <a href="mailto:littlelemon@gmail.com">
            Email Us – littlelemon@gmail.com
          </a>
        </div>

      </div>

      <p className="footer-bottom">
        © 2025 Little Lemon Restaurant
      </p>
    </footer>
  );
}

export default Footer;
