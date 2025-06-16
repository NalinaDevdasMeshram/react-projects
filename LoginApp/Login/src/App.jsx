import { useState } from "react";
import "./App.css";
const App = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isvisible, setVisible] = useState(true);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (userName === "user" && password === "password") {
      setMessage("welcome, user!!");
      setVisible(false);
    } else {
      setMessage("Enter valid password or username");
    }
  };
  return (
    <form onSubmit={handlesubmit}>
      <h2>Login Form</h2>
      <p>{message}</p>
      {isvisible && (
        <>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
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
