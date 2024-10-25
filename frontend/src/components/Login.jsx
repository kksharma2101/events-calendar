import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${process.env.REACT_APP_API_URL}login`, {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>If you don't have account</p>
        <Link to="/register">Register</Link>
      </div>
    </form>
  );
};

export default Login;
