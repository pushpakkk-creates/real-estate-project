import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="logo">NagpurEstate</div>
      </Link>

      <div className="nav-links">
        <Link to="/properties">Buy</Link>
        <Link to="/seller">Post Property</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="register-btn">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
