// src/components/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // POST request to Django backend for JWT token
      const response = await axios.post("http://localhost:8000/api/token/", {
        phone,
        password,
      });

      // Store the JWT token in localStorage
      const { access, refresh } = response.data;
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);

      alert("Login successful!");
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError("Invalid phone number or password");
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
              Password<br />
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

export default Login;
