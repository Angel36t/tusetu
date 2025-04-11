import { createContext, useContext, useState, useEffect } from "react";
import { loginService } from "../api/api";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("themeMode") || "solid";
  });

  const login = async (email, password, rememberMe) => {
    try {
      const { id, user_name, position } = await loginService(email, password);

      const userInfo = { email, name: user_name, position, id };

      localStorage.setItem(
        "authData",
        JSON.stringify({ id, email, password, position })
      );

      setUser(userInfo);
      return userInfo;
    } catch (error) {
      console.error(
        "Error al iniciar sesión:",
        error.response?.data || error.message
      );
      return null;
    }
  };

  const logout = () => {
    localStorage.removeItem("authData");
    setUser(null);
  };

  useEffect(() => {
    const checkAuthData = async () => {
      const storedAuthData = localStorage.getItem("authData");
      if (storedAuthData) {
        const { email, password } = JSON.parse(storedAuthData);
        const userInfo = await login(email, password, true);
        if (userInfo) {
          setUser(userInfo);
        }
      }
      setLoading(false);
    };

    checkAuthData();
  }, []);

  // Este effect guarda el themeMode en el localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        themeMode,
        setThemeMode,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
