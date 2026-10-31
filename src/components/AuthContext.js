
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, toggleAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}
