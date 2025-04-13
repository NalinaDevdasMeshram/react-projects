import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setErrorMessage("Welcome,User!!");
      setIsVisible(false);
    } else {
      setErrorMessage("Enter valid password or username!!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Form </h1>
      <p>{errorMessage}</p>
      {isVisible && (
        <>
          <label>Username :</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button>Submit</button>
        </>
      )}
    </form>
  );
};

export default App;
