import { useState, useEffect } from "react";

function App() {
  const [trafficLight, setTrafficLight] = useState("green");

  useEffect(() => {
    if (trafficLight === "green") {
      setTimeout(() => setTrafficLight("yellow"), 3000);
    } else if (trafficLight === "yellow") {
      setTimeout(() => setTrafficLight("red"), 1000);
    } else if (trafficLight === "red") {
      setTimeout(() => setTrafficLight("green"), 2000);
    }
    return () => clearInterval();
  }, [trafficLight]);

  return (
    <div
      style={{
        margin: "20px",
        border: "2px solid lightgray",
        width: "400px",
        height: "400px",
        textAlign: "center",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h3>Traffic Signal Controller</h3>
      <div
        style={{
          borderRadius: "50%",
          border: "1px solid gray",
          width: "100px",
          height: "100px",
          margin: "20px auto",
          backgroundColor: trafficLight === "green" ? "green" : "",
        }}
      ></div>
      <div
        style={{
          borderRadius: "50%",
          border: "1px solid gray",
          width: "100px",
          height: "100px",
          margin: "20px auto",
          backgroundColor: trafficLight === "yellow" ? "yellow" : "",
        }}
      ></div>
      <div
        style={{
          borderRadius: "50%",
          border: "1px solid gray",
          width: "100px",
          height: "100px",
          margin: "20px auto",
          backgroundColor: trafficLight === "red" ? "red" : "",
        }}
      ></div>
    </div>
  );
}

export default App;
