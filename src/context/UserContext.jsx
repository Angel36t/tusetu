import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para autenticar usando `authData`
  const validateAuthData = (authData) => {
    const validEmail = "arbt18@gmail.com";
    const validPassword = "Bata990818";
    return (
      authData.email === validEmail && authData.password === validPassword
    );
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const storedAuthData = localStorage.getItem("authData");

      if (storedAuthData) {
        const authData = JSON.parse(storedAuthData);
        if (validateAuthData(authData)) {
          // Si la validación es correcta, configura el usuario
          setUser({ email: authData.email });
        }
      }
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeoutId);
  }, []);

  // Función para actualizar el usuario y `authData` en localStorage
  const handleSetUser = (userInfo) => {
    if (userInfo) {
      const authData = { email: userInfo.email, password: userInfo.password };
      localStorage.setItem("authData", JSON.stringify(authData));
    } else {
      localStorage.removeItem("authData");
    }
    setUser(userInfo);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: handleSetUser, // usa handleSetUser para actualizar y sincronizar en localStorage
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
