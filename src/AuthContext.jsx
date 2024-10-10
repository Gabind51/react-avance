import { createContext, useState } from "react";

export const AuthContext = createContext(true, []);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated((prevAuth) => !prevAuth);
  };

  console.log(isAuthenticated)

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
