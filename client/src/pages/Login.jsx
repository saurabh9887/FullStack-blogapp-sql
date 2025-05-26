import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { requiredMessage } from "../support";
import { LoginUserAPI } from "../API_Services/AuthAPI";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  console.log("currentUser", currentUser);

  const handleLogin = (e) => {
    e.preventDefault();
    let isValid = false;
    if (
      loginUser.username === "" ||
      loginUser.username === null ||
      loginUser.username === undefined ||
      loginUser.password === "" ||
      loginUser.password === null ||
      loginUser.password === undefined
    ) {
      setError(true);
      isValid = true;
    } else if (loginUser.password && !isValidPassword(loginUser.password)) {
      setError(true);
      isValid = true;
    }

    const params = {
      username: loginUser.username,
      password: loginUser.password,
    };

    if (!isValid) {
      LoginUserData(params);
    }
  };

  const LoginUserData = async (params) => {
    try {
      const res = await LoginUserAPI(params);
      localStorage.setItem("user", JSON.stringify(res.data));
      setCurrentUser(res.data);
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data);
      console.log(error);
    }
  };

  const isValidPassword = (password) => {
    // At least 1 letter, 1 digit, 1 special char, min 8 chars
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    return passwordRegex.test(password);
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setErrorMessage("");
            let inputVal = e.target.value;
            if (inputVal.startsWith(" ")) {
              inputVal = inputVal.trimStart();
            }

            setLoginUser((prev) => ({
              ...prev,
              username: inputVal,
            }));
          }}
        />
        {error &&
        (loginUser.username === "" ||
          loginUser.username === undefined ||
          loginUser.username === null) ? (
          <span className="error_Message">{requiredMessage}</span>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setErrorMessage("");
            const inputVal = e.target.value;

            setLoginUser((prev) => ({
              ...prev,
              password: inputVal,
            }));
          }}
        />
        {error &&
        (loginUser.password === "" ||
          loginUser.password === undefined ||
          loginUser.password === null) ? (
          <span className="error_Message">{requiredMessage}</span>
        ) : loginUser.password && !isValidPassword(loginUser.password) ? (
          <span className="error_Message">Please enter a valid password</span>
        ) : (
          ""
        )}

        {errorMessage && <span className="error_Message">{errorMessage}</span>}
        <button>Login</button>
        <span>
          Don't have an account? <Link to="/register">Register here!</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
