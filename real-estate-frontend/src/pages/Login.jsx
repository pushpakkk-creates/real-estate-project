import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("Buyer");
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    if (!phone) {
      alert("Please enter phone number");
      return;
    }

    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userRole", role);

    if (role === "Admin") navigate("/admin");
    if (role === "Seller") navigate("/seller");
    if (role === "Buyer") navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <select onChange={(e) => setRole(e.target.value)}>
          <option>Buyer</option>
          <option>Seller</option>
          <option>Admin</option>
        </select>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
