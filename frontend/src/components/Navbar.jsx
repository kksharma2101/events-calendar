import React, { useState } from "react";
import ".././App.css";

const Navbar = () => {
  const auth = localStorage.getItem("token");

  const handleLogout = async () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="main">
        {
          !auth ? <h4 style={{margin: "auto", color: "red" }}>Please signIn / signUp account</h4> : <h3>Create your Events</h3>
        }
        {auth ? <button onClick={handleLogout}>Logout</button> : " "}
      </div>
    </div>
  );
};

export default Navbar;
