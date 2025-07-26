import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login_form">
        <h2>Sign Up</h2>
        <form>
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Enter Your Name" required />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Enter Youe Email" required />
          <input type="password" placeholder="Enter Password" required />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="switch_login">
          {signState === "Sign In" ? (
            <p>
              New to Netflix ?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have Account ?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
