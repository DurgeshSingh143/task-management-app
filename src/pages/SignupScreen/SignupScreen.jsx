import React, { useRef } from "react";
import "./SignupScreen.css";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const navigate = useNavigate();

  // Create refs for each input
  const fullNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const companyRef = useRef();
  const agencyYesRef = useRef();
  const agencyNoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get radio value manually
    const isAgency = agencyYesRef.current.checked
      ? "Yes"
      : agencyNoRef.current.checked
      ? "No"
      : "";

    const data = {
      fullName: fullNameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      company: companyRef.current.value,
      isAgency: isAgency,
    };

    fullNameRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    companyRef.current.value = "";
    agencyYesRef.current.checked = "";
    agencyNoRef.current.checked = "";

    localStorage.setItem("signupData", JSON.stringify(data));
    alert("SignUp Successfull!");
    console.log("Saved Data:", data);
    navigate("/login");
  };

  return (
    <div className="signup_main_container">
      <form className="signup_container" onSubmit={handleSubmit}>
        <h2>
          Create your <br />
          Task Management App account
        </h2>

        <fieldset>
          <legend>
            Full Name<span>*</span>
          </legend>
          <input
            type="text"
            placeholder="Enter name"
            ref={fullNameRef}
            required
          />
        </fieldset>

        <fieldset>
          <legend>
            Phone number<span>*</span>
          </legend>
          <input
            type="number"
            placeholder="Enter phone number"
            ref={phoneRef}
            required
          />
        </fieldset>

        <fieldset>
          <legend>
            Email address<span>*</span>
          </legend>
          <input
            type="email"
            placeholder="Enter email address"
            ref={emailRef}
            required
            autoComplete="username"
          />
        </fieldset>

        <fieldset>
          <legend>
            Password<span>*</span>
          </legend>
          <input
            type="password"
            placeholder="Enter password"
            ref={passwordRef}
            required
            autoComplete="current-password"
          />
        </fieldset>

        <fieldset>
          <legend>Company name</legend>
          <input
            type="text"
            placeholder="Enter company name"
            ref={companyRef}
          />
        </fieldset>

        <p className="radio_field">
          Are you an Agency?<span>*</span>
        </p>
        <div className="radio_field radio_input">
          <input
            id="yes"
            type="radio"
            name="agency"
            value="Yes"
            ref={agencyYesRef}
            required
          />
          <label htmlFor="yes">Yes</label>

          <input
            id="no"
            type="radio"
            name="agency"
            value="No"
            ref={agencyNoRef}
          />
          <label htmlFor="no">No</label>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignupScreen;
