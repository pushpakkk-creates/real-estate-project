import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">NagpurEstate</div>

      <div className="nav-links">
        <Link to="/">Buy</Link>
        <Link to="/properties">Properties</Link>
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
