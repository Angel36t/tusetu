import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("authUser"));
    if (authData && authData.isAuthenticated && authData.rememberMe) {
      setIsAuthenticated(true);
    }
    setRememberMe(authData?.rememberMe || false);
    setLoading(false); // Autenticación completada
  }, []);

  const login = (email, password, remember) => {
    const authUser = {
      email: btoa(email),
      password: btoa(password),
      isAuthenticated: true,
      rememberMe: remember,
    };
    setIsAuthenticated(true);
    localStorage.setItem("authUser", JSON.stringify(authUser));
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("authUser");
    localStorage.removeItem("lastPath");
  };

  const saveLastPath = (path) => {
    localStorage.setItem("lastPath", path);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, rememberMe, setRememberMe, saveLastPath, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
