import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [islogin, setIslogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={islogin ? "active" : ""}
            onClick={() => setIslogin(true)}
          >
            Login
          </button>
          <button
            className={!islogin ? "active" : ""}
            onClick={() => setIslogin(false)}
          >
            Signup
          </button>
        </div>
        {islogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Enter Email Address" required />
              <input type="password" placeholder="Enter Password" required />
              <a href="#">forgot password?</a>
              <button>Login</button>
              <p>
                Not a member ?{" "}
                <a href="#" onClick={() => setIslogin(false)}>
                  Signup
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Signup Form</h2>
              <input type="email" placeholder="Enter Email Address" required />
              <input type="password" placeholder="Enter Password" required />
              <input type="password" placeholder="Confirm Password" required />
              <button>signup</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default App;
