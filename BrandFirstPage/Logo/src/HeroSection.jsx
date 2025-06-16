import React from "react";
import "./App.css";
import Brandlogo from "./assets/Screenshot 2025-06-12 141535.png";
const HeroSection = () => {
  return (
    <div className="herosection">
      <p>
        Brand marketing focuses on building and managing a company's brand to
        enhance its reputation, increase customer loyalty, and drive sales. Key
        topics include brand strategy, brand identity, brand positioning, brand
        communication, and managing brand crises...
      </p>
      <img src={Brandlogo} alt="Refresh" />
    </div>
  );
};

export default HeroSection;
