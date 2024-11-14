// src/components/Login.jsx
import { useState } from "react";
import axios from "axios";
import './Login.css'
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const n = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:8000/api/users");
      const user = response.data.find(
        (user) => user.phone === phone && user.password === password
      );
      if (user) {
        alert("Login successful!");
        n("/admin");
      } else {
        setError("Invalid phone number or password");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <img style={{ flex: 1, background: "red" }} src="bgimg.png" />
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit} className="form-container">
          <h1 className="title">Login to Vi</h1>
          <p className="subtitle">Manage your Postpaid/Prepaid Account</p>
          <div>
            <label htmlFor="phone" className="input-label">
              Enter your mobile number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="password" className="input-label">
              Password<br></br>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;