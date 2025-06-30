import React from "react";
import "./LandingScreen.css";
import { Link } from "react-router-dom";

const LandingScreen = () => {
  return (
    <div className="landing_main_container">
      <div className="landing_container">
        <h2>Welcome to Task Management App</h2>

        <p>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit,
        </p>

        <Link to={"/signup"}>
          <button className="btn_Create_Account">Create Account</button>
        </Link>

        <Link to={"/login"}>
          <button className="btn_Register_Account">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingScreen;
