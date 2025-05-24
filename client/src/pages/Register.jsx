import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUserAPI } from "../API_Services/AuthAPI";
import { requiredMessage } from "../support";

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    let isValid = false;
    if (
      registerUser.username === "" ||
      registerUser.username === null ||
      registerUser.username === undefined ||
      registerUser.email === "" ||
      registerUser.email === null ||
      registerUser.email === undefined ||
      registerUser.password === "" ||
      registerUser.password === null ||
      registerUser.password === undefined
    ) {
      setError(true);
      isValid = true;
    } else if (registerUser.email && !isValidEmail(registerUser.email)) {
      setError(true);
      isValid = true;
    } else if (
      registerUser.password &&
      !isValidPassword(registerUser.password)
    ) {
      setError(true);
      isValid = true;
    }

    const params = {
      username: registerUser.username,
      email: registerUser.email,
      password: registerUser.password,
    };

    if (!isValid) {
      RegisterUserData(params);
    }
  };

  const RegisterUserData = async (params) => {
    try {
      await RegisterUserAPI(params);

      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response.data);
      console.log(error);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    // At least 1 letter, 1 digit, 1 special char, min 8 chars
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          required
          className="form-input"
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setErrorMessage("");
            let inputVal = e.target.value;
            if (inputVal.startsWith(" ")) {
              inputVal = inputVal.trimStart();
            }

            setRegisterUser((prev) => ({
              ...prev,
              username: inputVal,
            }));
          }}
        />
        {error &&
        (registerUser.username === "" ||
          registerUser.username === undefined ||
          registerUser.username === null) ? (
          <span className="error_Message">{requiredMessage}</span>
        ) : (
          ""
        )}
        <input
          required
          className="form-input"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setErrorMessage("");
            let inputVal = e.target.value;

            // Remove leading spaces
            if (inputVal.startsWith(" ")) {
              inputVal = inputVal.trimStart();
            }

            // Prevent spaces anywhere in the email
            if (/\s/.test(inputVal)) {
              return; // Ignore input with spaces
            }

            // Prevent consecutive dots
            if (inputVal.includes("..")) {
              return;
            }

            setRegisterUser((prev) => ({
              ...prev,
              email: inputVal,
            }));
          }}
        />
        {error &&
        (registerUser.email === "" ||
          registerUser.email === undefined ||
          registerUser.email === null) ? (
          <span className="error_Message">{requiredMessage}</span>
        ) : registerUser.email && !isValidEmail(registerUser.email) ? (
          <span className="error_Message">
            Please enter a valid email address
          </span>
        ) : (
          ""
        )}
        <input
          required
          className="form-input"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setErrorMessage("");
            const inputVal = e.target.value;

            setRegisterUser((prev) => ({
              ...prev,
              password: inputVal,
            }));
          }}
        />
        {error &&
        (registerUser.password === "" ||
          registerUser.password === undefined ||
          registerUser.password === null) ? (
          <span className="error_Message">{requiredMessage}</span>
        ) : registerUser.password && !isValidPassword(registerUser.password) ? (
          <span className="error_Message">Please enter a valid password</span>
        ) : (
          ""
        )}

        {errorMessage && <span className="error_Message">{errorMessage}</span>}

        <button>Register</button>
        <span>
          Already have an account? <Link to="/login">Login here!</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
