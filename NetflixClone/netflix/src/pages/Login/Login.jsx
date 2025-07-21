import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login_form">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Enter Your Name" required />
          <input type="email" placeholder="Enter Youe Email" required />
          <input type="password" placeholder="Enter Password" required />
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
          </div>
          <p>Need help?</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
