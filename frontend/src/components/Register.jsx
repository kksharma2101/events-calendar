// components/Register.js
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/register", {
      userName,
      email,
      password,
    });
    alert("User registered!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="register-container">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
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
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default Register;
