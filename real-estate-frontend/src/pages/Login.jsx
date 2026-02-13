import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("Buyer");

  const handleLogin = () => {
    if (role === "Admin") navigate("/admin");
    if (role === "Seller") navigate("/seller");
    if (role === "Buyer") navigate("/buyer");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

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
