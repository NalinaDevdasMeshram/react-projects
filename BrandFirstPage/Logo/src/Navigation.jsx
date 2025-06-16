import React from "react";
import "./App.css";
import logo from "./assets/Screenshot 2025-06-12 141245.png";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Refresh" />
      </div>
      <div className="menu">
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
          <li href="#">Feedback</li>
          <li href="#">Help</li>
        </ul>
      </div>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
