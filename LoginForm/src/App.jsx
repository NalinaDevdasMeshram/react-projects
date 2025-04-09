import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="text" placeholder="Enter Email Address" />
              <input type="password" placeholder="Enter Password" />
              <a href="#">forgot Password?</a>
              <button>Login</button>
              <p>
                Not a member ?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Signup
                </a>
              </p>
            </div>
          </>
        ) : (
          <div className="form">
            <h2> Signup Form</h2>
            <input type="text" placeholder="Enter Email Address" />
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Signup</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
