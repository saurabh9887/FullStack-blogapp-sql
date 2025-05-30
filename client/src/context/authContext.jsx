import { useEffect, useState } from "react";
import { createContext } from "react";
import { LogoutAPI } from "../API_Services/AuthAPI";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const navigate = useNavigate();

  const logout = async (inputs) => {
    await LogoutAPI();
    setCurrentUser(null);
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
