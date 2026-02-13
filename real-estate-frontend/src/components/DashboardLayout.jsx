import { Link } from "react-router-dom";

function DashboardLayout({ role, children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}
      <div style={{
        width: "250px",
        background: "#1e293b",
        color: "white",
        padding: "30px"
      }}>
        <h2>{role} Panel</h2>

        {role === "Admin" && (
          <>
            <Link to="/admin" style={linkStyle}>Dashboard</Link>
            <Link to="#" style={linkStyle}>All Properties</Link>
            <Link to="#" style={linkStyle}>Users</Link>
            <Link to="#" style={linkStyle}>Interests</Link>
          </>
        )}

        {role === "Seller" && (
          <>
            <Link to="/seller" style={linkStyle}>Dashboard</Link>
            <Link to="#" style={linkStyle}>Add Property</Link>
            <Link to="#" style={linkStyle}>My Listings</Link>
          </>
        )}

        {role === "Buyer" && (
          <>
            <Link to="/buyer" style={linkStyle}>Dashboard</Link>
            <Link to="#" style={linkStyle}>Browse</Link>
            <Link to="#" style={linkStyle}>My Interests</Link>
          </>
        )}

        <Link to="/" style={linkStyle}>Logout</Link>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px", background: "#f1f5f9" }}>
        {children}
      </div>
    </div>
  );
}

const linkStyle = {
  display: "block",
  color: "#cbd5e1",
  textDecoration: "none",
  marginBottom: "15px"
};

export default DashboardLayout;
