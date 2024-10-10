import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/401" />;
}
