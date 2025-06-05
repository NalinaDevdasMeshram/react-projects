import React from "react";
import { useState } from "react";

const App = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const ColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    console.log(hex);
    let hexColor = "#";
    console.log(hexColor);
    for (let i = 0; i < 6; i++) {
      hexColor += hex[ColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleRGBColor = () => {
    const r = ColorUtility("256");
    const g = ColorUtility("256");
    const b = ColorUtility("256");
    setColor(`rgb (${r} ${g} ${b})`);
  };

  return (
    <div style={{ width: "100wh", height: "100vh", background: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>RGB Color</button>
      <button onClick={typeOfColor === "hex" ? handleHexColor : handleRGBColor}>
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
        <p>{color}</p>
      </div>
    </div>
  );
};

export default App;
