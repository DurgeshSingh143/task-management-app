import React, { useRef } from "react";
import "./LoginScreen.css";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    // Get entered values
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    // Get stored signup data
    const storedData = JSON.parse(localStorage.getItem("signupData"));

    // Check if email/password matches
    if (
      storedData &&
      enteredEmail === storedData.email &&
      enteredPassword === storedData.password
    ) {
      alert("Login successful!");
      console.log("Welcome,", storedData.fullName);
      navigate("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="login_main_container">
      <form className="login_container" onSubmit={handleLogin}>
        <h2>
          Sign in to your <br />
          Task Management App account
        </h2>

        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>

        <fieldset>
          <legend>Email Address</legend>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            ref={emailRef}
            required
            autoComplete="username"
          />
        </fieldset>

        <fieldset>
          <legend>Password</legend>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            ref={passwordRef}
            required
            autoComplete="current-password"
          />
        </fieldset>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;
